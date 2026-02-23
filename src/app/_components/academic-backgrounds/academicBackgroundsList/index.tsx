interface AcademicBackgroundsInterface {
  course: string;
  degree: string;
  institution: string;
  year: string;
}

export default function AcademicBackgroundsList() {
  const academicBackgrounds: AcademicBackgroundsInterface[] = [
    {
      course: "User Experience",
      degree: "Especialização",
      institution: "FPB - Faculdade Internacional da Paraíba",
      year: "2025 - Em conclusão",
    },
    {
      course: "English",
      degree: "Curso de Idiomas",
      institution: "Celin - Centro Estadual de Línguas da Paraíba",
      year: "2024 - Em conclusão",
    },
    {
      course: "Sistemas Para Internet",
      degree: "Graduação",
      institution: "UNIPÊ - Centro Universitário de João Pessoa",
      year: "2023 - 2025",
    },
  ];

  return (
    <ul
      className={`flex flex-col justify-center items-center xl:items-end xl:gap-12`}
    >
      {academicBackgrounds.map((background, index) => (
        <li
          key={index}
          className={`flex flex-col items-center xl:flex-row xl:even:flex-row-reverse xl:odd:-translate-x-52.75 xl:even:translate-x-51.25`}
        >
          <div
            data-aos="flip-down"
            data-aos-offset="0"
            className={`bg-linear-to-br from-light-pink-200 to-light-pink-100 flex flex-col gap-1.5 shadow px-8 py-6 rounded-4xl dark:from-dark-purple dark:to-light-purple`}
          >
            <h3
              className={`font-lexia-readable bg-linear-to-br from-dark-purple to-light-purple bg-clip-text text-transparent text-xl drop-shadow dark:from-light-pink-200 dark:to-light-pink-100 xl:text-2xl`}
            >
              {background.course} - {background.degree}
            </h3>

            <span
              className={`text-gray text-base text-shadow-2xs dark:text-white-100 xl:w-[320px] xl:text-xl`}
            >
              {background.institution}
            </span>

            <span
              className={`font-light text-gray text-xs text-right text-shadow-2xs mt-2.5 dark:text-white-100 xl:text-base`}
            >
              {background.year}
            </span>
          </div>

          <hr
            className={`w-0.5 h-10 bg-dark-pink-100 dark:bg-light-pink-100 xl:w-9 xl:h-[2.5px] xl:text-dark-pink-100 xl:dark:text-light-pink-100`}
          />
        </li>
      ))}
    </ul>
  );
}
