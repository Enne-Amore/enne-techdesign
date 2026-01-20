interface AcademicBackgroundsInterface {
  course: string;
  degree: string;
  institution: string;
  year: string;
}

export default function AcademicBackgrounds() {
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
    <section
      id="formacoes"
      className={`relative w-[320px] flex flex-col items-center gap-12 xl:w-[1078px] xl:px-0`}
    >
      <h2
        className={`w-full font-lexia-readable text-28px text-shadow-2xs shadow bg-gradient-to-br from-dark-purple to-light-purple px-9 pt-3.5 pb-3 rounded-full xl:pb-4`}
      >
        Formações
      </h2>

      <ul
        className={`flex flex-col justify-center items-center xl:items-end xl:gap-12`}
      >
        {academicBackgrounds.map((background, index) => (
          <li
            key={index}
            className={`flex flex-col items-center xl:flex-row xl:even:flex-row-reverse xl:odd:-translate-x-[211px] xl:even:translate-x-[205px]`}
          >
            <div
              className={`w-[280px] bg-gradient-to-br from-light-pink-200 to-light-pink-100 flex flex-col gap-1.5 shadow px-8 py-6 rounded-4xl xl:w-max`}
            >
              <h3
                className={`font-lexia-readable text-black text-xl text-shadow-2xs xl:text-2xl`}
              >
                {background.course} - {background.degree}
              </h3>

              <span
                className={`text-gray text-base text-shadow-2xs xl:w-[320px] xl:text-xl`}
              >
                {background.institution}
              </span>

              <span
                className={`font-thin text-gray text-xs text-right text-shadow-2xs mt-2.5 xl:text-base`}
              >
                {background.year}
              </span>
            </div>

            <hr
              className={`w-0.5 h-10 bg-dark-pink-100 xl:w-9 xl:h-[2.5px] xl:text-dark-pink-100`}
            />
          </li>
        ))}
      </ul>

      <div
        className={`hidden absolute bottom-[90px] left-[580px] w-0.5 h-[466px] rounded bg-dark-pink-100 xl:block`}
      /> {/* Vertical line of the list */}
    </section>
  );
}
