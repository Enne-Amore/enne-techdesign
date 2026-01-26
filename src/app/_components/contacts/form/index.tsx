"use client";

import SectionTitle from "@/components/sectionTitle";
import { PopupButton } from "@typeform/embed-react";
import { FaWpforms } from "react-icons/fa6";

export default function Form() {
  return (
    <article className={`relative flex flex-col items-center gap-8`}>
      <SectionTitle
        label={`Será uma alegria enorme te ajudar com o que precisa!`}
        style={`text-black xl:w-[584px]`}
      />

      <div className={`flex flex-col items-center gap-2`}>
        <PopupButton
          id="QKEK3k3Z"
          size={90}
          hidden={{
            foo: 'Foo Value',
            bar: 'Bar Value',
          }}
          onReady={() => {
            console.log('form ready')
          }}
          enableSandbox
          transitiveSearchParams
          autoClose={10000}
          className={`w-max bg-light-purple text-xl text-shadow-2xs font-bold flex items-center gap-2 px-8 py-3.5 rounded-4xl shadow cursor-pointer duration-200 hover:bg-dark-purple active:bg-white-300 active:text-dark-purple xl:text-2xl`}
        >
          <FaWpforms className={`w-7 h-auto`} />
          <span>Contate-me</span>
        </PopupButton>

        <span className={`text-gray text-sm text-shadow-2xs xl:text-base`}>Leva de 1 a 3 minutos</span>
      </div>
    </article>
  );
}
