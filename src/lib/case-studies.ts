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
  /** Span the full row in below/sidebar-below layouts */
  fullWidth?: boolean;
  /** Number of grid columns to span in image rows */
  colSpan?: 2 | 3;
};

export type CaseStudySection = {
  title: string;
  body: string[];
  images?: CaseStudyImage[];
  /** Images beside body text when imageLayout is "sidebar-below" */
  sidebarImages?: CaseStudyImage[];
  /** "sidebar" = text + images in two columns; "below" = text on top, images in a row; "sidebar-below" = both */
  imageLayout?: "sidebar" | "below" | "sidebar-below";
  /** Number of columns for image rows (default 3) */
  imageColumns?: 2 | 3;
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
    timeline: "2024 to 2026",
    tools: ["Adobe Lightroom", "Canva", "CapCut"],
    overview:
      "UCLA KASA needed a visual identity that felt current on Instagram and TikTok without losing the connection of a community built org. So, we rebranded from concept through rollout across social, events, and campaigns.",
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
          "A lot of the constraints were practical: we were a student org working in Canva and CapCut, turning around graphics and content fast for weekly events. The system had to be easy for seven people to use without everything looking different. I also wanted the brand to reflect Korean American identity in a way that felt proud and community led, so event photography, member faces, and real moments from our programming became part of the look, so the feed felt like our club and not just a design template.",
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
  doordash: {
    slug: "doordash",
    role: "UI/UX Designer",
    team: "Team design project",
    timeline: "2025",
    tools: ["Figma", "Wireframing", "Usability testing"],
    overview:
      "DoorDash users often know what they want but still have to scroll through irrelevant restaurants. Our team redesigned the search and saved stores flows with advanced filters, a dedicated filters page, and clearer organization so finding the right meal takes less effort.",
    sections: [
      {
        title: "Context",
        body: [
          "When ordering on DoorDash, users frequently have specific preferences: a cuisine type, dietary restriction, price range, or how fast they need delivery. But the existing experience made it hard to narrow results quickly, especially when browsing from the home search bar or digging through a growing list of saved stores.",
          "We also noticed there was no dedicated filters page in the app at the time. Filter related controls were either missing or scattered, which added friction for users trying to personalize their search. Saved stores in particular became harder to navigate over time as users accumulated more favorites with no way to search or sort through them efficiently.",
          "Through affinity mapping, we grouped user feedback into three themes: time spent searching, too much information on screen, and specific feature requests like search in saved stores and filters accessible from the search bar.",
        ],
        images: [
          {
            src: "/work/doordash/affinitymap.png",
            alt: "DoorDash affinity map",
            caption: "Affinity map: time consumption, information overload, and feature requests",
          },
        ],
      },
      {
        title: "Approach",
        body: [
          "We added a comprehensive filter function to the search tab so users could refine results by cuisine, delivery time, price range, dietary restrictions, and payment options. The goal was to cut down irrelevant options upfront and make search feel more personalized instead of overwhelming.",
          "In the saved stores tab, we introduced the same filter pattern plus search and categorization, reorganizing stores into a grid layout that was easier to scan. Throughout the redesign, we kept DoorDash's existing visual language (icons, color, typography) so the new features felt native to the app rather than bolted on.",
          "We also recommended a dedicated in app feedback channel for design related suggestions, since App Store reviews tended to focus on delivery service rather than product usability.",
          "We started with low fidelity wireframes mapping the full flow: home search with a new filter entry point, the existing profile page, a redesigned saved stores experience, the standard restaurant page, and a new filters screen with sort, cuisine, price, dietary, and payment options.",
        ],
        images: [
          {
            src: "/work/doordash/DoorDash_lowfi.png",
            alt: "DoorDash low fidelity wireframes",
            caption: "Low fidelity wireframes: home search, saved stores, and filters flow",
            natural: true,
          },
        ],
      },
      {
        title: "Design",
        imageLayout: "sidebar-below",
        body: [
          "The final designs applied DoorDash's existing UI patterns across three key flows: search results with inline filters, a dedicated filter feature, and a reorganized saved stores experience with search and categorization.",
        ],
        images: [
          {
            src: "/work/doordash/search-results.png",
            alt: "DoorDash search results with filters",
            caption: "Search results with filter entry point",
            natural: true,
            className: "max-w-44",
          },
          {
            src: "/work/doordash/filter-feature.png",
            alt: "DoorDash filter feature screen",
            caption: "Dedicated filters: sort, cuisine, price, dietary, and payment",
            natural: true,
            className: "origin-bottom scale-[1.35]",
          },
          {
            src: "/work/doordash/saved-stores.png",
            alt: "DoorDash saved stores redesign",
            caption: "Saved stores with search, filters, and grid layout",
            natural: true,
            className: "max-w-44",
          },
        ],
      },
      {
        title: "Outcome",
        body: [
          "Usability testing showed faster task completion across all four scenarios we measured. Finding a Chinese restaurant within 30 minutes dropped from ~32 seconds to ~20 seconds, and locating a vegan pizza store went from ~23 seconds to ~16.5 seconds.",
          "Beyond the immediate UI changes, we documented recommendations for future iterations: adding sort by customer ratings, expanding filter criteria, and building a lightweight feedback loop so DoorDash can keep refining the experience based on how people actually order.",
        ],
        images: [
          {
            src: "/work/doordash/results.png",
            alt: "DoorDash usability testing results",
            caption: "Mean task time: original vs. redesigned prototype",
          },
        ],
      },
    ],
  },
  bruincaps: {
    slug: "bruincaps",
    role: "UI/UX Designer",
    team: "Team design project",
    timeline: "2025",
    tools: ["Figma", "Wireframing", "Affinity mapping", "User research"],
    overview:
      "Seeking mental health support at UCLA CAPS often starts with a phone triage call during limited hours, and the process feels intimidating and hard to navigate. Our team designed BruinCAPS, a mobile app that guides students through digital onboarding, counselor reviewed intake, and online scheduling.",
    results: [
      { label: "Students with mental health needs", value: "60%+" },
      { label: "Sought campus help", value: "Only 20%" },
      { label: "Felt school support was enough", value: "40%" },
    ],
    sections: [
      {
        title: "Context",
        body: [
          "Mental health has become a pressing concern for college students, but stigma and unclear intake processes keep many from seeking help. At UCLA, CAPS requires a phone triage call to start, often during business hours, and students told us the path from first contact to an actual appointment felt confusing and discouraging.",
          "The disparity matters too: white college students are nearly twice as likely to seek mental health treatment as Black or Asian students. Even though most students know their school offers mental health services, far fewer believe those services are accessible or sufficient.",
          "Through affinity mapping, we grouped student feedback into four themes: difficulty starting and accessing CAPS, CAPS as a short term solution, referrals to outside therapists, and fees and insurance concerns.",
        ],
        images: [
          {
            src: "/work/bruinCAPS/affinitymap.png",
            alt: "BruinCAPS affinity map",
            caption: "Affinity map: accessing CAPS, short term care, referrals, and fees",
            natural: true,
          },
        ],
      },
      {
        title: "Approach",
        imageLayout: "sidebar-below",
        body: [
          "Our problem statement: since the initial process of seeking mental health care is hard to navigate and intimidating, we needed an online application that connects students with campus mental health services with accessibility and inclusivity in mind.",
          "Current barriers included lack of privacy in waiting rooms, the inconvenience of calling or visiting CAPS in person, a complex multi step process students didn't know how to start, and stigma, especially for students from backgrounds less likely to seek treatment.",
          "Our solution was a digital space where students sign in with UCLA Logon, review safety and privacy notices, complete intake questions in the app, and get matched with appropriate services by a counselor before scheduling on an organized calendar. A mascot guides onboarding to make the experience feel supportive rather than clinical.",
          "We mapped the flow from sign in through counselor review to scheduling, then explored layouts with low fidelity wireframes before moving into high fidelity screens.",
        ],
        sidebarImages: [
          {
            src: "/work/bruinCAPS/user-persona.png",
            alt: "BruinCAPS user persona",
            caption: "User persona: Kaashvi, a student who wants support but fears the process",
            natural: true,
          },
          {
            src: "/work/bruinCAPS/user-flow.png",
            alt: "BruinCAPS user flow",
            caption: "User flow: sign in → intake → counselor match → schedule",
            natural: true,
          },
        ],
        images: [
          {
            src: "/work/bruinCAPS/lowfi.png",
            alt: "BruinCAPS low fidelity wireframes",
            caption: "Low fidelity wireframes: sign up, intake, schedule, and resources",
            natural: true,
            colSpan: 3,
            className: "max-w-5xl",
          },
        ],
      },
      {
        title: "Design",
        imageLayout: "below",
        body: [
          "The high fidelity designs applied a calm blue and cream palette with a friendly bear mascot across onboarding, a 10 step questionnaire reviewed by clinicians, and a scheduling screen where students pick available time slots on a calendar.",
        ],
        images: [
          {
            src: "/work/bruinCAPS/hifi.png",
            alt: "BruinCAPS high fidelity screens",
            caption: "High fidelity designs: onboarding, intake questionnaire, and schedule appointment",
            natural: true,
            fullWidth: true,
          },
        ],
      },
      {
        title: "Outcome",
        body: [
          "BruinCAPS prototypes how digital intake could replace phone triage, let students start the process on their own schedule, and reduce the intimidation of that first step. By keeping everything in the app, from privacy notices to counselor matching, the flow is clearer and more discreet than calling during open hours or waiting in a shared space.",
          "The mascot guided onboarding and personalized matching address needs our persona surfaced: inclusivity in finding the right therapist, accessibility in scheduling, and affordability through campus resources. It's a concept built for students who want help but don't know where to begin.",
        ],
      },
    ],
  },
};

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
