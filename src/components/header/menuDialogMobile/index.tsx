"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import NavItems from "@/components/header/navItems";
import Image from "next/image";

export default function MenuDialogMobile() {
  // State to control the dialog visibility
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Button movement when clicked
  const [btn, setBtn] = useState<string>(`rotate-0`);

  // Icon color
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className={`relative h-13.5 xl:hidden`}>
      <button
        type="button"
        aria-label="Abrir menu de navegação"
        onClick={() => {
          setIsOpen(true);
          setBtn(`rotate-[360deg] border`);
        }}
      >
        <Image
          src={`assets/menu-icon-${resolvedTheme === "light" ? "light" : "dark"}.svg`}
          alt={`Ícone de menu de navegação`}
          width={62}
          height={54}
          className={`filter drop-shadow rounded-t-2xl rounded-b-4xl ${btn} p-1 duration-1000`}
        />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setBtn(`rotate-0`);
        }}
        className={`relative z-50`}
      >
        <DialogBackdrop
          transition
          className={`fixed inset-0 bg-gray/60 transition duration-200 ease-out delay-75 data-closed:opacity-0`}
        />

        <div className={`fixed inset-0 w-screen h-max flex justify-end`}>
          <DialogPanel
            transition
            className={`bg-radial from-light-pink-100 to-light-pink-200 p-8 pb-10 flex flex-col items-center rounded-bl-4xl transition duration-300 ease-out delay-75 data-closed:translate-x-4 data-closed:opacity-0 dark:from-light-purple dark:to-dark-purple`}
          >
            <DialogTitle
              className={`font-bold text-gray text-28px text-shadow-2xs dark:text-white-100`}
              as="h2"
            >
              Seções da página
            </DialogTitle>

            <hr
              className={`w-full rounded border-3 border-gray mt-2 mb-3.5 shadow dark:border-white-100`}
            />

            <NavItems
              clickLinkMobile={() => {
                setIsOpen(false);
                setBtn(`rotate-0`);
              }}
            />
          </DialogPanel>
        </div>
      </Dialog>
    </nav>
  );
}
