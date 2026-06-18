"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ColorTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className={`relative flex items-center rounded-4xl shadow`}
      role="radiogroup"
      aria-label="Escolha de tema de cores"
    >
      <div
        className={`text-light-pink-100 bg-white-100/5 border-2 rounded-l-4xl has-checked:bg-dark-pink-100 has-checked:text-gray has-checked:border-dark-pink-100`}
      >
        <input
          type="radio"
          name="theme"
          id="light"
          value="light"
          checked={resolvedTheme === "light"}
          onChange={() => setTheme("light")}
          className={`sr-only`}
        />

        <label
          htmlFor="light"
          title="Tema claro"
          aria-label="Alterar tema de cores para claro"
          className={`flex content-center text-lg text-shadow-2xs pt-2.5 pb-3 pr-3 pl-4.5 rounded-l-4xl cursor-pointer duration-200 hover:bg-light-pink-100/5 xl:text-xl xl:pt-3 xl:pb-3.5 xl:pr-4 xl:pl-5.5`}
          tabIndex={0}
          onKeyDown={(tecla) => {
            if (tecla.key == "Enter") {
              setTheme("light");
            }
          }}
        >
          <FaSun />
        </label>
      </div>

      <div
        className={`text-light-purple bg-white-100/5 border-2 rounded-r-4xl has-checked:bg-dark-pink-100 has-checked:text-gray has-checked:border-dark-pink-100`}
      >
        <input
          type="radio"
          name="theme"
          id="dark"
          value="dark"
          checked={resolvedTheme === "dark"}
          onChange={() => setTheme("dark")}
          className={`sr-only`}
        />

        <label
          htmlFor="dark"
          title="Tema escuro"
          aria-label="Alterar tema de cores para escuro"
          className={`flex content-center text-lg text-shadow-2xs pt-2.5 pb-3 pl-3 pr-4.5 rounded-r-4xl cursor-pointer duration-200 hover:bg-light-purple/5 xl:text-xl xl:pt-3 xl:pb-3.5 xl:pl-4 xl:pr-5.5`}
          tabIndex={0}
          onKeyDown={(tecla) => {
            if (tecla.key == "Enter") {
              setTheme("dark");
            }
          }}
        >
          <FaMoon />
        </label>
      </div>
    </div>
  );
}
