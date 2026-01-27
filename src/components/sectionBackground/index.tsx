import Image from "next/image";

interface SectionBackgroundInterface {
  src: string;
  mobileHeight: number;
  desktopHeight: number;
  noShadow?: boolean;
  darkMode?: boolean;
}

export default function SectionBackground(props: SectionBackgroundInterface) {
  return (
    <picture
      className={`absolute top-0 bottom-0 left-0 right-0 select-none pointer-events-none filter drop-shadow`}
    >
      <source
        media="(min-width: 1280px)"
        srcSet={`/assets/${props.src}-background-desktop.png`}
        width={1280}
        height={props.desktopHeight}
      />

      {props.darkMode && (
        <>
          <source
            media="(prefers-color-scheme: dark) and (min-width: 1280px)"
            srcSet={`/assets/${props.src}-dark-background-desktop.png`}
            width={1280}
            height={props.desktopHeight}
          />

          <source
            media="(prefers-color-scheme: dark)"
            srcSet={`/assets/${props.src}-dark-background-mobile.png`}
            width={375}
            height={props.mobileHeight}
          />
        </>
      )}

      <Image
        src={`/assets/${props.src}-background-mobile.png`}
        alt={``}
        width={375}
        height={props.mobileHeight}
        aria-hidden="true"
        className={`w-full h-full ${props.noShadow ? '' : 'filter drop-shadow'}`}
      />
    </picture>
  );
}
