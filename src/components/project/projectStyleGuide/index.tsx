import { ProjectsType } from "@/types/projectsType";
import ProjectColors from "./projectColors";
import ProjectExplanation from "./projectExplanation";
import ProjectTypography from "./projectTypography";

export default function ProjectStyleGuide(props: ProjectsType["styleGuide"]) {
  return (
    <section id={props.id} className={`px-8 space-y-20 xl:space-y-100px`}>
      <ProjectExplanation
        titleStyle={props.explanation.titleStyle}
        text={props.explanation.text}
        textStyle={props.explanation.textStyle}
        img={props.explanation.img}
        alt={props.explanation.alt}
      />

      <ProjectColors
        titleStyle={props.colors.titleStyle}
        darkContrast={props.colors.darkContrast}
        lightContrast={props.colors.lightContrast}
        lists={props.colors.lists}
      />

      <ProjectTypography
        titleStyle={props.typography.titleStyle}
        fonts={props.typography.fonts}
        proportions={props.typography.proportions}
      />
    </section>
  );
}
