"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import NavItems from "@/components/header/navItems";
import ColorTheme from "../colorTheme";
import Image from "next/image";

export default function MenuDialogMobile() {
  // State to control the dialog visibility
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Button movement when clicked
  const [btn, setBtn] = useState<string>(`rotate-0`);

  return (
    <nav className={`relative h-[54px] xl:hidden`}>
      <button
        type="button"
        aria-label="Abrir menu de navegação"
        onClick={() => {
          setIsOpen(true);
          setBtn(`rotate-[360deg] border`);
        }}
      >
        <Image
          src={`assets/menu-icon.svg`}
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

        <div className={`fixed inset-0 flex w-screen justify-end`}>
          <DialogPanel
            transition
            className={`bg-radial from-light-purple to-dark-purple p-8 flex flex-col items-center transition duration-300 ease-out delay-75 data-closed:translate-x-4 data-closed:opacity-0`}
          >
            <DialogTitle
              className={`font-lexia-readable text-28px text-shadow-2xs`}
              as="h2"
            >
              Navegação
            </DialogTitle>

            <hr
              className={`w-full rounded border-3 border-white mt-2 mb-3.5 shadow`}
            />

            <NavItems
              clickLinkMobile={() => {
                setIsOpen(false);
                setBtn(`rotate-0`);
              }}
            />

            <ColorTheme />
          </DialogPanel>
        </div>
      </Dialog>
    </nav>
  );
}
