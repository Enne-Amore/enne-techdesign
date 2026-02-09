import { ProjectsType } from "@/types/projectsType";
import { projects } from "@/data/projects";
import ProjectHeader from "@/components/project/projectHeader";
import ProjectAccesses from "@/components/project/projectAccesses";
import ProjectTechnologies from "@/components/project/projectTechnologies";
import ProjectDemoVideo from "@/components/project/projectDemoVideo";

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
    </div>
  );
}
