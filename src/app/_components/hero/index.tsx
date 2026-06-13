import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className={`flex flex-col-reverse items-center gap-12 scroll-mt-14 xl:w-269.5 xl:flex-row xl:justify-between xl:pb-3 xl:scroll-mt-40`}
    >
      <div
        data-aos="fade-right"
        className={`flex flex-col items-center gap-8 xl:gap-5 xl:-translate-x-8`}
      >
        <h2
          className={`w-55.25 font-lexia-readable text-black text-44px text-center text-shadow-2xs leading-16 flex flex-col items-center dark:text-white-300 xl:w-full xl:text-5xl`}
        >
          Tecnologia & Design
        </h2>

        <p
          className={`w-77.5 text-4xl text-center text-shadow-2xs xl:w-119.5 xl:text-40px`}
        >
          <span className={`inline-block text-gray dark:text-white-100`}>
            União que constrói um
          </span>

          <strong
            className={`font-bold text-gray bg-linear-to-br from-light-pink-200 to-light-pink-100 box-decoration-clone leading-16.25 px-7 pt-2 pb-3 rounded-full xl:bg-[url(/assets/hearts-desktop.avif)] xl:bg-no-repeat xl:bg-position-[center_bottom] xl:bg-size-[auto_70px] xl:px-10 xl:py-3 xl:rounded-none`}
          >
            espaço digital com propósito e empatia
          </strong>
        </p>
      </div>

      <figure data-aos="fade-left">
        <Image
          src={`/assets/website-illustration.avif`}
          alt=""
          width={280}
          height={206}
          className={`filter drop-shadow xl:w-129.25 xl:h-94.75`}
          priority
          loading="eager"
        />
      </figure>
    </section>
  );
}
