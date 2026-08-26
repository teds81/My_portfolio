import { useState } from "react";
import { createPortal } from "react-dom";
import logo from "../assets/logo.png";
import cv from "../assets/CV_Zoniaina_Teddy_RANDRIANARISOA.pdf";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
};

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const { lang } = useLanguage();
  const t = translations[lang].nav;

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: t.home },
    { href: "#about", label: t.about },
    { href: "#skills", label: t.skills },
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3.5">

        <a href="#home" className="flex items-center gap-1.5">
          <img src={logo} alt="Logo" className="w-18 h-9 rounded-full" />
          <span className="text-[15px] font-bold text-gray-900 dark:text-white">
            RANDRIANARISOA <span className="text-[#ff6b5b] dark:text-[#34d399]">Zoniaina Teddy</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-[14px] font-medium text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href={cv}
            download
            className="bg-[#ff6b5b] dark:bg-[#34d399] text-white dark:text-[#052e21] px-5 py-2 rounded font-semibold text-[13px] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 inline-flex items-center gap-1.5"
          >
            {t.cv}
          </a>
        </nav>

        {/* Actions mobile — toujours visibles, hors hamburger */}
        <div className="flex items-center gap-2.5 md:hidden">
          <LanguageSwitcher />

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-gray-100 dark:bg-zinc-800 transition text-sm"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="flex flex-col w-7 h-5 justify-between items-center relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-full bg-gray-900 dark:bg-white rounded transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-full bg-gray-900 dark:bg-white rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block h-0.5 w-full bg-gray-900 dark:bg-white rounded transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:block p-2 rounded bg-gray-100 dark:bg-zinc-800 transition text-sm ml-3"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/*
        Overlay + menu mobile rendus via Portal directement dans <body>.
        Raison : le <header> a "backdrop-blur-md" (backdrop-filter), qui crée
        un containing block pour ses descendants en position:fixed. Sans le
        Portal, l'overlay et le nav restent coincés dans la petite boîte du
        header au lieu de couvrir tout l'écran — d'où l'overlay invisible et
        le clic qui ne fermait rien.
      */}
      {createPortal(
        <>
          <div
            onClick={() => setIsOpen(false)}
            className={`md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden="true"
          ></div>

          <nav
            className={`md:hidden fixed top-15 right-0 h-screen w-64 bg-white dark:bg-zinc-900 border-l border-gray-200 dark:border-zinc-800 flex flex-col items-start px-6 pt-6 gap-5 transform transition-transform duration-300 z-50 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[14px] font-medium text-gray-700 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={cv}
              download
              onClick={() => setIsOpen(false)}
              className="bg-[#ff6b5b] dark:bg-[#34d399] text-white dark:text-[#052e21] px-5 py-2.5 rounded font-semibold text-[13px] w-full text-center mt-2"
            >
              {t.cv}
            </a>
          </nav>
        </>,
        document.body
      )}
    </header>
  );
};

export default Header;
