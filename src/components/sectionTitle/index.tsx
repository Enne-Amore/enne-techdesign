interface SectionTitleInterface {
  label: string;
  style: string;
}

export default function SectionTitle(props: SectionTitleInterface) {
  return (
    <h2
      className={`${props.style} text-center font-lexia-readable flex flex-col items-center gap-6 xl:flex-row xl:gap-5`}
    >
      <span>♡︎</span>

      <span>{props.label}</span>

      <span>♡︎</span>
    </h2>
  );
}
