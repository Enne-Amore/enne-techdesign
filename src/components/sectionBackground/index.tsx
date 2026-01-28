"use client"

import { useTheme } from "next-themes";
import Image from "next/image";

interface SectionBackgroundInterface {
  src: string;
  mobileHeight: number;
  desktopHeight: number;
  noShadow?: boolean;
  darkMode?: boolean;
}

export default function SectionBackground(props: SectionBackgroundInterface) {
  const { theme } = useTheme();
  const isDark = props.darkMode && theme === "dark";

  return (
    <picture
      className={`absolute top-0 bottom-0 left-0 right-0 select-none pointer-events-none`}
    >
      <source
        media="(min-width: 1280px)"
        srcSet={`/assets/${props.src}-${isDark ? 'dark-' : ''}background-desktop.png`}
        width={1280}
        height={props.desktopHeight}
        className={``}
      />

      <Image
        src={`/assets/${props.src}-${isDark ? 'dark-' : ''}background-mobile.png`}
        alt={``}
        width={375}
        height={props.mobileHeight}
        aria-hidden="true"
        className={`w-full h-full ${props.noShadow ? '' : 'filter drop-shadow'}`}
      />
    </picture>
  );
}
