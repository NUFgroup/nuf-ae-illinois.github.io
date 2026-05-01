#!/usr/bin/env node
// scripts/bibtex-to-publications.mjs
// Reads src/data/publications.bib and writes src/data/publications.ts.
// Usage: npm run pubs:build

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '..');
const BIB_PATH  = join(ROOT, 'src', 'data', 'publications.bib');
const OUT_PATH  = join(ROOT, 'src', 'data', 'publications.ts');

// ── BibTeX parser ─────────────────────────────────────────────
// Handles nested braces, quote-delimited values, and bare numbers.

function parseBibtex(src) {
  const entries = [];
  let i = 0;

  while (i < src.length) {
    while (i < src.length && src[i] !== '@') i++;
    if (i >= src.length) break;
    i++; // consume '@'

    let type = '';
    while (i < src.length && /\w/.test(src[i])) type += src[i++];
    type = type.toLowerCase();

    while (i < src.length && /\s/.test(src[i])) i++;

    const open  = src[i];
    const close = open === '{' ? '}' : ')';
    if (open !== '{' && open !== '(') continue;
    i++;

    // Skip special BibTeX entry types
    if (type === 'string' || type === 'preamble' || type === 'comment') {
      let depth = 1;
      while (i < src.length && depth > 0) {
        if (src[i] === open) depth++;
        else if (src[i] === close) depth--;
        i++;
      }
      continue;
    }

    // Read citation key
    let key = '';
    while (i < src.length && src[i] !== ',' && src[i] !== close) key += src[i++];
    key = key.trim();
    if (src[i] === ',') i++;

    // Read fields
    const fields = {};
    while (i < src.length) {
      while (i < src.length && /[\s,]/.test(src[i])) i++;
      if (i >= src.length || src[i] === close) { i++; break; }

      let name = '';
      while (i < src.length && src[i] !== '=' && src[i] !== close && !/[\n,]/.test(src[i])) {
        name += src[i++];
      }
      name = name.trim().toLowerCase();

      if (src[i] !== '=') break;
      i++; // consume '='
      while (i < src.length && /[ \t]/.test(src[i])) i++;

      let value = '';
      if (i >= src.length) break;

      if (src[i] === '{') {
        i++;
        let depth = 1;
        while (i < src.length && depth > 0) {
          if (src[i] === '{') depth++;
          else if (src[i] === '}') depth--;
          if (depth > 0) value += src[i];
          i++;
        }
      } else if (src[i] === '"') {
        i++;
        while (i < src.length && src[i] !== '"') value += src[i++];
        if (i < src.length) i++;
      } else {
        while (i < src.length && !/[,}\)\s]/.test(src[i])) value += src[i++];
      }

      if (name) fields[name] = value.trim();
    }

    entries.push({ _type: type, _key: key, ...fields });
  }

  return entries;
}

// ── LaTeX → plain text ────────────────────────────────────────

function cleanLatex(str) {
  if (!str) return '';
  return str
    .replace(/\\&/g, '&')
    .replace(/\\%/g, '%')
    .replace(/\\textit\{([^}]*)\}/g, '$1')
    .replace(/\\textbf\{([^}]*)\}/g, '$1')
    .replace(/\\emph\{([^}]*)\}/g,   '$1')
    .replace(/\\url\{([^}]*)\}/g,    '$1')
    // LaTeX accents: \'e  \"o  \`a  \^u  \~n etc.
    .replace(/\\['`^"~=.]\{?([a-zA-Z])\}?/g, '$1')
    // \c{c} \c c cedilla
    .replace(/\\c\{?([cC])\}?/g, '$1')
    // Remove remaining \cmd{...} wrappers, keep content
    .replace(/\\\w+\{([^}]*)\}/g, '$1')
    // Remove leftover braces used for case-protection: {CFD} → CFD
    .replace(/\{([^}]*)\}/g, '$1')
    // Dashes
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    // Quotes
    .replace(/``/g, '“')
    .replace(/''/g, '”')
    .trim();
}

// ── Author formatting ─────────────────────────────────────────
// Input:  "Goza, Andres and Colonius, Tim"
// Output: "Goza A., Colonius T."

function formatAuthors(raw) {
  if (!raw) return '';
  return raw
    .split(/\s+and\s+/i)
    .map(a => {
      a = cleanLatex(a).trim();
      if (a.includes(',')) {
        const comma = a.indexOf(',');
        const last  = a.slice(0, comma).trim();
        const rest  = a.slice(comma + 1).trim();
        const init  = rest ? rest[0].toUpperCase() : '';
        return init ? `${last} ${init}.` : last;
      }
      // "First Last" format fallback
      const parts = a.split(/\s+/);
      if (parts.length === 1) return parts[0];
      const last = parts[parts.length - 1];
      const init = parts[0][0].toUpperCase();
      return `${last} ${init}.`;
    })
    .join(', ');
}

// ── DOI normalization ─────────────────────────────────────────

function normalizeDoi(doi) {
  if (!doi) return undefined;
  doi = doi.trim();
  if (!doi) return undefined;
  return doi.startsWith('http') ? doi : `https://doi.org/${doi}`;
}

// ── arXiv link ────────────────────────────────────────────────

function buildArxiv(entry) {
  const prefix = (entry.archiveprefix || '').toLowerCase();
  const eprint = entry.eprint;
  if (!eprint) return undefined;
  if (prefix === 'arxiv' || /^\d{4}\.\d+/.test(eprint)) {
    return `https://arxiv.org/abs/${eprint}`;
  }
  return undefined;
}

// ── PDF detection ─────────────────────────────────────────────

function extractPdf(entry) {
  const url = entry.url || '';
  if (/\.pdf$/i.test(url) || url.includes('/pdf/')) return url;
  return undefined;
}

// ── Map one BibTeX entry → Publication object ─────────────────

function toPublication(entry) {
  const title   = cleanLatex(entry.title);
  const authors = formatAuthors(entry.author);
  const venue   = cleanLatex(entry.journal || entry.booktitle || entry.school || '');
  const year    = parseInt(entry.year, 10);

  if (!title || !authors || !venue || isNaN(year)) return null;

  const doi   = normalizeDoi(entry.doi);
  const arxiv = buildArxiv(entry);
  const pdf   = extractPdf(entry);
  const highlighted = entry.highlight === 'true' || entry.highlight === 'yes';

  const pub = { title, authors, venue, year };
  if (highlighted) pub.highlighted = true;
  if (doi)         pub.doi         = doi;
  if (pdf)         pub.pdf         = pdf;
  if (arxiv)       pub.arxiv       = arxiv;
  return pub;
}

// ── Serialize one Publication to TypeScript literal ───────────

function serializePub(pub) {
  const lines = [
    `    title:   ${JSON.stringify(pub.title)},`,
    `    authors: ${JSON.stringify(pub.authors)},`,
    `    venue:   ${JSON.stringify(pub.venue)},`,
    `    year:    ${pub.year},`,
  ];
  if (pub.highlighted) lines.push(`    highlighted: true,`);
  if (pub.doi)         lines.push(`    doi:   ${JSON.stringify(pub.doi)},`);
  if (pub.pdf)         lines.push(`    pdf:   ${JSON.stringify(pub.pdf)},`);
  if (pub.arxiv)       lines.push(`    arxiv: ${JSON.stringify(pub.arxiv)},`);
  return `  {\n${lines.join('\n')}\n  }`;
}

// ── Main ──────────────────────────────────────────────────────

if (!existsSync(BIB_PATH)) {
  console.error(`Error: ${BIB_PATH} not found.`);
  process.exit(1);
}

const bibSrc      = readFileSync(BIB_PATH, 'utf-8');
const rawEntries  = parseBibtex(bibSrc);
const publications = rawEntries
  .map(toPublication)
  .filter(Boolean)
  .sort((a, b) => b.year - a.year);

const pubYears = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);

const ts = `\
// AUTO-GENERATED — do not edit by hand.
// Source:      src/data/publications.bib
// Regenerate:  npm run pubs:build
// ─────────────────────────────────────────────────────────────

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  highlighted?: boolean;
  doi?: string;
  pdf?: string;
  arxiv?: string;
}

export const PUB_YEARS: number[] = ${JSON.stringify(pubYears)};

export const PUBLICATIONS: Publication[] = [
${publications.map(serializePub).join(',\n')}
];
`;

writeFileSync(OUT_PATH, ts, 'utf-8');
console.log(`✓ Wrote ${publications.length} publications across ${pubYears.length} year(s) to src/data/publications.ts`);
if (pubYears.length) console.log(`  Years: ${pubYears.join(', ')}`);
