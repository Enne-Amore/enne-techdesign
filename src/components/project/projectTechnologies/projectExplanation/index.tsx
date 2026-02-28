import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";

export default function ProjectExplanation(
  props: ProjectsType["technologies"]["explanation"],
) {
  return (
    <article
      className={`flex flex-col justify-center items-center gap-9 xl:w-268.5 xl:flex-row xl:justify-between`}
    >
      <div className={`space-y-1`}>
        <h2
          className={`${props.titleStyle} bg-linear-to-br text-transparent bg-clip-text text-28px text-center drop-shadow xl:text-32px`}
        >
          Tecnologias Utilizadas
        </h2>

        <p
          dangerouslySetInnerHTML={{ __html: props.text }}
          className={`${props.textStyle} text-xl text-shadow-2xs leading-9 xl:text-2xl xl:leading-10`}
        ></p>
      </div>

      <figure>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`/assets/${props.img}-technologies.png`}
            width={450}
            height={216}
            type="image/png"
          />

          <Image
            src={`/assets/${props.img}-technologies.png`}
            alt={props.alt}
            width={300}
            height={104}
            className={`filter drop-shadow`}
          />
        </picture>
      </figure>
    </article>
  );
}
