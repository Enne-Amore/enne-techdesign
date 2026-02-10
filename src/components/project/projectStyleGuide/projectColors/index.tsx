import { ProjectsType } from "@/types/projectsType";

export default function ProjectColors(
  props: ProjectsType["styleGuide"]["colors"],
) {
  return (
    <article className={`space-y-16 xl:space-y-70px`}>
      <h3
        className={`font-bold ${props.titleStyle} text-2xl text-shadow-2xs bg-gradient-to-r xl:text-28px`}
      >
        Cores
      </h3>

      <ul
        className={`flex flex-col gap-12 m-auto px-2.5 xl:w-[834px] xl:flex-row xl:justify-between sm:px-0`}
      >
        <li
          className={`max-w-[360px] w-full border ${props.lists.containerStyle} rounded-4xl px-8 py-9 space-y-5 shadow xl:max-w-full xl:w-[380px]`}
        >
          <h4
            className={`font-bold ${props.lists.titleStyle} text-xl text-center text-shadow-2xs bg-gradient-to-br text-transparent bg-clip-text xl:text-2xl`}
          >
            Principais
          </h4>

          <ul className={`flex flex-col justify-center gap-5`}>
            {props.lists.mainColors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color.hex }}
                className={`flex justify-between items-center px-8 py-4 shadow rounded-4xl`}
              >
                <span
                  className={`font-medium ${color.isDarkContrast ? `${props.darkContrast}` : `${props.lightContrast}`} text-base xl:text-xl text-shadow-2xs`}
                >
                  {color.hex}
                </span>

                <span
                  className={`${color.isDarkContrast ? `${props.darkContrast}` : `${props.lightContrast}`} text-xs xl:text-base text-shadow-2xs`}
                >
                  {color.name}
                </span>
              </li>
            ))}
          </ul>
        </li>

        <li
          className={`max-w-[360px] w-full h-max border ${props.lists.containerStyle} rounded-4xl px-8 py-9 space-y-5 shadow xl:max-w-full xl:w-[380px]`}
        >
          <h4
            className={`font-bold ${props.lists.titleStyle} text-xl text-center text-shadow-2xs bg-gradient-to-br text-transparent bg-clip-text xl:text-2xl`}
          >
            Neutras
          </h4>

          <ul className={`flex flex-col justify-center gap-5`}>
            {props.lists.neutralColors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color.hex }}
                className={`flex justify-between items-center px-8 py-4 shadow rounded-4xl`}
              >
                <span
                  className={`font-medium ${color.isDarkContrast ? `${props.darkContrast}` : `${props.lightContrast}`} text-base xl:text-xl text-shadow-2xs`}
                >
                  {color.hex}
                </span>

                <span
                  className={`${color.isDarkContrast ? `${props.darkContrast}` : `${props.lightContrast}`} text-xs xl:text-base text-shadow-2xs`}
                >
                  {color.name}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </article>
  );
}
