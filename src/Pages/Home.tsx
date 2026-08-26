import useFadeIn from "../Hooks/useFadeIn";
import img from "../assets/teds.png";
import cv from "../assets/CV_Zoniaina_Teddy_RANDRIANARISOA.pdf";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Home = () => {
  const { lang } = useLanguage();
  const t = translations[lang].home;

  const { ref: textRef, visible: textVisible } = useFadeIn<HTMLDivElement>();
  const { ref: photoRef, visible: photoVisible } = useFadeIn<HTMLDivElement>();

  return (
    <section
      id="home"
      className="pt-32 pb-16 px-6 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">

        <div
          ref={textRef}
          className={`flex-1 space-y-6 transition-all duration-1000 ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#ff6b5b] dark:text-[#34d399]">
            {t.badge}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {t.greeting} <span className="text-[#ff6b5b] dark:text-[#34d399]">RANDRIANARISOA Zoniaina Teddy</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-lg">
            <span className="font-semibold text-gray-900 dark:text-white">{t.role1}</span> &{" "}
            <span className="font-semibold text-gray-900 dark:text-white">{t.role2}</span>
            {t.tagline}
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="bg-[#ff6b5b] dark:bg-[#34d399] text-white dark:text-[#052e21] px-6 py-3 rounded font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all"
            >
              {t.ctaProjects}
            </a>
            <a
              href={cv}
              download
              className="border border-[#ff6b5b] dark:border-[#34d399] text-[#ff6b5b] dark:text-[#34d399] px-6 py-3 rounded font-semibold text-sm hover:bg-[#ff6b5b]/10 dark:hover:bg-[#34d399]/10 transition-all"
            >
              {t.ctaCV}
            </a>
            <a
              href="#contact"
              className="border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded font-semibold text-sm hover:border-gray-400 dark:hover:border-zinc-600 transition-all"
            >
              {t.ctaContact}
            </a>
          </div>
        </div>

        <div
          ref={photoRef}
          className={`flex-1 flex justify-center md:justify-end transition-all duration-1000 ${
            photoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <img
              src={img}
              alt="Ma photo"
              className="w-52 md:w-72 rounded-2xl shadow-xl object-cover"
            />

            <div className="absolute -bottom-6 -left-8 w-40 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg p-3.5 rotate-[-4deg]">
              <div className="text-[#ff6b5b] dark:text-[#34d399] text-lg mb-1">{"</>"}</div>
              <div className="text-xs font-semibold text-gray-900 dark:text-white">{t.cardDev.title}</div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400">{t.cardDev.sub}</div>
            </div>

            <div className="absolute -top-10 -right-20 md:-right-8 w-36 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg p-3.5 rotate-[5deg]">
              <div className="text-[#ff6b5b] dark:text-[#34d399] text-lg mb-1">◎</div>
              <div className="text-xs font-semibold text-gray-900 dark:text-white">{t.cardDesign.title}</div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400">{t.cardDesign.sub}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
