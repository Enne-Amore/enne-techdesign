import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";

export default function ProjectExplanation(
  props: ProjectsType["styleGuide"]["explanation"],
) {
  return (
    <article
      className={`flex flex-col justify-center items-center gap-9 xl:w-[1074px] xl:flex-row xl:justify-between`}
    >
      <div className={`space-y-1`}>
        <h2
          className={`${props.titleStyle} text-28px text-center text-shadow-2xs bg-gradient-to-r text-transparent bg-clip-text xl:text-32px`}
        >
          Guia de Estilo
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
            srcSet={`/assets/${props.img}-style-guide-desktop.png`}
            width={450}
            height={338}
            type="image/png"
          />

          <Image
            src={`/assets/${props.img}-style-guide-mobile.png`}
            alt={props.alt}
            width={300}
            height={226}
            className={`rounded-4xl filter drop-shadow`}
          />
        </picture>
      </figure>
    </article>
  );
}
