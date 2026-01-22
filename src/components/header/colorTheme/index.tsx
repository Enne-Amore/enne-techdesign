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
      className={`flex items-center mt-9 rounded-4xl shadow cursor-pointer`}
      role="radiogroup"
      aria-label="Escolha de tema de cores"
    >
      <div className={`text-light-pink-100 bg-white-100/2 border-2 border-light-pink-100 pt-3 pb-3.5 pr-4 pl-5.5 rounded-l-4xl has-checked:bg-light-pink-100 has-checked:text-gray`}>
        <input
          type="radio"
          name="theme"
          id="light"
          value="light"
          checked={resolvedTheme === "light"}
          onChange={() => setTheme("light")}
          className={`absolute w-0 h-0`}
        />

        <label
          htmlFor="light"
          title="Tema claro"
          className={`text-xl text-shadow-2xs`}
        >
          <FaSun />
        </label>
      </div>

      <div className={`text-dark-pink-100 bg-white-100/2 border-2 border-dark-pink-100 pt-3 pb-3.5 pl-4 pr-5.5 rounded-r-4xl has-checked:bg-dark-pink-100 has-checked:text-white-100`}>
        <input
          type="radio"
          name="theme"
          id="dark"
          value="dark"
          checked={resolvedTheme === "dark"}
          onChange={() => setTheme("dark")}
          className={`absolute w-0 h-0`}
        />

        <label
          htmlFor="dark"
          title="Tema escuro"
          className={`text-xl text-shadow-2xs`}
        >
          <FaMoon />
        </label>
      </div>
    </div>
  );
}
