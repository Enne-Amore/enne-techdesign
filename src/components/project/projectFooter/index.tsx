import SocialNetworks from "@/components/socialNetworks";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaUpRightFromSquare } from "react-icons/fa6";

export default function ProjectFooter() {
  return (
    <footer
      id={`footer-cnbpb`}
      className={`bg-gradient-to-b from-[#6A4EA6] via-[#713CA6] to-[#242526] flex flex-col items-center gap-12 p-8 pb-5 xl:px-12 xl:py-10`}
    >
      <div
        className={`w-full flex flex-col items-center gap-12 xl:flex-row xl:justify-between xl:items-start`}
      >
        <div
          className={`w-full flex justify-between items-center xl:flex-col xl:items-baseline xl:gap-8`}
        >
          <Link
            href="/"
            aria-label="Voltar à página inicial clicando na logo do portfólio"
            rel="previous"
          >
            <figure className={`flex items-center gap-2.5`}>
              <Image
                src={"/favicon/logo.png"}
                alt={"Logo do site com um coração rosa"}
                width={60}
                height={60}
                className={`filter drop-shadow xl:w-16`}
              />
            </figure>
          </Link>

          <SocialNetworks
            socialNetworkStyle={`bg-[#FFFCFE]/10 text-[#F2E530] border-[#F2E530] hover:bg-[#F2E530] hover:text-[#242325] focus-visible:bg-[#F2E530] focus-visible:text-[#242325] active:bg-[#FFCE31]`}
          />
        </div>

        <div className={`flex flex-col items-center gap-1.5 xl:items-end`}>
          <h3
            className={`font-geometos-rounded text-[#F2E530] text-xl text-shadow-2xs flex items-center gap-2.5 xl:text-2xl xl:mr-2`}
          >
            <span>Fontes de Pesquisa</span>

            <FaMagnifyingGlass />
          </h3>

          <ul className={`flex flex-col items-end`}>
            <li>
              <a
                href={`https://www.fundobrasil.org.br/projeto/coletive-nao-binarie-da-paraiba`}
                aria-label={`Acesse a página sobre o Coletive Não-Binárie da Paraíba no site do Fundo Brasil`}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium text-[#FFFFFD] text-base text-shadow-2xs flex items-center gap-2 px-4 py-2 rounded-4xl transition duration-300 hover:bg-[#FFFFFD]/15 active:bg-[#FFFFFD]/30 xl:text-xl`}
              >
                <span className={`w-[175px] xl:w-max`}>
                  Coletive Não-Binárie da Paraíba - Fundo Brasil
                </span>

                <FaUpRightFromSquare className={`w-[18px] h-[23px]`} />
              </a>
            </li>

            <li>
              <a
                href={`https://medium.com/guia-para-linguagem-neutra-pt-br`}
                aria-label={`Acesse o artigo Guia para Linguagem Neutra de Ophelia Cassiano no Medium`}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium text-[#FFFFFD] text-base text-shadow-2xs flex items-center gap-2.5 px-4 py-2 rounded-4xl transition duration-300 hover:bg-[#FFFFFD]/15 active:bg-[#FFFFFD]/30 xl:text-xl`}
              >
                <span className={`w-[212px] xl:w-max`}>
                  Guia para linguagem neutra - Ophelia Cassiano
                </span>

                <FaUpRightFromSquare className={`w-[18px] h-[23px]`} />
              </a>
            </li>

            <li>
              <a
                href={`https://orientando.org/listas/lista-de-generos/nao-binarie`}
                aria-label={`Acesse o artigo Guia para Linguagem Neutra de Ophelia Cassiano no Medium`}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium text-[#FFFFFD] text-base text-shadow-2xs flex items-center gap-2.5 px-4 py-2 rounded-4xl transition duration-300 hover:bg-[#FFFFFD]/15 active:bg-[#FFFFFD]/30 xl:text-xl`}
              >
                <span className={`w-[180px] xl:w-max`}>
                  Não-binárie - Orientando
                </span>

                <FaUpRightFromSquare className={`w-[18px] h-[23px]`} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p
        className={`w-[235px] font-open-dyslexic text-[#FFFFFD] text-xs text-center text-shadow-2xs leading-5 xl:w-max xl:text-base`}
      >
        <strong>Enne TechDesign</strong> © 2026 | Vamos criar um site incrível!
      </p>
    </footer>
  );
}
