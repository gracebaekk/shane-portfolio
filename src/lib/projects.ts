export type Project = {
  index: string;
  slug: string;
  title: string;
  kicker: string;
  year: string;
  blurb: string;
  /** Drop a file in /public/work and set the path here to replace the placeholder tile. */
  cover?: string;
  /** Two hues used by the placeholder tile until a real cover image exists. */
  swatch: [string, string];
  status?: "live" | "coming-soon";
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projects: Project[] = [
  {
    index: "01",
    slug: "kasa-rebrand",
    title: "KASA Rebrand & Social Identity",
    kicker: "Multimedia · Branding · Creative Direction",
    year: "2024-26",
    blurb:
      "Reimagined UCLA KASA's visual identity across Instagram, TikTok, events, and campaigns and grew engagement 15%.",
    cover: "/work/kasa/hero.jpeg",
    swatch: ["#f0cfc9", "#e2b7bd"],
  },
  {
    index: "02",
    slug: "doordash",
    title: "DoorDash",
    kicker: "UX/UI · Product Design · Research",
    year: "2025",
    blurb:
      "Reimagined a core ordering flow to reduce decision fatigue, grounded in user research and rapid prototyping.",
    swatch: ["#cbd8c4", "#aec5b5"],
  },
  {
    index: "03",
    slug: "bruincaps",
    title: "BruinCAPS",
    kicker: "UX/UI · Research · Digital Experience",
    year: "2025",
    blurb:
      "Redesigned a campus safety service so students could find and request support without friction.",
    swatch: ["#c9d6e4", "#adc0d8"],
  },
  {
    index: "04",
    slug: "photography",
    title: "Portrait & Event Photography",
    kicker: "Photography · Art Direction",
    year: "2024-26",
    blurb:
      "Portrait photography for staff photoshoots and graduation shoots that capture the org's people, community, and milestones.",
    swatch: ["#e5ddd4", "#c9bcb0"],
  },
  // {
  //   index: "05",
  //   slug: "j-art-studio",
  //   title: "J Art Studio",
  //   kicker: "Marketing · Social Media · Graphic Design",
  //   year: "2024",
  //   blurb:
  //     "Built a repeatable visual system for a small studio's marketing from graphics, campaigns, and social cadence.",
  //   swatch: ["#f0e3bf", "#e0c9a0"],
  // },
  // {
  //   index: "06",
  //   slug: "kcon-line-friends",
  //   title: "KCON × LINE FRIENDS",
  //   kicker: "Experiential · Entertainment · Brand Experience",
  //   year: "2025",
  //   blurb:
  //     "Fan experiences at scale: a 100,000+ attendee festival with CJ ENM and a 1,000+ guest pop-up with LINE FRIENDS.",
  //   swatch: ["#d6cde0", "#c0aed2"],
  //   status: "coming-soon",
  // },
];
