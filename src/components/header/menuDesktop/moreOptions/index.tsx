import { FaAngleDown } from "react-icons/fa6";
import { NavItemsInterface } from "../../navItems";
import ColorTheme from "../../colorTheme";

export default function MoreOptions() {
  const moreLinks: NavItemsInterface[] = [
    {
      url: "#formacoes",
      ariaLabel: "Ir à seção de formações",
      label: "Formações",
      isDesktop: true,
    },
  ];

  return (
    <li className={`relative hidden group xl:flex`} role="none">
      <button
        role="menuitem"
        aria-label="Abrir mais opções de menu"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="dropdown-content"
        type="button"
        className={`px-5 py-3.5 duration-200 group-hover:text-light-pink-100 group-focus-within:text-light-pink-100`}
      >
        <FaAngleDown
          className={`w-9 h-auto duration-500 group-hover:rotate-180 group-focus-within:rotate-180`}
        />
      </button>

      <ul
        className={`absolute top-full -right-10/12 opacity-0 -translate-y-2 bg-radial from-light-purple to-dark-purple flex flex-col items-center rounded-4xl px-5 pt-0 pb-7 mt-1 shadow transition-all duration-200 z-50 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0`}
        role="menu"
      >
        {moreLinks.map((link, index) => (
          <li key={index} className={`py-7`} role="none">
            <a
              href={link.url}
              aria-label={link.ariaLabel}
              className={`text-2xl font-medium px-5 py-7 hover:text-light-pink-100 focus-visible:text-light-pink-100 active:text-light-pink-200`}
              role="menuitem"
            >
              {link.label}
            </a>
          </li>
        ))}

        <li role="none">
          <ColorTheme />
        </li>
      </ul>
    </li>
  );
}
