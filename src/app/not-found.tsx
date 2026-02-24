"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaHouse } from "react-icons/fa6";

export default function NotFound() {
  const router = useRouter();

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className={`bg-white-100 h-screen flex flex-col items-center justify-center gap-12 dark:bg-gray xl:flex-row xl:gap-27.5`}
    >
      <figure>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`/assets/not-found${theme === "dark" ? "-dark" : "-light"}.avif`}
            width={450}
            height={300}
            type="image/avif"
          />

          <Image
            src={`/assets/not-found${theme === "dark" ? "-dark" : "-light"}.avif`}
            alt="Página não encontrada"
            width={250}
            height={166}
          />
        </picture>
      </figure>

      <div className={`space-y-8`}>
        <p className="w-70 text-xl text-center text-gray dark:text-white-100 xl:w-102 xl:text-2xl">
          Sinto muito, mas sua <strong className={`text-light-purple dark:text-light-pink-100`}>página não foi encontrada</strong>. O que deseja fazer?
        </p>

        <ul className={`flex flex-col items-center gap-5`}>
          <li>
            <Link
              href="/"
              aria-label="Voltar à página inicial do site Enne TechDesign"
              className={`bg-light-pink-100 text-black flex items-center gap-2 rounded-4xl px-6 py-3 shadow-[0_0_2px] shadow-light-pink-100 duration-300 ease-in-out dark:bg-light-purple dark:text-white-200 dark:shadow-light-purple hover:bg-light-pink-200 hover:shadow-[0_0_5px] hover:shadow-light-pink-200 dark:hover:bg-dark-purple dark:hover:shadow-dark-purple focus-visible:bg-light-pink-200 focus-visible:shadow-[0_0_5px] focus-visible:shadow-light-pink-200 dark:focus-visible:bg-dark-purple dark:focus-visible:shadow-dark-purple active:bg-white-300 active:text-dark-pink-200 active:shadow-white-300 dark:active:bg-white-300 dark:active:text-dark-purple`}
            >
              <FaHouse className={`w-6 h-auto`} />

              <span className={`font-bold text-base xl:text-xl`}>
                Ir à página inicial
              </span>
            </Link>
          </li>

          <li>
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Voltar à página que você estava antes"
              className={`bg-light-pink-100/30 text-gray border border-light-pink-100 flex items-center gap-2 rounded-4xl px-6 py-3 shadow-[0_0_2px] shadow-light-pink-100 cursor-pointer duration-300 ease-in-out dark:bg-light-purple/30 dark:text-white-100 dark:border-light-purple dark:shadow-light-purple hover:bg-light-pink-100 hover:shadow-[0_0_5px] dark:hover:bg-light-purple focus-visible:bg-light-pink-100 focus-visible:shadow-[0_0_5px] dark:focus-visible:bg-light-purple active:bg-light-pink-200 active:border-light-pink-200 active:shadow-light-pink-200 dark:active:bg-dark-purple dark:active:border-dark-purple dark:active:shadow-dark-purple`}
            >
              <FaAngleLeft className={`w-6 h-auto`} />

              <span className={`font-bold text-base xl:text-xl`}>
                Voltar à página anterior
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
