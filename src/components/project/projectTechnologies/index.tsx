import { ProjectsType } from "@/types/projectsType";
import ProjectExplanation from "./projectExplanation";
import ProjectFunctions from "./projectFunctions";

export default function ProjectTechnologies(
  props: ProjectsType["technologies"],
) {
  return (
    <section id={props.id} className={`px-8 space-y-20 xl:space-y-100px`}>
      <ProjectExplanation
        titleStyle={props.explanation.titleStyle}
        text={props.explanation.text}
        textStyle={props.explanation.textStyle}
        img={props.explanation.img}
        alt={props.explanation.alt}
      />

      <ProjectFunctions
        titleStyle={props.functions.titleStyle}
        list={props.functions.list}
        listStyle={props.functions.listStyle}
      />
    </section>
  );
}
