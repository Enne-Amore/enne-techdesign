import Image from "next/image";
import MenuDialogMobile from "./menuDialogMobile";
import MenuDesktop from "./menuDesktop";
import SectionBackground from "../sectionBackground";

export default function Header() {
  return (
    <header
      className={`relative bg-white-100 p-5 flex justify-between items-center dark:bg-gray xl:py-7 xl:px-10 2xl:px-14`}
    >
      {/* background */}
      <SectionBackground src={`header`} mobileHeight={95} desktopHeight={124} />

      {/* content */}
      <figure className={`relative flex items-center gap-2.5`}>
        <Image
          src={`/favicon/logo.png`}
          alt={`Logo do site com um coração rosa`}
          width={55}
          height={55}
          className={`filter drop-shadow xl:w-16`}
          priority
          loading="eager"
        />

        <h1
          className={`font-lexia-readable text-white-200 text-2xl text-shadow-2xs w-32 leading-8 sm:w-full xl:text-4xl sm:translate-y-0`}
        >
          Enne TechDesign
        </h1>
      </figure>

      <MenuDialogMobile />

      <MenuDesktop />
    </header>
  );
}
