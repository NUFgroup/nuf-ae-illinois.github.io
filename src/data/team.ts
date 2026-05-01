// ─────────────────────────────────────────────────────────────
//  TEAM DATA
//  Edit the arrays below to add, remove, or update members.
//
//  Faculty fields
//  ──────────────
//  initials    – 2-letter initials shown in the avatar circle
//  photo       – Optional path to photo in /public/images/,
//                e.g. "/images/team/rivera.png"
//  name        – Full name
//  title       – Academic title
//  dept        – Department string
//  focus       – One-line research focus shown under dept
//  email       – Email address
//  website     – Personal/faculty website URL
//
//  Graduate student fields
//  ───────────────────────
//  initials / photo / name / email  (same as above)
//  role        – e.g. "PhD Student, 3rd Year" or "MS Student"
//  focus       – Short research focus description
//
//  Undergraduate fields  (compact card style)
//  ─────────────────────
//  initials / photo / name / role / focus
//
//  Alumni fields
//  ─────────────
//  name        – Full name with degree, e.g. "Dr. Natalia Vega"
//  degree      – Degree string, e.g. "PhD, 2023"
//  position    – Current position, e.g. "Postdoctoral Fellow, MIT"
//  focus       – Thesis / research focus
// ─────────────────────────────────────────────────────────────

export interface FacultyMember {
  initials: string;
  photo?: string;
  name: string;
  title: string;
  dept: string;
  focus?: string;
  education?: string[];
  email: string;
  website?: string;
  github?: string;
  linkedin?: string;
  scholar?: string;
}

export interface GradStudent {
  initials: string;
  name: string;
  role: string;
  focus: string;
  email: string;
  photo?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  scholar?: string;
}

export interface Undergrad {
  initials: string;
  photo?: string;
  name: string;
  role: string;
  focus?: string;
}

export interface Alumnus {
  name: string;
  degree: string;
  linkedin?: string;
}

export interface UndergradAlumnus {
  name: string;
  degree: string;
}

// ── Faculty ───────────────────────────────────────────────────
export const FACULTY: FacultyMember[] = [
  {
    initials: 'AG',
    name: 'Prof. Andres Goza',
    title: 'Assistant Professor',
    dept: 'Department of Aerospace Engineering, University of Illinois Urbana Champaign',
    education: [
      'Assistant Professor, UIUC Aerospace Engineering (2019–present)',
      'Postdoctoral Research Associate — Princeton University',
      'Ph.D., Mechanical Engineering — Caltech (2017)',
      'MSc., Mechanical Engineering — Caltech (2013)',
      'B.S., Mechanical Engineering — Rice University (2011)',
      
    ],
    email: 'agoza@illinois.edu',
    website: 'https://aerospace.illinois.edu/directory/profile/agoza',
    photo: '/images/team/andres-goza2.png',
    github: 'https://github.com/NUFgroup',
    scholar: 'https://scholar.google.com/citations?user=l7tRwZgAAAAJ&hl=en&oi=ao'
  },
];

// ── Graduate Students ─────────────────────────────────────────
export const GRAD_STUDENTS: GradStudent[] = [
  {
    initials: 'SB',
    name: 'Srikumar Balasubramanian',
    role: 'PhD Student',
    focus: 'Srikumar is a Ph.D. student in the Department of Aerospace Engineering at UIUC.',
    email: 'sb44@illinois.edu',
    photo: '/images/team/srikumar-balasubramanian.png',
    github:   'https://github.com/srikumarbalasubramanian',
    linkedin: 'https://www.linkedin.com/in/srikumar1998/',
    scholar:  'https://scholar.google.com/citations?hl=en&user=A3L_JO4AAAAJ',
  },
  {
    initials: 'AMB',
    name: 'Arturo Machado Burgos',
    role: 'PhD Student',
    focus: 'Arturo is a Ph.D. student in the Department of Mechanical Science and Engineering at UIUC. His research focuses on computational fluid–structure interaction, with particular interest in mechanical metamaterials, immersed boundary methods, and unsteady aerodynamic flows. He also has broader interests in scientific machine learning and data-driven modeling for fluid mechanics.',
    email: 'your-email@illinois.edu',
    photo: '/images/team/arturo-burgos.png',
    github:   'https://github.com/arturofburgos',
    linkedin: 'https://www.linkedin.com/in/arturofburgos/',
    scholar:  'https://scholar.google.com/citations?hl=en&user=6ZHP0c4AAAAJ',
  },
  {
    initials: 'ZF',
    name: 'Zoey Flynn',
    role: 'PhD Student',
    focus: 'Zoey is a Ph.D. student in the Department of Aerospace Engineering at UIUC. Their research focuses on the development of analysis techniques for various near-periodic fluid flows incorporating dynamic systems and statistical tools. Problems of interest include high speed flows, shock structures, and turbulent wakes.',
    email: 'zoeyf2@illinois.edu',
    photo: '/images/team/zoey-flynn.png',
    github:   'https://github.com/zoeyf2',
    scholar:  'https://scholar.google.com/citations?hl=en&user=dyObVM8AAAAJ',
  },
  {
    initials: 'EJ',
    name: 'Elyse Jones',
    role: 'PhD Student',
    focus: 'Elyse is a 3rd year Ph.D. Student in the Aerospace Engineering Department at UIUC. Focusing on reduced order methods for computational modeling of fluid-metamaterial interaction, her research combines resolvent analysis and immersed boundary methods to create a computationally inexpensive and versatile tool for complex structures in turbulent channel flow.',
    email: 'elysej2@illinois.edu',
    photo: '/images/team/elyse-jones.png',
    linkedin: 'https://www.linkedin.com/in/elyse-jones/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=Ao_1DFwAAAAJ',
  },
  {
    initials: 'AM',
    name: 'Azzurra Meo',
    role: 'PhD Student',
    focus: 'Azzurra is a Ph.D. student in the Department of Aerospace Engineering at UIUC. Her research focuses on numerical methods for fluid–structure interaction, with particular interest in preconditioning techniques for immersed boundary formulations. Her work aims to improve the efficiency and robustness of simulations involving complex moving boundaries and unsteady aerodynamic flows.',
    email: 'ameo@illinois.edu',
    photo: '/images/team/azzurra-meo.png',
    github:   'https://github.com/meoazz',
    linkedin: 'https://www.linkedin.com/in/azzurra-m1108/',
  },
  {
    initials: 'NO',
    name: "Nick O'Brien",
    role: 'MSc. Student',
    focus: 'Nick is a Master\'s student in the Department of Aerospace Engineering at UIUC.',
    email: 'nobrien5@illinois.edu',
    // photo: '/images/team/nick-obrien.png',
    github:   'https://github.com/nick4f42',

  },
];



// ── Graduate Alumni ───────────────────────────────────────────
export const GRAD_ALUMNI: Alumnus[] = [
  {
    name: 'Ernold Thompson',
    degree: 'MSc, 2024',
    linkedin: 'https://www.linkedin.com/in/ernold-thompson-705940338/'
  },
  {
    name: 'Dr. Nirmal Jayaprasad Nair',
    degree: 'PhD, 2022',
    linkedin: 'https://www.linkedin.com/in/nirmaljp6/'
  },
  {
    name: 'Noah Osman',
    degree: 'MSc, 2021',
    linkedin: 'https://www.linkedin.com/in/noahaosman/'
  },
];

// ── Undergraduate Researchers ─────────────────────────────────
export const UNDERGRADS: Undergrad[] = [
  {
    initials: 'KN',
    name: 'Khoi Nguyen',
    role: 'Undergraduate Researcher',
    focus: 'AE@UIUC',
  },
];

// ── Undergraduate Alumni ──────────────────────────────────────
export const UNDERGRAD_ALUMNI: UndergradAlumnus[] = [
  {name: 'Zavar Abidi',      degree: 'AE @UIUC' },
  { name: 'Emily Williams',  degree: 'AE @UIUC' },
  { name: 'Avery Moore',     degree: 'AE @UIUC' },
  { name: 'Hemang Dama',     degree: 'AE @UIUC' },
  { name: 'Avantika Murali', degree: 'AE @UIUC' },
  { name: 'Kevin Triner',    degree: 'AE @UIUC' },
  { name: 'Wesley Warton',   degree: 'AE @UIUC' },
  { name: 'Robert Zajac',    degree: 'AE @UIUC' },
];
