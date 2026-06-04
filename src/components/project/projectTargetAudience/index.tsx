import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";

export default function ProjectTargetAudience(props: ProjectsType["targetAudience"]) {
  return (
    <section
      id={props.id}
      className={`flex flex-col justify-center items-center gap-12 xl:w-268.5 xl:flex-row xl:justify-between`}
    >
      <div
        className={`space-y-1 xl:pl-6`}
      >
        <h2
          className={`${props.titleStyle} text-28px text-center bg-linear-to-r text-transparent bg-clip-text -ml-5 drop-shadow xl:text-32px xl:-ml-8`}
        >
          Público-Alvo
        </h2>

        <ul
          className={`w-57.5 list-['⭐'] list-outside space-y-3 xl:w-67.5`}
        >
          {props.list.map((item, index) => (
            <li
              key={index}
              className={`${props.textStyle} leading-8 text-xl text-shadow-2xs pl-2 xl:pl-1 xl:text-2xl`}
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
            srcSet={`/assets/${props.img}-desktop.avif`}
            width={Number(props.desktopWidth)}
            height={Number(props.desktopHeight)}
            type="image/avif"
          />

          <Image
            src={`/assets/${props.img}-mobile.avif`}
            alt={props.alt}
            width={Number(props.mobileWidth)}
            height={Number(props.mobileHeight)}
            className={`filter drop-shadow`}
          />
        </picture>
      </figure>
    </section>
  );
}
