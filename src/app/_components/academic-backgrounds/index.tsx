import SectionTitle from "@/components/sectionTitle";
import AcademicBackgroundsList from "./academicBackgroundsList";

export default function AcademicBackgrounds() {
  return (
    <section
      id="formacoes"
      className={`relative w-[320px] flex flex-col items-center gap-12 xl:w-269.5 xl:gap-70px xl:scroll-mt-20`}
    >
      <SectionTitle
        label={`Formações acadêmicas nas quais carrego comigo em minha jornada`}
        style={`bg-gradient-to-br from-dark-purple to-light-purple bg-clip-text text-transparent dark:from-light-pink-200 dark:to-light-pink-100 xl:w-[683px]`}
        animation
      />

      <AcademicBackgroundsList />

      {/* Vertical line of the list */}
      <div
        className={`hidden absolute bottom-22.25 left-145 w-0.5 h-[467.5px] rounded bg-dark-pink-100 dark:bg-light-pink-100 xl:block`}
      />
    </section>
  );
}
