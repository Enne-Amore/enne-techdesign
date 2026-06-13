"use client";

import { useEffect } from "react";
import Aos from "aos";
import Hero from "../hero";
import Projects from "../projects";
import About from "../about";
import AcademicBackgrounds from "../academic-backgrounds";
import Contacts from "../contacts";

export default function Main() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  return (
    <main
      className={`bg-white-100 flex flex-col items-center gap-70px pt-20 overflow-hidden dark:bg-gray xl:gap-100px xl:pt-28 xl:pb-100px`}
    >
      <Hero />

      <Projects />

      <About />

      <AcademicBackgrounds />

      <Contacts />
    </main>
  );
}
