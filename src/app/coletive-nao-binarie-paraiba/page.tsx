import { ProjectsType } from "@/types/projectsType";
import { projects } from "@/data/projects";
import ProjectHeader from "@/components/project/projectHeader";
import ProjectAccesses from "@/components/project/projectAccesses";
import ProjectProblemn from "@/components/project/projectProblemn";
import ProjectTargetAudience from "@/components/project/projectTargetAudience";
import ProjectSolution from "@/components/project/projectSolution";
import ProjectStyleGuide from "@/components/project/projectStyleGuide";
import ProjectScreenPrototyping from "@/components/project/projectScreenPrototyping";
import ProjectDemoVideo from "@/components/project/projectDemoVideo";
import ProjectImpact from "@/components/project/projectImpact";
import ProjectFooter from "@/components/project/projectFooter";
import ProjectTechnologies from "@/components/project/projectTechnologies";

export default function ColetiveNaoBinarieParaiba() {
  const data: ProjectsType = projects.find((project) => project.id === "1")!;

  return (
    <div className={`font-open-sans bg-[#FFFFFD] text-[#242325] dark:bg-[#242325] dark:text-[#FFFFFD]`}>
      <ProjectHeader
        headerStyle={data.header.headerStyle}
        positions={data.header.positions}
        positionStyle={data.header.positionStyle}
        img={data.header.img}
        alt={data.header.alt}
        mobileWidth={data.header.mobileWidth}
        mobileHeight={data.header.mobileHeight}
        desktopWidth={data.header.desktopWidth}
        desktopHeight={data.header.desktopHeight}
        caption={data.header.caption}
        captionStyle={data.header.captionStyle}
        downStyle={data.header.downStyle}
      />

      <main
        id="main"
        className={`flex flex-col items-center gap-20 py-20 xl:gap-28 xl:py-28`}
      >
        <ProjectAccesses
          id={data.accesses.id}
          img={data.accesses.img}
          alt={data.accesses.alt}
          urlSite={data.accesses.urlSite}
          ariaLabelSite={data.accesses.ariaLabelSite}
          urlFigma={data.accesses.urlFigma}
          ariaLabelFigma={data.accesses.ariaLabelFigma}
          urlGitHub={data.accesses.urlGitHub}
          ariaLabelGitHub={data.accesses.ariaLabelGitHub}
          urlMainStyle={data.accesses.urlMainStyle}
          urlSecondaryStyle={data.accesses.urlSecondaryStyle}
        />

        <ProjectProblemn />

        <ProjectTargetAudience />

        <ProjectSolution />

        <ProjectStyleGuide
          id={data.styleGuide.id}
          explanation={data.styleGuide.explanation}
          colors={data.styleGuide.colors}
          typography={data.styleGuide.typography}
        />

        <ProjectScreenPrototyping
          sectionStyle={data.prototyping.sectionStyle}
          titleStyle={data.prototyping.titleStyle}
          imgs={data.prototyping.imgs}
        />

        <ProjectTechnologies
          id={data.technologies.id}
          explanation={data.technologies.explanation}
          functions={data.technologies.functions}
        />

        <ProjectDemoVideo
          sectionStyle={data.video.sectionStyle}
          titleStyle={data.video.titleStyle}
          src={data.video.src}
        />

        <ProjectImpact />
      </main>

      <ProjectFooter
        id={data.footer.id}
        footerStyle={data.footer.footerStyle}
        socialNetworkStyle={data.footer.socialNetworkStyle}
        researchSources={data.footer.researchSources}
        copyrightStyle={data.footer.copyrightStyle}
      />
    </div>
  );
}
