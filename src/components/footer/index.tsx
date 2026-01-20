import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="rodape"
      className={`bg-gradient-to-b from-light-purple via-dark-purple to-gray flex flex-col items-center gap-7 pt-6 pb-5 xl:flex-row xl:py-8 xl:pl-10`}
    >
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
        className={`w-[235px] text-xs text-center text-shadow-2xs leading-5 xl:w-max xl:text-base xl:absolute xl:left-1/2 xl:-translate-x-1/2`}
      >
        <span lang="en">Copyright</span> © 2025 <strong>Enne Jim Pessoa</strong>. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
