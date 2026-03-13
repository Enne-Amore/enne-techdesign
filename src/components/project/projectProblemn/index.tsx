import Image from "next/image";

export default function ProjectProblemn() {
  return (
    <section
      id={`problemn-cnbpb`}
      className={`w-full bg-linear-to-b from-[#6A4EA6] to-[#713CA6] flex flex-col items-center gap-8 px-8 py-11 shadow xl:gap-10 xl:px-100px xl:py-70px`}
    >
      <h2
        className={`font-geometos-rounded text-[#F2E530] text-28px text-center text-shadow-2xs -mb-5 xl:text-32px`}
      >
        Problemas enfrentados
      </h2>

      <div
        className={`max-w-180 font-open-dyslexic text-[#FFFFFD] text-xl text-shadow-2xs leading-9 xl:text-2xl xl:leading-10`}
      >
        <p>
          As pessoas que fazem parte da não-binariedade passam por diversos <strong>problemas que derivam do binarismo de gênero</strong>, um pensamento errôneo de que existe apenas dois gêneros, feminino e masculino, além disso já ser naturalizado pela sociedade. Dessa forma, é possível citar algumas
          questões difíceis, por exemplo:
        </p>

        <ul
          className={`list-['⭐'] list-outside mt-2 ml-6.5 space-y-3 xl:mt-4 xl:ml-8`}
        >
          <li className={`pl-2 leading-7 xl:pl-1 xl:leading-relaxed`}>Exclusão social</li>

          <li className={`pl-2 leading-7 xl:pl-1 xl:leading-relaxed`}>
            Escassez de visibilidade e de representatividade
          </li>

          <li className={`pl-2 leading-7 xl:pl-1 xl:leading-relaxed`}>
            Ausência de direitos acessados e protegidos
          </li>
        </ul>
      </div>

      <div
        className={`flex flex-col items-center gap-8 xl:flex-row xl:w-268.5 xl:justify-between`}
      >
        <figure>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`/assets/cnbpb-membres-unides.png`}
              width={450}
              height={338}
              type="image/png"
            />

            <Image
              src={`/assets/cnbpb-membres-unides.png`}
              alt={`Todo Coletive unido em um encontro de não-bináries`}
              width={300}
              height={225}
              className={`filter drop-shadow`}
            />
          </picture>
        </figure>

        <p
          className={`max-w-137.5 font-open-dyslexic text-[#FFFFFD] text-xl text-shadow-2xs leading-9 xl:text-2xl xl:leading-10`}
        >
          Com isso, o Coletive Não-Binárie da Paraíba deseja avançar nas causas não-binárias estatualmente, como <strong>mapear não-bináries paraibanes</strong>, <strong>conscientizar a população</strong> acerca das dificuldades enfrentadas pela comunidade e <strong>promover a conquista e a proteção de direitos</strong>.
        </p>
      </div>

      <p
        className={`max-w-180 font-open-dyslexic text-[#FFFFFD] text-xl text-shadow-2xs leading-9 -mt-2 xl:text-2xl xl:leading-10 xl:mt-auto`}
      >
        A <strong>divulgação do coletive</strong> para a população é um fator fundamental para ajudar o movimento não-binário, porém a diretoria da organização passa por um <strong>desafio de conseguir obter recursos financeiros para produzir materiais de comunicação ao público</strong>, como banners, panfletos e cartazes, os quais também são mais trabalhosos de serem disseminados pelos lugares presencialmente.
      </p>
    </section>
  );
}
