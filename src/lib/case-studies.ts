export type CaseStudyImage = {
  /** Path under /public, e.g. "/work/kasa/hero.jpg" */
  src?: string;
  alt: string;
  caption?: string;
  /** Placeholder gradient until you add a real image */
  swatch?: [string, string];
  /** Tailwind aspect/height classes, e.g. "aspect-3/4" */
  className?: string;
  /** Show image at its original aspect ratio without cropping */
  natural?: boolean;
  /** Multiple images shown together in one block */
  group?: { src: string; alt: string; className?: string }[];
};

export type CaseStudySection = {
  title: string;
  body: string[];
  images?: CaseStudyImage[];
};

export type CaseStudy = {
  slug: string;
  role: string;
  team?: string;
  timeline: string;
  tools: string[];
  overview: string;
  sections: CaseStudySection[];
  results?: { label: string; value: string }[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "kasa-rebrand": {
    slug: "kasa-rebrand",
    role: "Graphics Director · Media Director",
    team: "UCLA KASA Multimedia Team",
    timeline: "2024 - 2026",
    tools: ["Adobe Lightroom", "Canva", "CapCut"],
    overview:
      "UCLA KASA needed a visual identity that felt current on Instagram and TikTok without losing the connection of a community-built org. So, we rebranded from concept through rollout across social, events, and campaigns.",
    results: [
      { label: "Org size", value: "200+ members" },
      { label: "Views across platforms", value: "700K+ views" },
      { label: "Platforms", value: "IG · TikTok · Events" },
    ],
    sections: [
      {
        title: "Context",
        body: [
          "UCLA KASA, the Korean American Student Association, is a cultural club that hosts events and builds space for Korean Americans and anyone curious about Korean American identity. When I joined, the club was doing meaningful work, but you wouldn't have known it from the outside.",
          "Social engagement was low, and there was no real visual identity to speak of. Graphics varied post to post, nothing tied the feed together, and KASA didn't have a distinct look or personality. If you scrolled past an event flyer, you probably wouldn't remember it was us.",
          "I started as Graphics Director, then moved into Media Director, leading a team of seven between members and interns. We introduced a mascot and built a consistent look across Instagram and TikTok using shared templates, and I reviewed and edited everything before it went live to keep quality consistent as we produced more.",
        ],
      },
      {
        title: "Approach",
        body: [
          "I anchored the system around a blue palette that felt clean and recognizable on a busy feed. Paired with our new logo and a friendly mascot, the goal was for someone to scroll past a post and immediately know it was KASA. On social, everything needed to feel energetic and current, so we'd regularly incorporate internet trends that were relevant to the Korean American community.",
          "A lot of the constraints were practical: we were a student org working in Canva and CapCut, turning around graphics and content fast for weekly events. The system had to be easy for seven people to use without everything looking different. I also wanted the brand to reflect Korean American identity in a way that felt proud and community-led, so event photography, member faces, and real moments from our programming became part of the look, so the feed felt like our club and not just a design template.",
        ],
        images: [
          {
            alt: "KASA brand system",
            caption: "Brand system: logo, mascot, colors",
            group: [
              {
                src: "/work/kasa/logo.png",
                alt: "KASA logo",
                className: "w-full max-w-48",
              },
              {
                src: "/work/kasa/mascot.png",
                alt: "KASA mascot",
                className: "w-full",
              },
            ],
          },
          {
            src: "/work/kasa/feed.jpeg",
            alt: "KASA Instagram feed",
            caption: "Instagram feed after rebrand",
            swatch: ["#d6cde0", "#f0cfc9"],
          },
        ],
      },
      {
        title: "Rollout",
        body: [
          "The new identity showed up everywhere members actually saw KASA: event graphics, promotional flyers, TikTok videos, and recurring post formats like staff introductions.",
          "One campaign I'm especially proud of was our staff introduction series, styled like Y2K yearbook ID photos in our blue palette. It landed right around the start of the school year, tapped into the Y2K aesthetic trend, and gave the feed an instant visual hook. As a series, it tied multiple posts together so the Instagram grid finally felt intentional, not like random graphics stacked on top of each other.",
        ],
        images: [
          {
            src: "/work/kasa/staff-intro.png",
            alt: "KASA staff introduction series",
            caption: "Staff introductions: Y2K yearbook ID photo series",
            swatch: ["#c9d6e4", "#adc0d8"],
          },
        ],
      },
      {
        title: "Outcome",
        body: [
          "The rebrand showed up in the numbers. We surpassed 700K views across Instagram and TikTok, with a feed that finally looked like one org instead of a rotation of unrelated graphics. Posts started getting more saves, shares, and comments, and members would tell us they recognized KASA content before they even read the caption.",
          "Building a brand for a student org taught me something different from working on a company project. You don't have a big budget or a dedicated design team, so the system has to be simple enough for seven people to use and strong enough that quality doesn't drop when you're posting three times a week. The best work wasn't the most polished graphic. It was the one that felt like us and made someone want to show up to the next event.",
        ],
        images: [
          {
            src: "/work/kasa/tiktok.jpg",
            alt: "KASA rebrand outcome",
            caption: "KASA tiktok gets attention",
            swatch: ["#f0cfc9", "#e2b7bd"],
          },
        ],
      },
    ],
  },
};

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
