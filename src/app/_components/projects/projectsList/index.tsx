import 'aos/dist/aos.css';
import { projects } from "@/data/projects";
import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsList() {
  const cards: ProjectsType["card"][] = projects.map((project) => project.card);

  return (
    <ul
      className={`w-[280px] flex flex-col gap-10 xl:w-[1090px] xl:flex-row xl:flex-wrap xl:gap-7`}
    >
      {cards.map((card, index) => (
        <li
          key={index}
          data-aos="zoom-in-up"
          className={`xl:even:mt-5`}
        >
          <Link
            href={card.url}
            aria-label={card.ariaLabel}
            rel="next"
            className={`rounded-4xl group`}
          >
            <figure
              className={`relative w-[280px] border-2 border-light-pink-100 rounded-4xl shadow-[0_0_2px] shadow-light-pink-100 overflow-hidden duration-500 ease-in-out group-hover:border-light-pink-200 group-hover:shadow-[0_0_10px] group-hover:shadow-light-pink-200 group-focus-within:border-light-pink-200 group-focus-within:shadow-[0_0_10px] group-focus-within:shadow-light-pink-200 xl:w-[530px]`}
            >
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`assets/${card.imgDesktop}`}
                  width={530}
                  height={330}
                  type="image/avif"
                />

                <Image
                  src={`/assets/${card.imgMobile}`}
                  alt={card.alt}
                  width={280}
                  height={400}
                  className={`rounded-4xl duration-500 ease-in-out group-hover:scale-110 group-focus-within:scale-110`}
                />
              </picture>

              {/* Color overlay */}
              <div
                className={`absolute inset-0 h-[400px] bg-gradient-to-b from-light-pink-100/10 to-light-pink-100 opacity-0 rounded-4xl z-10 duration-500 ease-in-out group-hover:opacity-20 group-focus-within:opacity-20 group-active:opacity-30 xl:h-[330px]`}
              />

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
          </Link>
        </li>
      ))}
    </ul>
  );
}
