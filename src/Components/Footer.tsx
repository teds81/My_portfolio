import cv from "../assets/CV_Zoniaina_Teddy_RANDRIANARISOA.pdf";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 pt-12 pb-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          <div>
            <span className="text-[15px] font-bold text-gray-900 dark:text-white">
              RANDRIANARISOA <span className="text-[#ff6b5b] dark:text-[#34d399]">Zoniaina Teddy</span>
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 font-semibold">
              {t.footer.navHeading}
            </h5>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors">{t.nav.about}</a></li>
              <li><a href="#skills" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors">{t.nav.skills}</a></li>
              <li><a href="#projects" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors">{t.nav.projects}</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 font-semibold">
              {t.footer.linksHeading}
            </h5>
            <ul className="space-y-2">
              <li><a href="https://github.com/teds81" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/zoniaina-teddy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors">LinkedIn</a></li>
              <li><a href={cv} download className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors">{t.nav.cv}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 font-semibold">
              {t.footer.contactHeading}
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="mailto:zoniainateddy@gmail.com" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors">
                  zoniainateddy@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+261387686257" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors">
                  +261 38 76 862 57
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/261387686257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#ff6b5b] dark:hover:text-[#34d399] transition-colors"
                >
                  {t.footer.whatsapp}
                </a>
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-300">
                {t.footer.location}
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 dark:border-zinc-800 pt-5 text-center text-xs text-gray-400 dark:text-gray-500">
          © 2026 RANDRIANARISOA Zoniaina Teddy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
