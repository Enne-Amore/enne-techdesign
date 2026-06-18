import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";

export default function ProjectProblemn(props: ProjectsType["problemn"]) {
  return (
    <section
      id={props.id}
      className={`w-full bg-linear-to-b ${props.sectionStyle} flex flex-col items-center gap-8 px-8 py-11 shadow xl:gap-10 xl:px-100px xl:py-70px`}
    >
      <h2
        className={`${props.titleStyle} text-28px text-center text-shadow-2xs -mb-5 xl:text-32px`}
      >
        Problemas enfrentados
      </h2>

      {props.line1 && (
        <div
          className={props.line1.containerStyle}
        >
          <p
            dangerouslySetInnerHTML={{ __html: props.line1.text }}
            className={`${props.line1.textWidth} ${props.textStyle} text-xl text-shadow-2xs xl:text-2xl`}
          ></p>

          {props.line1.img && (
            <figure>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`/assets/${props.line1.img}.avif`}
                  width={Number(props.line1.desktopWidth)}
                  height={Number(props.line1.desktopHeight)}
                  type="image/avif"
                />

                <Image
                  src={`/assets/${props.line1.img}.avif`}
                  alt={`${props.line1.alt}`}
                  width={Number(props.line1.mobileWidth)}
                  height={Number(props.line1.mobileHeight)}
                  className={`filter drop-shadow`}
                />
              </picture>
            </figure>
          )}

          {props.line1.list && (
            <ul
              className={`${props.textStyle} list-['⭐'] list-outside mt-2 ml-6.5 space-y-3 xl:mt-4 xl:ml-8`}
            >
              {props.line1.list.map((item, index) => (
                <li key={index} className={`text-xl text-shadow-2xs pl-2 leading-7 xl:text-2xl xl:pl-1 xl:leading-relaxed`}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {props.line2 && (
        <div
          className={props.line2.containerStyle}
        >
          <p
            dangerouslySetInnerHTML={{ __html: props.line2.text }}
            className={`${props.line2.textWidth} ${props.textStyle} text-xl text-shadow-2xs xl:text-2xl`}
          ></p>

          {props.line2.img && (
            <figure>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`/assets/${props.line2.img}.avif`}
                  width={Number(props.line2.desktopWidth)}
                  height={Number(props.line2.desktopHeight)}
                  type="image/avif"
                />

                <Image
                  src={`/assets/${props.line2.img}.avif`}
                  alt={`${props.line2.alt}`}
                  width={Number(props.line2.mobileWidth)}
                  height={Number(props.line2.mobileHeight)}
                  className={`filter drop-shadow`}
                />
              </picture>
            </figure>
          )}
        </div>
      )}

      {props.conclusion && (
        <p
          dangerouslySetInnerHTML={{ __html: props.conclusion }}
          className={`max-w-180 ${props.textStyle} text-xl text-shadow-2xs -mt-2 xl:text-2xl xl:mt-auto`}
        ></p>
      )}
    </section>
  );
}
