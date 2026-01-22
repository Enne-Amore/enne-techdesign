interface SectionTitleInterface {
  label: string;
  style: string;
}

export default function SectionTitle(props: SectionTitleInterface) {
  return (
    <h2
      className={`${props.style} text-32px text-center text-shadow-2xs leading-11 font-lexia-readable flex flex-col items-center gap-6 xl:text-4xl xl:leading-12 xl:flex-row xl:justify-between`}
    >
      <span>♡︎</span>

      <span>{props.label}</span>

      <span>♡︎</span>
    </h2>
  );
}
