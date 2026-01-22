import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className={`w-[330px] flex flex-col-reverse items-center gap-12 xl:w-[1078px] xl:flex-row xl:justify-between`}
    >
      <div className={`flex flex-col items-center gap-8`}>
        <h2
          className={`font-lexia-readable text-44px text-center text-shadow-2xs leading-14 flex flex-col items-center xl:text-5xl`}
        >
          <span className={`text-black dark:text-white-200`}>Venha conhecer</span>

          <span
            className={`bg-clip-text text-transparent bg-gradient-to-br from-dark-purple to-light-purple dark:text-light-purple`}
          >
            os meus trabalhos
          </span>
        </h2>

        <div
          className={`font-medium text-gray text-base text-shadow-2xs flex flex-col gap-6 xl:text-xl`}
        >
          <span
            className={`w-max bg-gradient-to-br from-light-pink-200 to-light-pink-100 shadow px-7 py-3.5 rounded-4xl -translate-x-5 xl:-translate-x-10`}
            lang="en"
          >
            UI/UX Design
          </span>

          <span
            className={`w-max bg-gradient-to-br from-light-pink-200 to-light-pink-100 shadow px-7 py-3.5 rounded-4xl translate-x-5 xl:translate-x-10`}
          >
            Desenvolvimento <span lang="en">Front-end</span>
          </span>
        </div>
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
