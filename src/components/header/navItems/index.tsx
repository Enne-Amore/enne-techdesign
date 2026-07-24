import { ReactElement } from "react";
import {
  FaCircleUser,
  FaGraduationCap,
  FaMessage,
  FaSplotch,
} from "react-icons/fa6";

export interface NavItemsInterface {
  url: string;
  label: string;
  ariaLabel: string;
  icon: ReactElement;
  isMain?: boolean;
}

export default function NavItems(props: { clickLinkMobile?: () => void }) {
  // List of navigation items data
  const links: NavItemsInterface[] = [
    {
      url: "#projetos",
      ariaLabel: "Ir à seção de projetos",
      label: "Projetos",
      icon: <FaSplotch />,
    },
    {
      url: "#sobre",
      ariaLabel: "Ir à seção sobre mim",
      label: "Sobre Mim",
      icon: <FaCircleUser />,
    },
    {
      url: "#formacoes",
      ariaLabel: "Ir à seção de formações",
      label: "Formações",
      icon: <FaGraduationCap />,
    },
    {
      url: "#contatos",
      ariaLabel: "Ir à seção de contatos",
      label: "Vamos conversar",
      icon: <FaMessage className={`-mb-1`} />,
      isMain: true,
    },
  ];

  return (
    <ul
      className={`flex flex-col items-center gap-1.5 xl:flex-row xl:gap-0`}
      role="menu"
    >
      {links.map((link, index) => (
        <li
          key={index}
          role="none"
        >
          <a
            href={link.url}
            aria-label={link.ariaLabel}
            onClick={props.clickLinkMobile}
            className={`text-xl text-shadow-2xs flex items-center gap-2 py-3.5 rounded-4xl transition xl:text-2xl xl:gap-2.5 ${
              link.isMain
                ? "bg-light-purple text-white-100 px-7 mt-3.5 font-bold shadow-[0_0_2px] shadow-light-purple duration-300 ease-in-out dark:bg-light-pink-100 dark:text-gray dark:shadow-light-pink-100 hover:bg-dark-purple hover:shadow-[0_0_5px] hover:shadow-dark-purple focus-visible:bg-dark-purple focus-visible:shadow-[0_0_5px] focus-visible:shadow-dark-purple active:bg-white-300 active:text-dark-purple active:shadow-white-300 dark:hover:bg-light-pink-200 dark:hover:shadow-light-pink-200 dark:focus-visible:bg-light-pink-200 dark:focus-visible:shadow-light-pink-200 dark:active:text-light-pink-200 dark:active:bg-white-300 dark:active:shadow-white-300 xl:mt-0 xl:ml-5"
                : "font-medium text-gray px-5 ease-in dark:text-white-100 hover:text-light-purple focus-visible:text-light-purple active:text-dark-purple dark:hover:text-light-pink-100 dark:focus-visible:text-light-pink-100 dark:active:text-light-pink-200"
            }`}
            role="menuitem"
          >
            {link.icon}

            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
