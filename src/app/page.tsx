import Link from "next/link";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const contacts = [
  { label: "Email", value: "shanechoi820@g.ucla.edu", href: "shanechoi820@g.ucla.edu" },
  { label: "LinkedIn", value: "in/shanechoi", href: "https://www.linkedin.com/in/shane-c-5797bb248/" },
  { label: "Instagram", value: "@shanechoi", href: "https://instagram.com" },
  { label: "Resume", value: "PDF ↓", href: "/resume.pdf" },
];

const disciplines = [
  { heading: "Creative", items: ["Brand Identity", "Art Direction", "Social Content", "Photography"] },
  { heading: "Marketing", items: ["Campaigns", "Experiential", "Community", "Copy"] },
  { heading: "Digital", items: ["UI/UX", "Figma", "HTML / CSS / JS", "Adobe Suite"] },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-32">
          <p className="label flex items-center gap-3 text-ink-soft">
            <span className="animate-spin-slow inline-block text-accent">✳</span>
            Los Angeles · Looking to work
          </p>

          <h1 className="font-display mt-8">
            <span className="block text-6xl leading-[0.95] tracking-tight md:text-8xl">
              hello, i&apos;m <span className="text-accent">Shane</span>
            </span>
            <span className="mt-4 block text-3xl leading-tight text-ink-soft md:text-5xl">
              a creative marketer &amp; designer building{" "}
              <em className="italic">visual, digital, and brand experiences.</em>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            I work across brand identity, digital product, social content, photography,
            and live experiences with a particular interest in beauty, fashion,
            entertainment, and culture.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#work"
              className="label rounded-full bg-ink px-6 py-3 text-cream hover:bg-accent"
            >
              Projects ↓
            </Link>
            <Link
              href="#about"
              className="label rounded-full border border-ink/20 px-6 py-3 hover:border-accent hover:text-accent"
            >
              About Me ☺
            </Link>
          </div>
        </section>

        <Marquee />

        <section
          id="about"
          className="scroll-mt-20 border-y border-ink/10 bg-cream-deep"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="label text-ink-soft">About Me ☺</p>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
                A creative who understands users <em className="italic">and</em>{" "}
                technology.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Growing up, I was drawn to visuals before I had a name for it— the way
                  a brand feels, how a photo is composed, what makes something feel
                  intentional versus forgettable. Aesthetics were always the thread, even
                  when I didn&apos;t know that&apos;s what I was following.
                </p>
                <p>
                  In college at UCLA, I studied cognitive science and computing, a turn
                  toward the technical side. I wanted to understand how people think, how
                  systems work, and how to actually make things function. Figma, code,
                  research, prototyping: that became my language for a while.
                </p>
                <p>
                  Now I&apos;m coming back to the creative work that started it all from brand,
                  content, photography, live experiences, and bringing the technical side
                  with me. I don&apos;t just imagine how something should look; I can research
                  it, design it, and ship it. That&apos;s taken me from rebranding a
                  400-member student org, to consulting 100+ beauty customers a day, to
                  working a festival floor with 100,000+ attendees.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <p className="label border-b border-ink/15 pb-3 text-accent">Education</p>
                <div className="mt-4 space-y-1">
                  <p className="text-lg leading-snug">UCLA</p>
                  <p className="text-ink-soft">
                    B.S. in Cognitive Science, Computing specialization
                  </p>
                  <p className="label text-ink-soft">2026</p>
                </div>
              </div>

              {disciplines.map((group) => (
                <div key={group.heading}>
                  <p className="label border-b border-ink/15 pb-3 text-accent">
                    {group.heading}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="label rounded-full border border-ink/15 px-3 py-1 text-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <div className="flex items-baseline justify-between border-b border-ink/10 pb-6">
            <p className="label text-ink-soft">Projects</p>
            <p className="label text-ink-soft">{projects.length} projects</p>
          </div>

          <h2 className="font-display mt-10 max-w-2xl text-4xl leading-tight md:text-5xl">
            Different mediums, one point of view.
          </h2>

          <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section id="photo" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <div className="flex items-baseline justify-between border-b border-ink/10 pb-6">
            <p className="label text-ink-soft">Photo</p>
            <Link href="/photo" className="label text-ink-soft hover:text-accent">
              All photography ↗
            </Link>
          </div>

          <h2 className="font-display mt-10 max-w-2xl text-4xl leading-tight md:text-5xl">
            text
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["#f0cfc9", "#d6cde0"],
              ["#e5ddd4", "#c9bcb0"],
              ["#c9d6e4", "#cbd8c4"],
              ["#f0e3bf", "#e2b7bd"],
            ].map(([from, to], i) => (
              <div
                key={i}
                className="aspect-3/4 rounded-sm border border-ink/10"
                style={{ background: `linear-gradient(160deg, ${from}, ${to})` }}
              />
            ))}
          </div>
        </section>

        <section className="border-t border-ink/10 bg-sage text-ink">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="label text-ink/50">Get in touch</p>
            <h2 className="font-display mt-6 max-w-3xl text-5xl leading-tight md:text-7xl">
              Looking for opportunities.
            </h2>

            <ul className="mt-14 grid gap-px border-t border-ink/15 md:grid-cols-4">
              {contacts.map((contact) => (
                <li key={contact.label} className="border-b border-ink/15 py-6">
                  <p className="label text-ink/50">{contact.label}</p>
                  <a
                    href={contact.href}
                    className="mt-2 block text-lg hover:text-accent"
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>

            <p className="label mt-16 text-ink/50">
              Designed &amp; built by Shane Choi ☆
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
