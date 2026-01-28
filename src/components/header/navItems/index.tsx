import MoreOptions from "../menuDesktop/moreOptions";

export interface NavItemsInterface {
  url: string;
  label: string;
  ariaLabel: string;
  isMain?: boolean;
  isDesktop?: boolean;
}

export default function NavItems(props: { clickLinkMobile?: () => void }) {
  // List of navigation items data
  const links: NavItemsInterface[] = [
    {
      url: "#projetos",
      ariaLabel: "Ir à seção de projetos",
      label: "Projetos",
    },
    {
      url: "#sobre",
      ariaLabel: "Ir à seção sobre mim",
      label: "Sobre Mim",
    },
    {
      url: "#formacoes",
      ariaLabel: "Ir à seção de formações",
      label: "Formações",
      isDesktop: true,
    },
    {
      url: "#contatos",
      ariaLabel: "Ir à seção de contatos",
      label: "Contate-me",
      isMain: true,
    },
  ];

  return (
    <ul
      className={`flex flex-col items-center gap-1.5 xl:flex-row xl:gap-0`}
      role="menu"
    >
      {links.map((link, index) => (
        <>
          <li
            key={index}
            className={`py-3.5 ${link.isMain ? "mt-3.5 xl:mt-0" : ""} ${link.isDesktop ? "xl:hidden" : ""}`}
            role="none"
          >
            <a
              href={link.url}
              aria-label={link.ariaLabel}
              onClick={props.clickLinkMobile}
              className={`text-xl text-shadow-2xs py-3.5 rounded-4xl transition xl:text-2xl ${
                link.isMain
                  ? "bg-dark-pink-100 px-7 mt-3.5 font-bold shadow hover:bg-dark-pink-200 focus-visible:bg-dark-pink-200 active:bg-white-300 active:text-dark-pink-200 xl:mt-0 xl:ml-5"
                  : "font-medium px-5 hover:text-light-pink-100 focus-visible:text-light-pink-100 active:text-light-pink-200"
              }`}
              role="menuitem"
            >
              {link.label}
            </a>
          </li>

          {index === links.length - 2 && <MoreOptions />}
        </>
      ))}
    </ul>
  );
}
