import Image from "next/image";

export default function ProjectSolution() {
  return (
    <section
      id={`solution-cnbpb`}
      className={`w-full bg-linear-to-b from-[#F2E530] to-[#FFCE31] flex flex-col justify-center items-center gap-10 px-8 pt-11 pb-16 shadow dark:bg-[linear-gradient(to_bottom,#242325B3,#242325B3),linear-gradient(to_bottom,#F2E530,#FFCE31)] xl:flex-row-reverse xl:gap-100px xl:px-100px xl:py-70px`}
    >
      <div className={`space-y-1`}>
        <h2
          className={`font-geometos-rounded text-28px text-center bg-linear-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text drop-shadow dark:from-[#F2E530] dark:to-[#ECE35A] xl:text-32px`}
        >
          Solução
        </h2>

        <p
          className={`font-open-dyslexic text-xl text-shadow-2xs leading-9 xl:w-145 xl:text-2xl xl:leading-10`}
        >
          Necessitei construir um <strong>website</strong> em forma de <strong>landing page</strong>, seguindo o conceito de Mobile-First, que centralizasse tudo sobre o <strong>Coletive Não-Binárie da Paraíba</strong> em um único espaço virtual com a finalidade de <strong>facilitar o compartilhamento e a absorção de informações</strong> sobre o movimento social, como seus objetivos e atividades, e que contenha <strong>um botão principal</strong> de redirecionamento para o formulário de <strong>mapeamento da comunidade</strong>.
        </p>
      </div>

      <figure>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`/assets/cnbpb-panfleto-desktop.avif`}
            width={400}
            height={460}
            type="image/png"
          />

          <Image
            src={`/assets/cnbpb-panfleto-mobile.avif`}
            alt={`Panfleto do Coletive destacando um QR Code para o site oficial da organização`}
            width={300}
            height={375}
            className={`rounded-4xl shadow`}
          />
        </picture>
      </figure>
    </section>
  );
}
