interface SectionTitleInterface {
  label: string;
  style: string;
  animation?: boolean;
}

export default function SectionTitle(props: SectionTitleInterface) {
  return (
    <h2
      {...props.animation && { "data-aos": "fade-up" }}
      className={`${props.style} text-32px text-center leading-11 font-lexia-readable flex flex-col items-center gap-6 drop-shadow xl:text-4xl xl:leading-12 xl:flex-row xl:justify-between`}
    >
      <span>♡︎</span>

      <span>{props.label}</span>

      <span>♡︎</span>
    </h2>
  );
}
