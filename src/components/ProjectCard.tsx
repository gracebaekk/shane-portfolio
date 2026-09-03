import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const comingSoon = project.status === "coming-soon";

  return (
    <Link
      href={comingSoon ? "#projects" : `/work/${project.slug}`}
      className="group block"
      aria-disabled={comingSoon}
    >
      <div
        className="relative aspect-4/3 overflow-hidden rounded-2xl p-2"
        style={{
          background: `linear-gradient(135deg, ${project.swatch[0]}, ${project.swatch[1]})`,
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-cream">
          {project.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.cover}
              alt={project.title}
              className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.coverClassName ?? "object-top"}`}
            />
          ) : (
            <div
              className="h-full w-full transition-transform duration-700 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${project.swatch[0]}, ${project.swatch[1]})`,
              }}
            />
          )}

          <span className="label absolute top-3 left-3 rounded-full bg-cream/90 px-3 py-1">
            {project.index}
          </span>

          <span className="label absolute right-3 bottom-3 rounded-full bg-cream/90 px-3 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {comingSoon ? "In progress ✦" : "View ↗"}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-4">
          <p className="label text-accent">{project.kicker}</p>
          <p className="label text-ink-soft">{project.year}</p>
        </div>
        <h3 className="font-display mt-2 text-3xl leading-tight group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-soft">
          {project.blurb}
        </p>
      </div>
    </Link>
  );
}
