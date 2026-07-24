"use client";

import SectionTitle from "@/components/sectionTitle";
import { PopupButton } from "@typeform/embed-react";
import { FaWpforms } from "react-icons/fa6";

export default function Form() {
  return (
    <article
      data-aos="fade-right"
      className={`relative flex flex-col items-center gap-8`}
    >
      <SectionTitle
        label={`Será uma alegria enorme te ajudar com o que precisa!`}
        style={`text-black dark:text-white-300 xl:w-[600px]`}
      />

      <div className={`flex flex-col items-center gap-2`}>
        <PopupButton
          id="QKEK3k3Z"
          size={90}
          hidden={{
            foo: "Foo Value",
            bar: "Bar Value",
          }}
          onReady={() => {
            console.log("form ready");
          }}
          enableSandbox
          transitiveSearchParams
          autoClose={10000}
          className={`w-max bg-light-purple text-xl text-shadow-2xs font-bold flex items-center gap-2 px-8 py-3.5 rounded-4xl cursor-pointer shadow-[0_0_2px] shadow-light-purple transition duration-300 ease-in-out dark:border dark:border-dark-purple hover:bg-dark-purple hover:shadow-[0_0_5px] hover:shadow-dark-purple focus-visible:bg-dark-purple focus-visible:shadow-[0_0_5px] focus-visible:shadow-dark-purple active:bg-white-300 active:text-dark-purple active:shadow-white-300 dark:active:border-white-300 xl:text-2xl`}
        >
          <FaWpforms className={`w-7 h-auto`} />

          <span>Vamos conversar</span>
        </PopupButton>

        <span className={`text-gray text-sm text-shadow-2xs dark:text-white-100 xl:text-base`}>
          Leva de 1 a 3 minutos
        </span>
      </div>
    </article>
  );
}
