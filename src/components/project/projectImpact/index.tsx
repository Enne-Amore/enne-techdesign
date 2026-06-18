import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";

export default function ProjectImpact(props: ProjectsType["impact"]) {
  return (
    <section
      id={props.id}
      className={`flex flex-col justify-center items-center gap-9 xl:w-268.5 xl:flex-row-reverse xl:justify-between`}
    >
      <div className={`space-y-1 px-8 xl:px-0`}>
        <h2
          className={`${props.titleStyle} text-28px text-center bg-linear-to-r text-transparent bg-clip-text drop-shadow xl:text-32px`}
        >
          Impacto
        </h2>

        <ul
          className={`list-['⭐'] list-outside ml-5.5 space-y-3 xl:ml-auto`}
        >
          {props.list.map((item, index) => (
            <li
              key={index}
              className={`${props.textStyle} text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <figure>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`/assets/${props.img}-impact-desktop.svg`}
            width={410}
            height={465}
            type="image/png"
          />

          <Image
            src={`/assets/${props.img}-impact-mobile.svg`}
            alt={props.alt}
            width={276}
            height={319}
            className={`filter drop-shadow`}
          />
        </picture>
      </figure>
    </section>
  );
}
