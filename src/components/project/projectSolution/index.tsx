import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";

export default function ProjectSolution(props: ProjectsType["solution"]) {
  return (
    <section
      id={props.id}
      className={`w-full bg-linear-to-b ${props.sectionStyle} flex flex-col justify-center items-center gap-10 px-8 pt-11 pb-16 shadow xl:flex-row-reverse xl:gap-100px xl:px-100px xl:py-70px`}
    >
      <div className={`space-y-1`}>
        <h2
          className={`${props.titleStyle} text-28px text-center xl:text-32px`}
        >
          Solução
        </h2>

        <p
          dangerouslySetInnerHTML={{ __html: props.text }}
          className={`${props.textStyle} text-xl text-shadow-2xs leading-9 xl:w-145 xl:text-2xl xl:leading-10`}
        ></p>

        {props.list && (
          <ul
            className={`${props.textStyle} list-['⭐'] list-outside mt-2 ml-6.5 space-y-3 xl:w-145 xl:ml-8`}
          >
            {props.list.map((item, index) => (
              <li
                key={index}
                className={`text-xl text-shadow-2xs pl-2 leading-7 xl:text-2xl xl:pl-1 xl:leading-relaxed`}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
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
            className={`rounded-4xl filter drop-shadow`}
          />
        </picture>
      </figure>
    </section>
  );
}
