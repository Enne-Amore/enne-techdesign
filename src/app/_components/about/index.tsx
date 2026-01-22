import SectionBackground from "@/components/sectionBackground";
import SectionTitle from "@/components/sectionTitle";
import Image from "next/image";
import { FaFileLines } from "react-icons/fa6";

export interface ResumesInterface {
  url: string;
  ariaLabel: string;
  label: string;
}

export default function About() {
  // List of resumes data
  const resumes: ResumesInterface[] = [
    {
      url: "https://1drv.ms/w/c/cdd7cec41e6f84fa/IQC0C8Z4uU4eTI9t6LI8PaiFAdllA2EsoOGTDK8NRLI_Fdc",
      ariaLabel: "Ir ao meu currículo de UI/UX Design",
      label: "UI/UX Design",
    },
    {
      url: "https://1drv.ms/w/c/cdd7cec41e6f84fa/IQDcdTwI5ey_QalLxw1pB4EGAeqanRl-agGL-mB8WEqDW44",
      ariaLabel: "Ir ao meu currículo de Front-end",
      label: "Front-end",
    },
  ];

  return (
    <section
      id="sobre"
      className={`relative w-full px-9 pt-14 pb-24 flex flex-col justify-center items-center gap-14 xl:flex-row xl:gap-28 xl:py-20`}
    >
      {/* background */}
      <SectionBackground
        src={`about`}
        mobileHeight={1384}
        desktopHeight={650}
      />

      {/* content */}
      <article className={`relative space-y-3.5 xl:space-y-2 xl:w-[612px]`}>
        <SectionTitle
          label={`Sobre mim e minhas reflexões`}
          style={`text-white-300 text-32px leading-11 xl:w-max xl:text-4xl`}
        />

        <p className={`text-xl text-shadow-2xs leading-8 xl:text-2xl xl:leading-9`}>
          Trabalhar com <strong>Front-end</strong> e <strong>UI/UX Design</strong> é onde posso unir lógica e sensibilidade para criar <strong>experiências digitais acessíveis e cheias de significado</strong>. Valorizo muito a <strong>comunicação contínua</strong>, o <strong>trabalho em equipe</strong> e o <strong>aprendizado compartilhado</strong>, pois sei que boas soluções nascem de pessoas diversas que colaboram com empatia e escuta ativa. Vejo nas minhas vocações uma forma de <strong>transformar o digital em um espaço mais humano e acolhedor</strong>.
        </p>

        <ul
          className={`flex flex-col items-center gap-5 mt-7 xl:flex-row xl:mt-6`}
        >
          {resumes.map((resume, index) => (
            <li key={index}>
              <a
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={resume.ariaLabel}
                className={`flex gap-1.5 items-center font-bold text-base text-shadow-2xs bg-dark-pink-100/30 border-1 border-dark-pink-100 px-6 py-2.5 rounded-4xl shadow transition duration-300 hover:bg-dark-pink-100 focus-visible:bg-dark-pink-100 active:bg-dark-pink-200 xl:text-lg`}
              >
                <span>
                  <FaFileLines className={`w-5 h-auto`} />
                </span>

                <span lang="en">CV {resume.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </article>

      <figure className={`relative flex flex-col items-center gap-5`}>
        <Image
          src={`/assets/enne-jim-pessoa.png`}
          alt="Minha foto de perfil"
          width={280}
          height={280}
          className={`filter drop-shadow xl:w-[360px]`}
        />

        <figcaption className={`flex flex-col items-center gap-2.5`}>
          <span
            className={`font-lexia-readable text-white-200 text-2xl text-shadow-2xs xl:text-28px`}
          >
            Enne Jim Pessoa
          </span>

          <span
            className={`font-medium text-gray text-xs text-shadow-2xs bg-gradient-to-br from-light-pink-200 to-light-pink-100 shadow px-2.5 py-1 rounded-4xl xl:text-base xl:px-3.5`}
          >
            Ê/Elu/-e
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
