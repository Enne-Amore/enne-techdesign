import { ProjectsType } from "@/types/projectsType";
import { projects } from "@/data/projects";
import ProjectHeader from "@/components/project/projectHeader";
import ProjectAccesses from "@/components/project/projectAccesses";
import ProjectProblemn from "@/components/project/projectProblemn";
import ProjectTargetAudience from "@/components/project/projectTargetAudience";
import ProjectSolution from "@/components/project/projectSolution";
import ProjectStyleGuide from "@/components/project/projectStyleGuide";
import ProjectScreenPrototyping from "@/components/project/projectScreenPrototyping";
import ProjectTechnologies from "@/components/project/projectTechnologies";
import ProjectDemoVideo from "@/components/project/projectDemoVideo";
import ProjectImpact from "@/components/project/projectImpact";
import ProjectFooter from "@/components/project/projectFooter";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.card.url.replace(/\//g, ""),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId: slug } = await params;

  const data: ProjectsType = projects.find(
    (project) => project.card.url === `/${slug}`,
  )!;

  if (!data) {
    notFound();
  }

  return (
    <div className={data.bodyStyle}>
      <ProjectHeader {...data.header} />

      <main
        id="main"
        className="flex flex-col items-center gap-20 py-20 xl:gap-28 xl:py-28"
      >
        <ProjectAccesses {...data.accesses} />

        <ProjectProblemn {...data.problemn} />

        <ProjectTargetAudience {...data.targetAudience} />

        <ProjectSolution {...data.solution} />

        <ProjectStyleGuide {...data.styleGuide} />

        <ProjectScreenPrototyping {...data.prototyping} />

        <ProjectTechnologies {...data.technologies} />

        <ProjectDemoVideo {...data.video} />

        <ProjectImpact {...data.impact} />
      </main>

      <ProjectFooter {...data.footer} />
    </div>
  );
}
