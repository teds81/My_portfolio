import React from "react";
import useFadeIn from "../Hooks/useFadeIn";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGit, FaGithub, FaWordpress, FaFigma } from "react-icons/fa";
import { SiTypescript, SiMysql, SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={40} className="text-orange-600" />, name: "HTML5", desc: "Structure et sémantique web" },
  { icon: <FaCss3Alt size={40} className="text-blue-600" />, name: "CSS3", desc: "Styles modernes et responsive" },
  { icon: <FaJs size={40} className="text-yellow-400" />, name: "JavaScript", desc: "Interactivité et DOM" },
  { icon: <FaReact size={40} className="text-blue-400" />, name: "React", desc: "SPA et composants" },
  { icon: <SiTypescript size={40} className="text-blue-600" />, name: "TypeScript", desc: "Typage sécurisé" },
  { icon: <SiTailwindcss size={40} className="text-teal-500" />, name: "TailwindCSS", desc: "UI moderne et rapide" },
  { icon: <SiVite size={40} className="text-pink-500" />, name: "Vite", desc: "Build tool ultra-rapide" }, // Ajout de Vite
  { icon: <FaPhp size={40} className="text-purple-600" />, name: "PHP", desc: "Back-end web" },
  { icon: <SiMysql size={40} className="text-blue-700" />, name: "MySQL", desc: "Base de données" },
  { icon: <FaGit size={40} className="text-orange-500" />, name: "Git", desc: "Gestion de version" },
  { icon: <FaGithub size={40} className="text-gray-900 dark:text-gray-100" />, name: "GitHub", desc: "Dépôts et projets" },
  { icon: <FaWordpress size={40} className="text-blue-700" />, name: "WordPress", desc: "CMS & sites web" },
  { icon: <FaFigma size={40} className="text-pink-500" />, name: "Figma", desc: "Design UI/UX" },
];

const Skills: React.FC = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      className={`fade-section py-16 px-4 max-w-5xl mx-auto transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } text-gray-900 dark:text-gray-100`}
    >
      <h2 className="text-3xl text-yellow-500 font-bold mb-8 border-b-2 border-yellow-500 inline-block pb-2">
        Compétences techniques
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-200 dark:bg-zinc-800 rounded-lg shadow-md text-center hover:-translate-y-1 hover:shadow-lg"
          >
            {skill.icon}
            <h3 className="mt-2 font-bold">{skill.name}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
