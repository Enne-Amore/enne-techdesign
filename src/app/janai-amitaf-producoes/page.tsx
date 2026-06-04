import { ProjectsType } from "@/types/projectsType";
import { projects } from "@/data/projects";
import ProjectHeader from "@/components/project/projectHeader";
import ProjectAccesses from "@/components/project/projectAccesses";
import ProjectProblemn from "@/components/project/projectProblemn";
import ProjectTargetAudience from "@/components/project/projectTargetAudience";
import ProjectStyleGuide from "@/components/project/projectStyleGuide";
import ProjectScreenPrototyping from "@/components/project/projectScreenPrototyping";
import ProjectTechnologies from "@/components/project/projectTechnologies";
import ProjectDemoVideo from "@/components/project/projectDemoVideo";
import ProjectFooter from "@/components/project/projectFooter";

export default function JanaiAmitafProducoes() {
  const data: ProjectsType = projects.find((project) => project.id === "2")!;

  return (
    <div className={`font-bitter bg-[#FCFAFF] text-[#232027] dark:bg-[#232027] dark:text-[#FCFAFF]`}>
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
        className={`flex flex-col items-center gap-20 pt-20 xl:gap-28 xl:pt-28`}
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

        <ProjectProblemn
          id={data.problemn.id}
          sectionStyle={data.problemn.sectionStyle}
          titleStyle={data.problemn.titleStyle}
          textStyle={data.problemn.textStyle}
          line1={data.problemn.line1}
          conclusion={data.problemn.conclusion}
        />
        
        <ProjectTargetAudience
          id={data.targetAudience.id}
          titleStyle={data.targetAudience.titleStyle}
          textStyle={data.targetAudience.textStyle}
          list={data.targetAudience.list}
          img={data.targetAudience.img}
          alt={data.targetAudience.alt}
          mobileWidth={data.targetAudience.mobileWidth}
          mobileHeight={data.targetAudience.mobileHeight}
          desktopWidth={data.targetAudience.desktopWidth}
          desktopHeight={data.targetAudience.desktopHeight}
        />

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
