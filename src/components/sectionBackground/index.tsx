"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SectionBackgroundInterface {
  src: string;
  mobileHeight: number;
  desktopHeight: number;
  noShadow?: boolean;
  darkMode?: boolean;
  priority?: boolean;
}

export default function SectionBackground(props: SectionBackgroundInterface) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = props.darkMode && resolvedTheme === "dark";

  return (
    <picture
      className={`absolute top-0 bottom-0 left-0 right-0 select-none pointer-events-none`}
    >
      <source
        media="(min-width: 1280px)"
        srcSet={`/assets/${props.src}-${isDark ? "dark-" : ""}background-desktop.avif`}
        width={1280}
        height={props.desktopHeight}
      />

      <Image
        key={resolvedTheme}
        src={`/assets/${props.src}-${isDark ? "dark-" : ""}background-mobile.avif`}
        alt={``}
        width={375}
        height={props.mobileHeight}
        aria-hidden="true"
        className={`w-full h-full ${props.noShadow ? "" : "filter drop-shadow"}`}
        priority={props.priority ? true : false}
        loading={props.priority ? "eager" : "lazy"}
      />
    </picture>
  );
}
