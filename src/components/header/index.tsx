import Image from "next/image";
import SectionBackground from "../sectionBackground";
import ColorTheme from "./colorTheme";
import MenuDialogMobile from "./menuDialogMobile";
import MenuDesktop from "./menuDesktop";
import { FaChevronDown } from "react-icons/fa6";

export default function Header() {
  return (
    <header
      className={`relative h-screen bg-white-100 text-gray p-6 flex flex-col justify-between items-center dark:bg-gray dark:text-white-100 xl:py-8 xl:px-10 2xl:px-14`}
    >
      {/* background */}
      <SectionBackground
        src={`header`}
        mobileHeight={840}
        desktopHeight={832}
        darkMode
        priority
      />

      {/* content */}
      <figure className={`absolute top-1/2 left-1/2 -translate-1/2 w-full flex flex-col justify-center items-center gap-6 xl:flex-row xl:gap-8`}>
        <Image
          src={`/favicon/logo.png`}
          alt={`Logo do site com um coração rosa`}
          width={120}
          height={120}
          className={`filter drop-shadow xl:w-37.5`}
          priority
          loading="eager"
        />

        <h1
          className={`w-66.5 font-bold bg-linear-to-br from-black to-gray bg-clip-text text-transparent text-5xl text-center leading-14 filter drop-shadow dark:from-light-pink-200 dark:to-light-pink-100 sm:w-fit xl:text-8xl xl:leading-relaxed`}
        >
          Enne TechDesign
        </h1>
      </figure>

      <div className={`w-full flex justify-between items-center`}>
        <ColorTheme />

        <MenuDialogMobile />

        <MenuDesktop />
      </div>

      <a
        href="#hero"
        aria-label="Embarque ao portfólio web"
        className={`text-shadow-2xs transition animate-downBtn hover:text-light-purple focus-visible:text-light-purple active:text-dark-purple dark:hover:text-light-pink-100 dark:focus-visible:text-light-pink-100 dark:active:text-light-pink-200`}
      >
        <FaChevronDown className={`w-14 h-auto xl:w-16`} />
      </a>
    </header>
  );
}
