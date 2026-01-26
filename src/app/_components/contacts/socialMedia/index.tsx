import SocialNetworks from "@/components/socialNetworks";

export default function SocialMedia() {
  return (
    <article
      className={`relative flex flex-col items-center gap-5 mx-auto xl:w-[420px]`}
    >
      <h3
        className={`text-gray text-28px text-center text-shadow-2xs leading-10 font-lexia-readable flex flex-col items-center gap-6 xl:w-[584px] xl:text-32px xl:leading-11 xl:flex-row xl:justify-between`}
      >
        <span>♡︎</span>

        <span>Caso prefira, pode me contatar através das redes sociais</span>

        <span>♡︎</span>
      </h3>

      <SocialNetworks socialNetworkStyle={`bg-white-200 text-light-purple border-light-purple hover:bg-light-purple hover:text-white-200 focus-visible:bg-light-purple focus-visible:text-white-200 active:bg-dark-purple`} />
    </article>
  );
}
