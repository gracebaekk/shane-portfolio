import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import { getProjectBySlug, projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(
    (await import("@/lib/case-studies")).caseStudies
  ).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Shane Choi`,
    description: project.blurb,
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const caseStudy = getCaseStudyBySlug(slug);

  if (!project || !caseStudy) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[currentIndex + 1];

  return (
    <>
      <Nav />
      <main>
        <CaseStudyPage
          project={project}
          caseStudy={caseStudy}
          nextProject={nextProject}
        />
      </main>
    </>
  );
}
