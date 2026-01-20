import Image from "next/image";
import SectionBackground from "../sectionBackground";

export default function Footer() {
  return (
    <footer
      id="rodape"
      className={`relative bg-dark-pink-200 flex flex-col items-center gap-7 pt-6 pb-5 xl:bg-white xl:dark:bg-black xl:flex-row xl:pt-9 xl:pb-8 xl:pl-10`}
    >
      {/* background */}
      <SectionBackground
        src={`footer`}
        mobileHeight={168}
        desktopHeight={124}
      />

      {/* content */}
      <figure className={`flex items-center gap-2.5`}>
        <Image
          src={"/favicon/logo.png"}
          alt={"Logo do site com um coração rosa"}
          width={50}
          height={50}
          className={`filter drop-shadow xl:w-16`}
        />
      </figure>

      <p
        className={`relative text-xs text-center text-shadow-2xs leading-5 xl:text-base xl:absolute xl:left-1/2 xl:-translate-x-1/2`}
      >
        <strong>Enne TechDesign</strong> © 2026 | Vamos criar um site incrível!
      </p>
    </footer>
  );
}
