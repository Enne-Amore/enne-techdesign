import Image from "next/image";

export default function ProjectImpact() {
  return (
    <section
      id={`impact-cnbpb`}
      className={`flex flex-col justify-center items-center gap-9 xl:w-268.5 xl:flex-row-reverse xl:justify-between`}
    >
      <div className={`space-y-1 px-8 xl:px-0`}>
        <h2
          className={`font-geometos-rounded text-28px text-center bg-linear-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text drop-shadow dark:from-[#F2E530] dark:to-[#ECE35A] xl:text-32px`}
        >
          Impacto
        </h2>

        <ul
          className={`list-['⭐'] list-outside ml-5.5 space-y-3 xl:w-122.5 xl:ml-auto`}
        >
          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Intuitividade em apresentar informações
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Instigação em chamar o público-alvo para ser mapeado
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Otimização de comunicação e de mobilização
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Credibilidade e profissionalismo
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Alcance maior de conscientização
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Agilidade para atualização de informações
          </li>
        </ul>
      </div>

      <figure>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`/assets/cnbpb-impact-desktop.svg`}
            width={410}
            height={465}
            type="image/png"
          />

          <Image
            src={`/assets/cnbpb-impact-mobile.svg`}
            alt={`Telas mobile de algumas seções do site`}
            width={276}
            height={319}
            className={`filter drop-shadow`}
          />
        </picture>
      </figure>
    </section>
  );
}
