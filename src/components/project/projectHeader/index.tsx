import { ProjectsType } from "@/types/projectsType";
import Link from "next/link";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa6";
import Image from "next/image";

export default function ProjectHeader(props: ProjectsType["header"]) {
  return (
    <header
      className={`max-w-screen min-h-screen ${props.headerStyle} flex flex-col justify-between items-center px-9 py-8 shadow`}
    >
      <div className={`w-full flex justify-between xl:items-center`}>
        <Link
          href="/#projetos"
          aria-label="Voltar à página inicial"
          className={`text-[#FFFFFD] text-shadow-2xs xl:p-3 xl:rounded-full xl:transition xl:hover:bg-white/15 xl:hover:shadow xl:focus-visible:bg-white/15 xl:focus-visible:shadow xl:active:bg-white/30`}
          rel="previous"
        >
          <FaArrowLeft className={`w-[25px] h-auto xl:w-[30px]`} />
        </Link>

        <ul className={`flex flex-col items-end gap-2.5 xl:flex-row`}>
          {props.positions.map((position, index) => (
            <li
              key={index}
              className={`w-max text-xs text-shadow-2xs ${props.positionStyle} px-3.5 py-1 rounded-4xl shadow xl:text-base`}
              lang="en"
            >
              {position}
            </li>
          ))}
        </ul>
      </div>

      <figure className={`flex flex-col items-center gap-12 xl:gap-16`}>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`/assets/${props.img}-project-header.png`}
            width={Number(props.desktopWidth)}
            height={Number(props.desktopHeight)}
            type="image/png"
          />

          <Image
            src={`/assets/${props.img}-project-header.png`}
            alt={props.alt}
            width={Number(props.mobileWidth)}
            height={Number(props.mobileHeight)}
            className={`xl:w-[${props.desktopWidth}px] filter drop-shadow`}
          />
        </picture>

        <figcaption
          className={`${props.captionStyle} text-xl text-center text-shadow-2xs`}
        >
          {props.caption}
        </figcaption>
      </figure>

      <a
        href="#main"
        aria-label="Embarque ao case do projeto"
        className={`${props.downStyle} text-shadow-2xs transition animate-downProjectBtn`}
      >
        <FaChevronDown className={`w-16 h-auto xl:w-[70px]`} />
      </a>
    </header>
  );
}
