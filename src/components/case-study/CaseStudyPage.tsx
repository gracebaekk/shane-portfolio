import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import type { Project } from "@/lib/projects";
import ImageBlock from "./ImageBlock";
import ImageGroup from "./ImageGroup";

type CaseStudyPageProps = {
  project: Project;
  caseStudy: CaseStudy;
  nextProject?: Project;
};

function renderSectionImage(image: NonNullable<CaseStudy["sections"][number]["images"]>[number]) {
  if (image.group) {
    return (
      <ImageGroup
        key={image.alt}
        images={image.group}
        caption={image.caption}
      />
    );
  }

  return (
    <ImageBlock
      key={image.alt}
      alt={image.alt}
      src={image.src}
      caption={image.caption}
      swatch={image.swatch}
      className={image.className}
      natural={image.natural ?? !!image.src}
      fullWidth={image.fullWidth}
    />
  );
}

function renderSectionImages(
  images: NonNullable<CaseStudy["sections"][number]["images"]>,
  columns: 2 | 3 = 3,
) {
  return (
    <div
      className={`mt-12 grid grid-cols-1 items-end gap-6 overflow-visible ${columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}
    >
      {images.map((image) => (
        <div
          key={image.alt}
          className={
            image.fullWidth || image.colSpan === 3
              ? "sm:col-span-3"
              : image.colSpan === 2
                ? "sm:col-span-2"
                : undefined
          }
        >
          {renderSectionImage(image)}
        </div>
      ))}
    </div>
  );
}

function CaseStudySectionBlock({ section }: { section: CaseStudy["sections"][number] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 border-b border-ink/10 last:border-b-0">
      <p className="label text-accent">{section.title}</p>
      {(section.images?.length ?? 0) > 0 || (section.sidebarImages?.length ?? 0) > 0 ? (
        section.imageLayout === "sidebar-below" ? (
          <>
            {section.sidebarImages && section.sidebarImages.length > 0 ? (
              <div className="mt-8 grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
                <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>

                <div className="space-y-8 overflow-visible">
                  {section.sidebarImages.map((image) => renderSectionImage(image))}
                </div>
              </div>
            ) : (
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            )}

            {section.images && section.images.length > 0 &&
              renderSectionImages(section.images, section.imageColumns ?? 3)}
          </>
        ) : section.imageLayout === "below" ? (
          <>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            {section.images && section.images.length > 0 &&
              renderSectionImages(section.images, section.imageColumns ?? 3)}
          </>
        ) : (
          <div className="mt-8 grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-8 overflow-visible">
              {section.images?.map((image) => renderSectionImage(image))}
            </div>
          </div>
        )
      ) : (
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
          {section.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      )}
    </section>
  );
}

export default function CaseStudyPage({
  project,
  caseStudy,
  nextProject,
}: CaseStudyPageProps) {
  const contextSection = caseStudy.sections.find((section) => section.title === "Context");
  const otherSections = caseStudy.sections.filter((section) => section.title !== "Context");

  return (
    <article>
      <header className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-20">
        <Link
          href="/#projects"
          className="label text-ink-soft hover:text-accent"
        >
          ← Back to work
        </Link>

        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 pb-6">
          <p className="label text-accent">{project.kicker}</p>
          <p className="label text-ink-soft">{project.year}</p>
        </div>

        <h1 className="font-display mt-8 max-w-4xl text-5xl leading-tight md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {caseStudy.overview}
        </p>
      </header>

      <div className="border-y border-ink/10 bg-cream-deep">
        <dl className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <dt className="label text-ink-soft">Role</dt>
            <dd className="mt-2">{caseStudy.role}</dd>
          </div>
          {caseStudy.team && (
            <div>
              <dt className="label text-ink-soft">Team</dt>
              <dd className="mt-2">{caseStudy.team}</dd>
            </div>
          )}
          <div>
            <dt className="label text-ink-soft">Timeline</dt>
            <dd className="mt-2">{caseStudy.timeline}</dd>
          </div>
          <div>
            <dt className="label text-ink-soft">Tools</dt>
            <dd className="mt-2">{caseStudy.tools.join(" · ")}</dd>
          </div>
        </dl>
      </div>

      {contextSection && <CaseStudySectionBlock section={contextSection} />}

      {caseStudy.results && (
        <section className="border-y border-ink/10 bg-rose">
          <ul className="mx-auto grid max-w-6xl gap-px px-6 py-12 sm:grid-cols-3">
            {caseStudy.results.map((result) => (
              <li key={result.label} className="py-4 text-center sm:py-0">
                <p className="font-display text-4xl md:text-5xl">{result.value}</p>
                <p className="label mt-2 text-ink-soft">{result.label}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {otherSections.map((section) => (
        <CaseStudySectionBlock key={section.title} section={section} />
      ))}

      {nextProject && (
        <footer className="border-t border-ink/10 bg-sage">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="label text-ink-soft">Next project</p>
            <Link
              href={`/work/${nextProject.slug}`}
              className="font-display mt-4 block text-4xl hover:text-accent md:text-5xl"
            >
              {nextProject.title} ↗
            </Link>
          </div>
        </footer>
      )}
    </article>
  );
}
