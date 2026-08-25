import { useState, type FormEvent } from "react";
import useFadeIn from "../Hooks/useFadeIn";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const { ref, visible } = useFadeIn<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xpqrwzaq", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert(t.error);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`scroll-mt-24 py-16 px-6 max-w-6xl mx-auto transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#ff6b5b] dark:text-[#34d399] mb-3">
        {t.badge}
      </span>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 p-6 rounded-xl">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col text-gray-900 dark:text-gray-100 font-medium text-sm">
              {t.labels.name}
              <input
                type="text"
                name="name"
                className="mt-1.5 p-3 rounded border border-gray-300 dark:border-zinc-700
                  bg-gray-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff6b5b] dark:focus:ring-[#34d399] transition"
                required
              />
            </label>

            <label className="flex flex-col text-gray-900 dark:text-gray-100 font-medium text-sm">
              {t.labels.email}
              <input
                type="email"
                name="email"
                className="mt-1.5 p-3 rounded border border-gray-300 dark:border-zinc-700
                  bg-gray-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff6b5b] dark:focus:ring-[#34d399] transition"
                required
              />
            </label>

            <label className="flex flex-col text-gray-900 dark:text-gray-100 font-medium text-sm">
              {t.labels.message}
              <textarea
                name="message"
                rows={5}
                className="mt-1.5 p-3 rounded border border-gray-300 dark:border-zinc-700
                  bg-gray-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff6b5b] dark:focus:ring-[#34d399] transition resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-[#ff6b5b] dark:bg-[#34d399] text-white dark:text-[#052e21] font-semibold py-3 rounded hover:opacity-90 transition mt-2"
            >
              {t.submit}
            </button>

            {submitted && (
              <p className="text-[#ff6b5b] dark:text-[#34d399] mt-2 font-medium text-sm">
                {t.success}
              </p>
            )}
          </form>
        </div>

        <div className="flex-1 flex flex-col gap-4 justify-start">
          <div className="flex items-center gap-3 bg-white dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-lg p-4">
            <MdEmail className="text-[#ff6b5b] dark:text-[#34d399] shrink-0" size={22} />
            <span className="text-sm text-gray-700 dark:text-gray-300">{t.info.email} zoniainateddy@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-lg p-4">
            <MdPhone className="text-[#ff6b5b] dark:text-[#34d399] shrink-0" size={22} />
            <span className="text-sm text-gray-700 dark:text-gray-300">{t.info.phone} +261 38 76 862 57</span>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-lg p-4">
            <MdLocationOn className="text-[#ff6b5b] dark:text-[#34d399] shrink-0" size={22} />
            <span className="text-sm text-gray-700 dark:text-gray-300">Lot II J 91 L A bis Ivandry, Antananarivo</span>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-lg p-4">
            <FaLinkedin className="text-[#ff6b5b] dark:text-[#34d399] shrink-0" size={22} />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {t.info.linkedin}{" "}
              <a
                href="https://www.linkedin.com/in/zoniaina-teddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff6b5b] dark:text-[#34d399] font-medium hover:underline"
              >
                {t.info.linkedinCta}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-lg p-4">
            <FaGithub className="text-[#ff6b5b] dark:text-[#34d399] shrink-0" size={22} />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {t.info.github}{" "}
              <a
                href="https://github.com/teds81"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff6b5b] dark:text-[#34d399] font-medium hover:underline"
              >
                {t.info.githubCta}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
