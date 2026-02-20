import "aos/dist/aos.css";
import { projects } from "@/data/projects";
import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsList() {
  const cards: ProjectsType["card"][] = projects.map((project) => project.card);

  return (
    <ul
      className={`w-70 flex flex-col gap-10 xl:w-272.5 xl:flex-row xl:flex-wrap xl:gap-7`}
    >
      {cards.map((card, index) => (
        <li
          key={index}
          // data-aos="zoom-in-up"
          className={`relative w-70 h-100 border-2 border-light-pink-100 shadow-[0_0_2px] shadow-light-pink-100 overflow-hidden rounded-4xl group duration-500 ease-in-out dark:shadow-light-pink-100/30 hover:shadow-[0_0_40px] hover:duration-200 focus-within:shadow-[0_0_40px] active:border-light-pink-200 active:shadow-[0_0_60px] active:shadow-light-pink-200 dark:active:shadow-light-pink-200/30 xl:w-132.5 xl:h-82.5 xl:even:mt-5`}
        >
          <Link href={card.url} aria-label={card.ariaLabel} rel="next">
            <figure>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`assets/${card.img}-desktop.avif`}
                  width={530}
                  height={330}
                  type="image/avif"
                />

                <Image
                  src={`/assets/${card.img}-mobile.avif`}
                  alt={card.alt}
                  width={280}
                  height={400}
                />
              </picture>

              <figcaption className={`absolute left-6 top-4 w-full flex`}>
                <span
                  className={`w-max text-gray text-xs text-shadow-2xs select-none bg-white/90 px-2.5 py-1 rounded-4xl`}
                >
                  {card.caption}
                </span>
              </figcaption>

              {/* <ul
                  className={`absolute top-4 w-full flex justify-center gap-3`}
                >
                  {card.positions.map((position, index) => (
                    <li
                      key={index}
                      className={`w-max text-gray text-xs text-shadow-2xs select-none bg-white/90 px-2.5 py-1 rounded-4xl`}
                      lang="en"
                    >
                      {position}
                    </li>
                  ))}
                </ul> */}
            </figure>

            <figure className={`absolute inset-0`}>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`assets/${card.img}-desktop-hover.png`}
                  width={530}
                  height={330}
                  type="image/png"
                />

                <Image
                  src={`/assets/${card.img}-mobile-hover.png`}
                  alt={card.altHover}
                  width={330}
                  height={400}
                  className={`opacity-0 scale-95 duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105 group-focus-within:opacity-100 group-focus-within:scale-105`}
                />
              </picture>
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  );
}
