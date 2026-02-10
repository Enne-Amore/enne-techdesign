import SocialNetworks from "@/components/socialNetworks";
import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaUpRightFromSquare } from "react-icons/fa6";

export default function ProjectFooter(props: ProjectsType["footer"]) {
  return (
    <footer
      id={props.id}
      className={`bg-gradient-to-b ${props.footerStyle} flex flex-col items-center gap-12 p-8 pb-5 xl:px-12 xl:py-10`}
    >
      <div
        className={`w-full flex flex-col items-center gap-12 xl:flex-row xl:justify-between xl:items-start`}
      >
        <div
          className={`w-full flex justify-between items-center ${props.researchSources ? `xl:flex-col xl:items-baseline` : ``} xl:gap-8`}
        >
          <Link
            href="/"
            aria-label="Voltar à página inicial clicando na logo do portfólio"
            rel="previous"
          >
            <figure className={`flex items-center gap-2.5`}>
              <Image
                src={`/favicon/logo.png`}
                alt={`Logo do site com um coração rosa`}
                width={60}
                height={60}
                className={`filter drop-shadow xl:w-16`}
              />
            </figure>
          </Link>

          <SocialNetworks socialNetworkStyle={props.socialNetworkStyle} />
        </div>

        {props.researchSources && (
          <div className={`flex flex-col items-center gap-1.5 xl:items-end`}>
            <h3
              className={`${props.researchSources.titleStyle} text-xl text-shadow-2xs flex items-center gap-2.5 xl:text-2xl xl:mr-2`}
            >
              <span>Fontes de Pesquisa</span>

              <FaMagnifyingGlass />
            </h3>

            <ul className={`flex flex-col items-end`}>
              {props.researchSources.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    aria-label={link.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium ${props.researchSources?.linkStyle} text-base text-shadow-2xs flex items-center gap-2 px-4 py-2 rounded-4xl transition duration-300 xl:text-xl`}
                  >
                    <span className={`w-[175px] xl:w-max`}>{link.label}</span>

                    <FaUpRightFromSquare className={`w-[18px] h-[23px]`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p
        className={`w-[235px] ${props.copyrightStyle} text-xs text-center text-shadow-2xs leading-5 xl:w-max xl:text-base`}
      >
        <strong>Enne TechDesign</strong> © 2026 | Vamos criar um site incrível!
      </p>
    </footer>
  );
}
