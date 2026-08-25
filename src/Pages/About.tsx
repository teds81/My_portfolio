import useFadeIn from "../Hooks/useFadeIn";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const About = () => {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  const { ref, visible } = useFadeIn<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`scroll-mt-24 px-6 max-w-6xl mx-auto py-16 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#ff6b5b] dark:text-[#34d399] mb-3">
        {t.badge}
      </span>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-start">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t.greeting}{" "}
          <span className="font-semibold text-gray-900 dark:text-white">{t.role1}</span> &{" "}
          <span className="font-semibold text-gray-900 dark:text-white">{t.role2}</span>
          {t.paragraph1} <br /><br />

          {t.paragraph2}<br /><br />

          {t.paragraph3}
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-[#ff6b5b] dark:text-[#34d399]">1</div>
            <div className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400 mt-1">{t.stats.experience}</div>
          </div>
          <div className="bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-[#ff6b5b] dark:text-[#34d399]">4+</div>
            <div className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400 mt-1">{t.stats.projects}</div>
          </div>
          <div className="bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-[#ff6b5b] dark:text-[#34d399]">40%</div>
            <div className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400 mt-1">{t.stats.speed}</div>
          </div>
          <div className="bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-[#ff6b5b] dark:text-[#34d399]">3</div>
            <div className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400 mt-1">{t.stats.languages}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
