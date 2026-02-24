import SocialNetworks from "@/components/socialNetworks";

export default function SocialMedia() {
  return (
    <article
      data-aos="fade-left"
      className={`relative flex flex-col items-center gap-5 mx-auto xl:w-105`}
    >
      <h3
        className={`text-gray text-28px text-center text-shadow-2xs leading-10 font-lexia-readable flex flex-col items-center gap-6 dark:text-white-200 xl:w-146 xl:text-32px xl:leading-11 xl:flex-row xl:justify-between`}
      >
        <span>♡︎</span>

        <span>Caso prefira, pode me contatar através das redes sociais</span>

        <span>♡︎</span>
      </h3>

      <SocialNetworks
        socialNetworkStyle={`bg-white-200 text-light-purple border-light-purple shadow-[0_0_2px] shadow-light-purple dark:bg-white-200/10 dark:text-light-pink-100 dark:border-light-pink-100 dark:shadow-light-pink-100 hover:bg-light-purple hover:text-white-200 hover:shadow-[0_0_5px] dark:hover:bg-light-pink-100 dark:hover:text-gray focus-visible:bg-light-purple focus-visible:text-white-200 focus-visible:shadow-[0_0_5px] dark:focus-visible:bg-light-pink-100 dark:focus-visible:text-gray active:bg-dark-purple active:shadow-dark-purple dark:active:bg-light-pink-200 dark:active:shadow-light-pink-200`}
      />
    </article>
  );
}
