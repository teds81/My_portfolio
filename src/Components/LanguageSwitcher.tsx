import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Changer de langue / Switch language"
      className="
        flex items-center gap-1.5 rounded-full
        border border-gray-300 dark:border-zinc-700
        px-3 py-1.5 text-xs font-semibold
        text-gray-500 dark:text-gray-400
        transition-all duration-200
        hover:border-yellow-400 hover:text-gray-900 dark:hover:text-white
      "
    >
      <span className={lang === "fr" ? "text-yellow-500" : ""}>FR</span>
      <span className="text-gray-300 dark:text-zinc-600">/</span>
      <span className={lang === "en" ? "text-yellow-500" : ""}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
