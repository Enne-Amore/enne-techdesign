import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";

export default function ProjectScreenPrototyping(props: ProjectsType["prototyping"]) {
  return (
    <section
      className={`w-full bg-gradient-to-b ${props.sectionStyle} flex flex-col justify-center items-center gap-11 px-8 pt-12 pb-20 shadow xl:gap-16 xl:pt-70px xl:pb-100px`}
    >
      <h2
        className={`w-[230px] font-bold ${props.titleStyle} text-28px text-center text-shadow-2xs -mb-5 xl:w-full xl:text-32px`}
      >
        Prototipação de Tela
      </h2>

      <ul className={`flex flex-col gap-10 xl:flex-row xl:gap-20`}>
        {props.imgs.map((img, index) => (
          <li key={index}>
            <figure>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`/assets/${img.img}`}
                  width={500}
                  height={265}
                  type="image/png"
                />

                <Image
                  src={`/assets/${img.img}`}
                  alt={img.alt}
                  width={300}
                  height={161}
                  className={`filter drop-shadow`}
                />
              </picture>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
