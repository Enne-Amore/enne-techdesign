import { ProjectsType } from "@/types/projectsType";
import { FaDesktop, FaMobileScreen } from "react-icons/fa6";

export default function ProjectTypography(
  props: ProjectsType["styleGuide"]["typography"],
) {
  return (
    <article className={`space-y-16 xl:space-y-70px`}>
      <h3
        className={`${props.titleStyle} text-2xl text-shadow-2xs xl:text-28px`}
      >
        Tipografia
      </h3>

      <div className={`flex flex-col justify-center items-center gap-12`}>
        <ul
          className={`max-w-90 w-full space-y-8 px-3.5 xl:max-w-full xl:w-177.5 sm:px-0`}
        >
          {props.fonts.list.map((font, index) => (
            <li
              key={index}
              className={`w-full bg-linear-to-br ${props.fonts.listStyle} flex flex-col gap-5 px-8 py-6 rounded-4xl shadow xl:flex-row xl:justify-between xl:items-center xl:py-5 xl:px-9`}
            >
              <h4
                className={`${font.fontStyle} ${props.fonts.nameStyle} text-xl text-shadow-2xs xl:text-2xl`}
              >
                {font.name}
              </h4>

              <span className={`text-xs text-end text-shadow-2xs xl:text-base`}>
                {font.role}
              </span>
            </li>
          ))}
        </ul>

        <ul
          className={`flex flex-col gap-12 m-auto px-2.5 xl:w-177.5 xl:flex-row xl:justify-between sm:px-0`}
        >
          <li
            className={`max-w-90 w-full ${props.proportions.listStyle} flex flex-col items-center gap-1 border rounded-4xl p-10 space-y-5 shadow xl:max-w-full xl:w-72.5`}
          >
            <h4 className={`flex items-center gap-1.5`}>
              <FaDesktop
                className={`w-6.5 h-6.5 ${props.proportions.iconStyle} text-shadow-2xs xl:w-8 xl:h-8`}
              />

              <span
                className={`${props.proportions.titleStyle} text-xl bg-linear-to-r text-transparent bg-clip-text drop-shadow translate-y-0.5 xl:text-2xl xl:translate-y-0`}
              >
                Desktop
              </span>
            </h4>

            <ul className={`w-45 space-y-5 xl:w-52.5`}>
              {props.proportions.lists.map((proportion, index) => (
                <li
                  key={index}
                  className={`w-full bg-linear-to-br ${props.proportions.listStyle} flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
                >
                  <h5
                    className={`${props.proportions.tagStyle} text-base text-shadow-2xs xl:text-xl`}
                  >
                    {proportion.tag}
                  </h5>

                  <span className={`text-xs text-shadow-2xs xl:text-base`}>
                    {proportion.sizeDesktop}
                  </span>

                  <span
                    className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                  >
                    {proportion.weight}
                  </span>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`max-w-90 w-full bg-[#FFFEF6]/30 flex flex-col items-center gap-1 border border-[#040008] rounded-4xl p-10 space-y-5 shadow dark:bg-[#242325]/30 dark:border-[#FFFEF6] xl:max-w-full xl:w-72.5`}
          >
            <h4 className={`flex items-center gap-1.5`}>
              <FaMobileScreen
                className={`w-6.5 h-6.5 ${props.proportions.iconStyle} text-shadow-2xs xl:w-8 xl:h-8`}
              />

              <span
                className={`${props.proportions.titleStyle} text-xl bg-linear-to-r text-transparent bg-clip-text drop-shadow translate-y-0.5 xl:text-2xl xl:translate-y-0`}
              >
                Mobile
              </span>
            </h4>

            <ul className={`w-45 space-y-5 xl:w-52.5`}>
              {props.proportions.lists.map((proportion, index) => (
                <li
                  key={index}
                  className={`w-full bg-linear-to-br ${props.proportions.listStyle} flex flex-col items-center gap-0 p-8 rounded-4xl shadow`}
                >
                  <h5
                    className={`${props.proportions.tagStyle} text-base text-shadow-2xs xl:text-xl`}
                  >
                    {proportion.tag}
                  </h5>

                  <span className={`text-xs text-shadow-2xs xl:text-base`}>
                    {proportion.sizeMobile}
                  </span>

                  <span
                    className={`text-xs text-shadow-2xs xl:text-base xl:-mt-0.5`}
                  >
                    {proportion.weight}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </article>
  );
}
