import Image from "next/image";

export default function ProjectTargetAudience() {
  return (
    <section
      id={`target-audience-cnbpb`}
      className={`flex flex-col justify-center items-center gap-12 xl:w-268.5 xl:flex-row xl:justify-between`}
    >
      <div
        className={`space-y-1 xl:pl-6`}
      >
        <h2
          className={`font-geometos-rounded text-28px text-center bg-linear-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text -ml-5 drop-shadow dark:from-[#F2E530] dark:to-[#ECE35A] xl:text-32px xl:-ml-8`}
        >
          Público-Alvo
        </h2>

        <ul
          className={`w-57.5 list-['⭐'] list-outside space-y-3 xl:w-67.5`}
        >
          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs pl-2 xl:pl-1 xl:text-2xl`}
          >
            Comunidade não-binária
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs pl-2 xl:pl-1 xl:text-2xl`}
          >
            Residentes da Paraíba
          </li>
        </ul>
      </div>

      <figure>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet="/assets/cnbpb-populacao-nb.avif"
            width={580}
            height={298}
            type="image/avif"
          />

          <Image
            src={`/assets/cnbpb-populacao-nb.avif`}
            alt={``}
            width={330}
            height={175}
            className={`filter drop-shadow`}
          />
        </picture>
      </figure>
    </section>
  );
}
