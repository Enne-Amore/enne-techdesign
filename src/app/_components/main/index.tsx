import About from "../about";
import AcademicBackgrounds from "../academic-backgrounds";
import Contacts from "../contacts";
import Hero from "../hero";
import Projects from "../projects";

export default function Main() {
  return (
    <main
      className={`bg-white-100 flex flex-col items-center gap-70px pt-11 dark:bg-gray xl:gap-100px xl:pt-70px xl:pb-100px`}
    >
      <Hero />

      <Projects />

      <About />

      <AcademicBackgrounds />

      <Contacts />
    </main>
  );
}
