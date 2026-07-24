import SectionTitle from "@/components/sectionTitle";
import SectionBackground from "@/components/sectionBackground";
import ProjectsList from "./projectsList";

export default function Projects() {
  return (
    <section
      id="projetos"
      className={`relative w-full flex flex-col items-center gap-12 px-14 pt-14 pb-24 mt-5 -mb-20 xl:gap-70px xl:pt-20 xl:pb-36 xl:-mb-32`}
    >
      {/* background */}
      <SectionBackground
        src={`projects`}
        mobileHeight={2037}
        desktopHeight={1182}
        noShadow
        darkMode
      />

      {/* content */}
      <SectionTitle
        label={`Projetos em que tive o maior prazer do mundo em desenvolver`}
        style={`relative bg-clip-text text-transparent bg-linear-to-br from-dark-purple to-light-purple dark:from-light-pink-200 dark:to-light-pink-100 xl:w-[744px]`}
        animation
      />

      <ProjectsList />
    </section>
  );
}
