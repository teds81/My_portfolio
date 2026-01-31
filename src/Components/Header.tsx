import { useState } from "react";
import logo from "../assets/logo.png";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 w-screen fixed top-0 left-0 z-50 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo + Nom */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl font-bold">
            RANDRIANARISOA <span className="text-yellow-400">Zoniaina Teddy</span>
          </h1>
        </div>



        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-blue-500 font-medium hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Bouton dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-gray-200 dark:bg-gray-800 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            className="flex flex-col md:hidden w-8 h-6 justify-between items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block h-1 w-full bg-blue-500 dark:bg-blue-400 rounded transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-1 w-full bg-blue-500 dark:bg-blue-400 rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block h-1 w-full bg-blue-500 dark:bg-blue-400 rounded transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={`md:hidden fixed top-20 right-0 h-screen w-64 bg-gray-100 dark:bg-zinc-900 flex flex-col items-start px-6 pt-6 gap-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-blue-500 font-medium hover:text-yellow-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
