import { ProjectsType } from "@/types/projectsType";

export default function ProjectFunctions(
  props: ProjectsType["technologies"]["functions"],
) {
  return (
    <article className={`space-y-10 xl:space-y-70px`}>
      <h3
        className={`${props.titleStyle} text-2xl text-shadow-2xs xl:text-28px`}
      >
        Funcionalidades
      </h3>

      <ul
        className={`w-full flex flex-col justify-center items-center m-auto gap-8 px-3.5 xl:max-w-full xl:w-208.5 xl:gap-10 sm:px-0`}
      >
        {props.list.map((item, index) => (
          <li
            key={index}
            className={`w-full ${props.listStyle} px-8 py-6 rounded-4xl shadow xl:max-w-112.5 xl:px-9 xl:py-5 xl:odd:-translate-x-32 xl:even:translate-x-32`}
          >
            <p
              dangerouslySetInnerHTML={{ __html: item }}
              className={`w-fit text-xl text-center text-shadow-2xs leading-9 mx-auto xl:leading-10 xl:text-2xl`}
            ></p>
          </li>
        ))}
      </ul>
    </article>
  );
}
