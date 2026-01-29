import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className={`flex flex-col-reverse items-center gap-12 xl:w-[1078px] xl:flex-row xl:justify-between`}
    >
      <div className={`flex flex-col items-center gap-8 xl:gap-5 xl:-translate-x-8`}>
        <h2
          className={`w-[221px] font-lexia-readable text-black text-44px text-center text-shadow-2xs leading-16 flex flex-col items-center dark:text-white-300 xl:w-full xl:text-5xl`}
        >
          Tecnologia & Design
        </h2>

        <p className={`w-[310px] text-4xl text-center text-shadow-2xs xl:w-[478px] xl:text-40px`}>
          <span className={`inline-block text-gray dark:text-white-100`}>União que constrói um</span>

          <strong className={`font-bold text-gray bg-gradient-to-br from-light-pink-200 to-light-pink-100 box-decoration-clone leading-[65px] px-7 pt-2 pb-3 rounded-full xl:bg-[url(/assets/hearts-desktop.png)] xl:bg-no-repeat xl:bg-position-[center_bottom] xl:bg-size-[auto_70px] xl:px-10 xl:py-3 xl:rounded-none`}>espaço digital com propósito e empatia</strong>
        </p>
      </div>

      <figure>
        <Image
          src={`/assets/website-illustration.png`}
          alt=""
          width={280}
          height={206}
          className={`filter drop-shadow xl:w-[517px] xl:h-[379px]`}
          priority
          loading="eager"
        />
      </figure>
    </section>
  );
}
