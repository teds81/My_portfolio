import useFadeIn from "../Hooks/useFadeIn";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGit, FaGithub, FaWordpress, FaFigma, FaNodeJs, FaServer, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiMysql, SiTailwindcss, SiVite, SiElementor, SiWoocommerce, SiCanva } from "react-icons/si";

const Skills = () => {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  const { ref, visible } = useFadeIn<HTMLDivElement>();

  const groups = [
    {
      label: t.groups.frontend,
      items: [
        { icon: <FaHtml5 size={32} className="text-orange-600" />, name: "HTML5", desc: t.items.html },
        { icon: <FaCss3Alt size={32} className="text-blue-600" />, name: "CSS3", desc: t.items.css },
        { icon: <FaJs size={32} className="text-yellow-400" />, name: "JavaScript", desc: t.items.js },
        { icon: <SiTypescript size={32} className="text-blue-600" />, name: "TypeScript", desc: t.items.ts },
        { icon: <FaReact size={32} className="text-blue-400" />, name: "React", desc: t.items.react },
        { icon: <SiTailwindcss size={32} className="text-teal-500" />, name: "TailwindCSS", desc: t.items.tailwind },
        { icon: <SiVite size={32} className="text-pink-500" />, name: "Vite", desc: t.items.vite },
      ],
    },
    {
      label: t.groups.backend,
      items: [
        { icon: <FaPhp size={32} className="text-purple-600" />, name: "PHP", desc: t.items.php },
        { icon: <SiMysql size={32} className="text-blue-700" />, name: "MySQL", desc: t.items.mysql },
        { icon: <FaNodeJs size={32} className="text-green-600" />, name: "Node.js", desc: t.items.node },
        { icon: <FaServer size={32} className="text-gray-800 dark:text-gray-200" />, name: "Express.js", desc: t.items.express },
        { icon: <FaDatabase size={32} className="text-yellow-600" />, name: "API REST", desc: t.items.api },
      ],
    },
    {
      label: t.groups.tools,
      items: [
        { icon: <FaWordpress size={32} className="text-blue-700" />, name: "WordPress", desc: t.items.wordpress },
        { icon: <SiElementor size={32} className="text-pink-600" />, name: "Elementor", desc: t.items.elementor },
        { icon: <SiWoocommerce size={32} className="text-purple-700" />, name: "WooCommerce", desc: t.items.woocommerce },
        { icon: <FaGit size={32} className="text-orange-500" />, name: "Git", desc: t.items.git },
        { icon: <FaGithub size={32} className="text-gray-900 dark:text-gray-100" />, name: "GitHub", desc: t.items.github },
      ],
    },
    {
      label: t.groups.design,
      items: [
        { icon: <FaFigma size={32} className="text-pink-500" />, name: "Figma", desc: t.items.figma },
        { icon: <SiCanva size={32} className="text-cyan-500" />, name: "Canva", desc: t.items.canva },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`scroll-mt-24 py-16 px-6 max-w-6xl mx-auto transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#ff6b5b] dark:text-[#34d399] mb-3">
        {t.badge}
      </span>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
        {t.title}
      </h2>

      <div className="space-y-10">
        {groups.map((group) => (
          <div key={group.label}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              {group.label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center p-4 bg-white dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700 rounded-lg hover:-translate-y-1 hover:border-[#ff6b5b] dark:hover:border-[#34d399] transition-all duration-200"
                >
                  {skill.icon}
                  <h4 className="mt-2 font-semibold text-sm text-gray-900 dark:text-white">{skill.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
