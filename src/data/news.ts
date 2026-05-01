// ─────────────────────────────────────────────────────────────
//  NEWS DATA
//  To add a news item: copy one of the objects below and fill
//  in the fields.  The list page and detail page are generated
//  automatically from this array.
//
//  Fields
//  ──────
//  slug      – URL slug, e.g. "immersa-v05-released"
//              → detail page lives at /news/<slug>
//  title     – Headline shown on the list and detail pages
//  date      – Human-readable date string, e.g. "April 10, 2025"
//  year      – Numeric year used for grouping on the list page
//  category  – Label shown in the colored badge
//  tagClass  – CSS class for the badge color:
//              tag-blue | tag-gold | tag-green |
//              tag-purple | tag-teal | tag-navy
//  summary   – Short text shown on the news card (1–3 sentences)
//  body      – Full HTML shown on the detail page.
//              Use <p>…</p> tags for paragraphs.
//  link      – Optional external URL (GitHub, paper, etc.)
//  linkLabel – Text for the external link button
// ─────────────────────────────────────────────────────────────

export interface NewsItem {
  slug: string;
  title: string;
  date: string;       // Full date shown on detail page, e.g. "January 31, 2026"
  shortDate: string;  // Short date shown on news list, e.g. "Jan 2026"
  year: number;
  category: string;
  tagClass: string;
  summary: string;
  body: string;
}

export const NEWS: NewsItem[] = [
  // ── 2026 ──────────────────────────────────────────────────
  {
    slug: 'jfs-fluid-metamaterial-interaction',
    title: 'Our paper on aerodynamic fluid-metamaterial interaction was accepted to JFS!',
    date: 'April 1, 2026',
    shortDate: 'Apr 2026',
    year: 2026,
    category: 'Publication',
    tagClass: 'tag-green',
    summary:
      'Our paper on aerodynamic fluid-metamaterial interaction was accepted by the Journal of Fluids and Structures.',
    body: `<p>Our paper titled <em>"A framework to systematically study the nonlinear fluid-structure interaction of phononic materials with aerodynamic flows"</em> was accepted by the <em>Journal of Fluids and Structures</em>.</p>
<p>This work was in collaboration with Prof. Kathryn Matlack's research group also at UIUC.</p>`,
  },
  {
    slug: 'nick-mufmech-2026',
    title: 'Nick presented his work at MUFMECH 2026!',
    date: 'February 1, 2026',
    shortDate: 'Feb 2026',
    year: 2026,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Nick presented one talk at the Midwestern Universities Fluid Mechanics Retreat annual meeting in Cedar Lake, IN.',
    body: `<p>Nick presented his work at the Midwestern Universities Fluid Mechanics Retreat annual meeting in Cedar Lake, IN.</p>`,
  },

  // ── 2025 ──────────────────────────────────────────────────
  {
    slug: 'dfd-2025-group',
    title: 'Srikumar, Zoey, Arturo and Elyse presented their work at DFD 2025!',
    date: 'November 1, 2025',
    shortDate: 'Nov 2025',
    year: 2025,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Srikumar, Zoey, Arturo and Elyse presented four talks at the APS Division of Fluid Dynamics annual meeting in Houston, TX.',
    body: `<p>Srikumar, Zoey, Arturo and Elyse presented four talks at the APS Division of Fluid Dynamics annual meeting in Houston, TX.</p>`,
  },
  {
    slug: 'physics-of-fluids-adjoint-actuation',
    title: 'Our paper on adjoint-based actuation was accepted to Phys. Fluids!',
    date: 'June 1, 2025',
    shortDate: 'Jun 2025',
    year: 2025,
    category: 'Publication',
    tagClass: 'tag-green',
    summary:
      'Our paper on adjoint-based optimal actuation for separated flow past an airfoil was accepted by Physics of Fluids.',
    body: `<p>Our paper titled <em>"Adjoint-based optimal actuation for separated flow past an airfoil"</em> was accepted by the <em>Physics of Fluids</em> journal.</p>`,
  },
  {
    slug: 'zoey-ae-dept-fellowship',
    title: 'Congratulations to Zoey for receiving the AE Dept. Fellowship!',
    date: 'March 1, 2025',
    shortDate: 'Mar 2025',
    year: 2025,
    category: 'Award',
    tagClass: 'tag-gold',
    summary:
      'Zoey Flynn was awarded the Aerospace Department Fellowship for Outstanding Academic and Research Achievement.',
    body: `<p>Zoey Flynn was awarded the prestigious Aerospace Department Fellowship for Outstanding Academic and Research Achievement, an award that recognizes a graduate student for outstanding contributions to the teaching and/or research missions of the AE department.</p>
<p>Go Zoey!</p>`,
  },
  {
    slug: 'jfm-iphab-pod',
    title: 'Our paper on intrinsic phase-based POD was accepted to JFM!',
    date: 'January 1, 2025',
    shortDate: 'Jan 2025',
    year: 2025,
    category: 'Publication',
    tagClass: 'tag-green',
    summary:
      'Our paper on intrinsic phase-based proper orthogonal decomposition was accepted by the Journal of Fluid Mechanics.',
    body: `<p>Our paper titled <em>"Intrinsic phase-based proper orthogonal decomposition (IPhaB POD): a method for physically interpretable modes in near-periodic systems"</em> was accepted by the <em>Journal of Fluid Mechanics</em>.</p>
<p>This work was in collaboration with Prof. Theresa Saxton-Fox's research group also at UIUC.</p>`,
  },

  // ── 2024 ──────────────────────────────────────────────────
  {
    slug: 'dfd-2024-group',
    title: 'Andres, Zoey and Arturo presented their work at DFD 2024!',
    date: 'November 1, 2024',
    shortDate: 'Nov 2024',
    year: 2024,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Andres, Zoey and Arturo presented three talks at the APS Division of Fluid Dynamics annual meeting in Salt Lake City, UT.',
    body: `<p>Andres, Zoey and Arturo presented three talks at the APS Division of Fluid Dynamics annual meeting in Salt Lake City, UT.</p>`,
  },
  {
    slug: 'zoey-aviation-2024',
    title: 'Zoey presented their work at Aviation 2024!',
    date: 'July 1, 2024',
    shortDate: 'Jul 2024',
    year: 2024,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Zoey presented a conference paper at the AIAA Aviation Forum 2024 in Las Vegas, NV.',
    body: `<p>Zoey presented the conference paper titled <em>"Towards an immersed-boundary resolvent analysis framework for wall-bounded flows with various surface configurations"</em> at the AIAA Aviation Forum 2024 in Las Vegas, NV.</p>`,
  },
  {
    slug: 'elyse-nsf-grfp',
    title: 'Congratulations to Elyse for receiving the NSF GRFP award!',
    date: 'April 1, 2024',
    shortDate: 'Apr 2024',
    year: 2024,
    category: 'Award',
    tagClass: 'tag-gold',
    summary:
      'Elyse Jones was awarded the National Science Foundation Graduate Research Fellowship.',
    body: `<p>Elyse Jones was awarded the prestigious National Science Foundation Graduate Research Fellowship, a three-year award for outstanding graduate students in STEM.</p>
<p>Go Elyse!</p>`,
  },
  {
    slug: 'srikumar-mf3-fellowship',
    title: 'Congratulations to Srikumar for receiving the MF3 Fellowship!',
    date: 'April 1, 2024',
    shortDate: 'Apr 2024',
    year: 2024,
    category: 'Award',
    tagClass: 'tag-gold',
    summary:
      'Srikumar Balasubramanian was awarded the Mavis Future Faculty Fellowship.',
    body: `<p>Srikumar Balasubramanian was awarded the prestigious Mavis Future Faculty Fellowship, a year-long unique program designed to prepare doctoral students to become excellent faculty members.</p>
<p>Go Srikumar!</p>`,
  },
  {
    slug: 'arturo-scitech-2024',
    title: 'Arturo presented his work at SciTech 2024!',
    date: 'January 1, 2024',
    shortDate: 'Jan 2024',
    year: 2024,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Arturo presented a conference paper at the AIAA SciTech Forum 2024 in Orlando, FL.',
    body: `<p>Arturo presented the conference paper titled <em>"Fluid-Structure Interaction Between an Unsteady Vortex-Driven Aerodynamic Flow and a Diatomic Phononic Subsurface"</em> at the AIAA SciTech Forum 2024 in Orlando, FL.</p>`,
  },

  // ── 2023 ──────────────────────────────────────────────────
  {
    slug: 'dfd-2023-group',
    title: 'Ernold, Srikumar, Zoey and Arturo presented their work at DFD 2023!',
    date: 'November 1, 2023',
    shortDate: 'Nov 2023',
    year: 2023,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Ernold, Srikumar, Zoey and Arturo presented four talks at the APS Division of Fluid Dynamics annual meeting in Washington, DC.',
    body: `<p>Ernold, Srikumar, Zoey and Arturo presented four talks at the APS Division of Fluid Dynamics annual meeting in Washington, DC.</p>`,
  },
  {
    slug: 'bioinspiration-biomimetics-feather-inspired-flow-control',
    title: 'Our paper on feather-inspired flow control was accepted to Bioinspir. Biomim.!',
    date: 'September 1, 2023',
    shortDate: 'Sep 2023',
    year: 2023,
    category: 'Publication',
    tagClass: 'tag-green',
    summary:
      'Our paper on feather-inspired flow control devices across flight regimes was accepted by Bioinspiration & Biomimetics.',
    body: `<p>Our paper titled <em>"Feather-inspired flow control device across flight regimes"</em> was accepted by the <em>Bioinspiration &amp; Biomimetics</em> journal.</p>
<p>This work was in collaboration with Prof. Aimy Wissa's research group from Princeton University.</p>`,
  },
  {
    slug: 'nsf-flapping-flight-fsi',
    title: 'We were awarded funding from the NSF!',
    date: 'August 1, 2023',
    shortDate: 'Aug 2023',
    year: 2023,
    category: 'Funding',
    tagClass: 'tag-navy',
    summary:
      'The group received NSF funding for research on fully coupled fluid-structure interaction in flapping flight.',
    body: `<p>Our project titled <em>"Exploiting Fully Coupled Fluid-Structure Interaction: Optimal Wing Heterogeneity and Efficient Flow State Estimation in Flapping Flight"</em> was selected for funding by the National Science Foundation.</p>
<p>Inspired by the remarkable flight capabilities of insects, this project investigates how structural features such as wing veins, reinforced leading edges, and asymmetric wing shapes can influence aerodynamic performance in flapping flight.</p>
<p>Using high-fidelity, fully coupled fluid-structure interaction simulations and adjoint-based optimization, the project aims to identify wing properties that improve maneuverability and robustness to flow disturbances.</p>`,
  },
  {
    slug: 'afosr-muri-fluid-metamaterial-interaction',
    title: 'We were awarded a MURI grant from AFOSR!',
    date: 'June 6, 2023',
    shortDate: 'June 2023',
    year: 2023,
    category: 'Funding',
    tagClass: 'tag-navy',
    summary:
      'The project "Fluid-Metamaterial-Interaction to Revolutionize Passive Control of Aerodynamic Flows" was selected for funding through the AFOSR MURI program.',
    body: `<p>Our project titled <em>"Fluid-Metamaterial-Interaction to Revolutionize Passive Control of Aerodynamic Flows"</em> was selected for funding through the Air Force Office of Scientific Research (AFOSR) Multidisciplinary University Research Initiative (MURI) program.</p>
<p>This project aims to establish the field of fluid-metamaterial interaction, exploring how mechanical metamaterials can couple with aerodynamic flows to enable passive flow control. By leveraging unique material responses, the project seeks new strategies for drag reduction, transition delay, separation control, and improved aircraft maneuverability.</p>
<p>This project is led by Prof. Katie Matlack and includes our group, the research groups of Prof. Theresa Saxton-Fox and Prof. Phillip Ansell from UIUC, Prof. Jane Bae from Caltech, Prof. Jordan Raney from UPenn, and Prof. Harold Park from Boston University.</p>`,
  },
  {
    slug: 'zoey-list-teachers-ranked-excellent',
    title: 'Congratulations to Zoey for being among the List of Teachers Ranked as Excellent!',
    date: 'May 22, 2023',
    shortDate: 'May 2023',
    year: 2023,
    category: 'Award',
    tagClass: 'tag-gold',
    summary:
      'Zoey Flynn was named to the List of Teachers Ranked as Excellent by Their Students in Spring 2023.',
    body: `<p>Zoey Flynn was named to the List of Teachers Ranked as Excellent by Their Students in Spring 2023.</p>
<p>Go Zoey!</p>`,
  },
  {
    slug: 'jfm-rl-flaps',
    title: 'Our paper on bio-inspired flaps for flow control via reinforcement learning was accepted to JFM!',
    date: 'February 05, 2023',
    shortDate: 'Feb 2023',
    year: 2023,
    category: 'Publication',
    tagClass: 'tag-green',
    summary:
      'Our paper on bio-inspired variable-stiffness flaps tuned via reinforcement learning was accepted by the Journal of Fluid Mechanics.',
    body: `<p>Our paper titled <em>"Bio-inspired variable-stiffness flaps for hybrid flow control, tuned via reinforcement learning"</em> was accepted by the <em>Journal of Fluid Mechanics</em>.</p>`,
  },
  {
    slug: 'ernold-zoey-scitech-2023',
    title: 'Ernold and Zoey presented their work at SciTech 2023!',
    date: 'January 5, 2023',
    shortDate: 'Jan 2023',
    year: 2023,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Ernold and Zoey presented two conference papers at the AIAA SciTech Forum 2023 in Washington, DC.',
    body: `<p>Ernold and Zoey presented two conference papers at the AIAA SciTech Forum 2023 in Washington, DC.</p>
<p>Ernold presented the paper titled <em>"Optimal surface morphing using adjoint optimization"</em>. Zoey presented the paper <em>"Flow physics of a passive flap on a dynamically pitched airfoil"</em>.</p>`,
  },

  // ── 2022 ──────────────────────────────────────────────────
  {
    slug: 'nirmal-phd-defense',
    title: 'Congratulations to Nirmal for defending his PhD!',
    date: 'November 30, 2022',
    shortDate: 'Nov 2022',
    year: 2022,
    category: 'Defense',
    tagClass: 'tag-teal',
    summary:
      'Congratulations to Dr. Nirmal Jayaprasad Nair for successfully defending his PhD thesis.',
    body: `<p>Congratulations to Dr. Nirmal Jayaprasad Nair for successfully defending his PhD thesis!</p>
<p>Nirmal is the first member of the NUF Group to complete this achievement, marking an exciting milestone for both him and the group.</p>
<p>He will continue his career at McKinsey &amp; Company. Go Dr. Nair!</p>`,
  },
  {
    slug: 'dfd-2022-group',
    title: 'Nirmal, Ernold and Srikumar presented their work at DFD 2022!',
    date: 'November 21, 2022',
    shortDate: 'Nov 2022',
    year: 2022,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Nirmal, Ernold and Srikumar presented three talks at the APS Division of Fluid Dynamics annual meeting in Indianapolis, IN.',
    body: `<p>Nirmal, Ernold and Srikumar presented three talks at the APS Division of Fluid Dynamics annual meeting in Indianapolis, IN.</p>`,
  },
  {
    slug: 'prf-fsi-bio-inspired-flap',
    title: 'Our paper on FSI bio-inspired flap was accepted to PRF!',
    date: 'June 14, 2022',
    shortDate: 'Jun 2022',
    year: 2022,
    category: 'Publication',
    tagClass: 'tag-green',
    summary:
      'Our paper on fluid-structure interaction of a bio-inspired passively deployable flap was accepted by Physical Review Fluids.',
    body: `<p>Our paper titled <em>"Fluid-structure interaction of a bio-inspired passively deployable flap for lift enhancement"</em> was accepted by the <em>Physical Review Fluids</em> journal.</p>`,
  },
  {
    slug: 'srikumar-aviation-2022',
    title: 'Srikumar presented his work at Aviation 2022!',
    date: 'June 1, 2022',
    shortDate: 'Jun 2022',
    year: 2022,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Srikumar presented a conference paper at the AIAA Aviation Forum 2022 in San Diego, CA.',
    body: `<p>Srikumar presented the conference paper titled <em>"Harnessing phononic materials for aerodynamic flow control"</em> at the AIAA Aviation Forum 2022 in San Diego, CA.</p>`,
  },
  {
    slug: 'jcp-strongly-coupled-ibm',
    title: 'Our paper on IBM that mimics efficiency for static bodies was accepted to JCP!',
    date: 'April 1, 2022',
    shortDate: 'Apr 2022',
    year: 2022,
    category: 'Publication',
    tagClass: 'tag-green',
    summary:
      'Our strongly coupled immersed boundary method paper was accepted by the Journal of Computational Physics.',
    body: `<p>Our paper titled <em>"A strongly coupled immersed boundary method for fluid-structure interaction that mimics the efficiency of stationary body methods"</em> was accepted by the <em>Journal of Computational Physics</em>.</p>`,
  },
  {
    slug: 'prf-surface-morphing',
    title: 'Our paper on aerodynamic surface morphing was accepted to PRF!',
    date: 'February 7, 2022',
    shortDate: 'Feb 2022',
    year: 2022,
    category: 'Publication',
    tagClass: 'tag-green',
    summary:
      'Our paper on surface morphing for aerodynamic flows was accepted by Physical Review Fluids.',
    body: `<p>Our paper titled <em>"Surface morphing for aerodynamic flows at low and stalled angles of attack"</em> was accepted by the <em>Physical Review Fluids</em> journal.</p>`,
  },
  {
    slug: 'fluids-covert-inspired-flap',
    title: 'Our paper on covert-inspired flap was accepted to Fluids!',
    date: 'January 18, 2022',
    shortDate: 'Jan 2022',
    year: 2022,
    category: 'Publication',
    tagClass: 'tag-green',
    summary:
      'Our paper on multiple bio-inspired torsionally hinged flaps for passive flow control was accepted by Fluids.',
    body: `<p>Our paper titled <em>"Numerical study of multiple bio-inspired torsionally hinged flaps for passive flow control"</em> was accepted by the <em>Fluids</em> journal.</p>`,
  },
  {
    slug: 'scitech-2022-group',
    title: 'Andres, Nirmal and Zavar presented their work at SciTech 2022!',
    date: 'January 4, 2022',
    shortDate: 'Jan 2022',
    year: 2022,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Andres, Nirmal and Zavar presented three conference papers at the AIAA SciTech Forum 2022 in San Diego, CA.',
    body: `<p>Andres, Nirmal and Zavar presented three conference papers at the AIAA SciTech Forum 2022 in San Diego, CA.</p>
<p>Andres presented the paper titled <em>"Flow-induced flapping of an inverted flag with non-uniform stiffness distribution"</em>. Nirmal presented the paper <em>"Effects of Torsional Stiffness and Inertia on a Passively Deployable Flap for Aerodynamic Lift Enhancement"</em>. Zavar presented the paper <em>"Simulations of flow past a mirrored airfoil configuration inspired by an energy-harvester"</em>.</p>`,
  },

  // ── 2021 ──────────────────────────────────────────────────
  {
    slug: 'dfd-2021-group',
    title: 'Nirmal, Ernold and Srikumar presented their work at DFD 2021!',
    date: 'November 23, 2021',
    shortDate: 'Nov 2021',
    year: 2021,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Nirmal, Ernold and Srikumar presented three talks at the APS Division of Fluid Dynamics annual meeting in Phoenix, AZ.',
    body: `<p>Nirmal, Ernold and Srikumar presented three talks at the APS Division of Fluid Dynamics annual meeting in Phoenix, AZ.</p>`,
  },

  // ── 2020 ──────────────────────────────────────────────────
  {
    slug: 'dfd-2020-group',
    title: 'Nirmal, Ernold and Zavar presented their work at DFD 2020!',
    date: 'November 19, 2020',
    shortDate: 'Nov 2020',
    year: 2020,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Nirmal, Ernold and Zavar presented three talks at the APS Division of Fluid Dynamics annual meeting.',
    body: `<p>Nirmal, Ernold and Zavar presented three talks at the APS Division of Fluid Dynamics annual meeting, which was held virtually.</p>`,
  },
  {
    slug: 'nsf-adaptive-self-deploying-flaps',
    title: 'We were awarded funding from the NSF!',
    date: 'August 14, 2020',
    shortDate: 'Aug 2020',
    year: 2020,
    category: 'Funding',
    tagClass: 'tag-navy',
    summary:
      'The group received NSF funding for bioinspired, adaptive, and self-deploying flaps for distributed aerodynamic flow control.',
    body: `<p>Our project titled <em>"Bioinspired, Adaptive, and Self-Deploying Flaps for Distributed Aerodynamic Flow Control"</em> was selected for funding by the National Science Foundation.</p>
<p>Motivated by the covert feathers on bird wings, this work explores how passive, feather-inspired flaps can respond to unsteady aerodynamic flows and improve flight performance without requiring active power input.</p>
<p>Through a combination of high-fidelity simulations and experiments, we aim to understand the fluid-structure interaction mechanisms that govern elastic flap dynamics, wake behavior, and aerodynamic force generation.</p>
<p>This project is a collaboration with Prof. Aimy Wissa from UIUC.</p>`,
  },
  {
    slug: 'jfm-rom-state-estimation',
    title: 'Our paper on ROM for state estimation was accepted to JFM!',
    date: 'June 9, 2020',
    shortDate: 'Jun 2020',
    year: 2020,
    category: 'Publication',
    tagClass: 'tag-green',
    summary:
      'Our paper on reduced-order models for state estimation using deep learning was accepted by the Journal of Fluid Mechanics.',
    body: `<p>Our paper titled <em>"Leveraging reduced-order models for state estimation using deep learning"</em> was accepted by the <em>Journal of Fluid Mechanics</em>.</p>`,
  },

  // ── 2019 ──────────────────────────────────────────────────
  {
    slug: 'dfd-2019-group',
    title: 'Nirmal and Kevin presented their work at DFD 2019!',
    date: 'November 22, 2019',
    shortDate: 'Nov 2019',
    year: 2019,
    category: 'Conference',
    tagClass: 'tag-purple',
    summary:
      'Nirmal and Kevin presented two talks at the APS Division of Fluid Dynamics annual meeting in Seattle, WA.',
    body: `<p>Nirmal and Kevin presented two talks at the APS Division of Fluid Dynamics annual meeting in Seattle, WA.</p>`,
  },
];
