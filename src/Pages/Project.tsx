import { useState } from "react";
import useFadeIn from "../Hooks/useFadeIn";
import ProjectCard from "../Components/ProjectCard";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import todoC from "../assets/Todo-App-C.jpg";
import inda from "../assets/inda.webp";
import imgam from "../assets/imgam.jpeg";
import ctmotors from "../assets/ctmotors.webp";
import voyageC from "../assets/voyage-C.jpg";
import ideaBC from "../assets/idea.jpeg";
import soaranty from "../assets/soaranty.webp";
import portfolio from "../assets/Portfolio_IDEA.jpg";

interface Project {
  title: string;
  description: string;
  image: string;
  href?: string;
}

const INITIAL_COUNT = 3;

const Projects = () => {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const [showAll, setShowAll] = useState(false);

  const { ref, visible } = useFadeIn<HTMLDivElement>();

  const projects: Project[] = [
    {
      title: lang === "fr" ? "Site web IDEA BC" : "IDEA BC website",
      description: t.items.ideabc,
      image: ideaBC,
      href: "https://e-ideacore.com",
    },
    {
      title: "IMGAM",
      description: t.items.imgam,
      image: imgam,
      href: "https://imgam.mg",
    },
    {
      title: "Soaranty",
      description: t.items.soaranty,
      image: soaranty,
      href: "https://soaranty-srty.com",
    },
    {
      title: "INDA CLUB",
      description: t.items.indaClub,
      image: inda,
      href: "https://inda-club.vercel.app/",
    },
    {
      title: "CT Motors",
      description: t.items.ctmotors,
      image: ctmotors,
      href: "https://ctmotors.mg",
    },
    {
      title: lang === "fr" ? "Clonage site de voyage" : "Travel site clone",
      description: t.items.voyage,
      image: voyageC,
      href: "https://teds81.github.io/clone_Jacaranda",
    },
    {
      title: lang === "fr" ? "Portfolio IDEA BC" : "IDEA BC Portfolio",
      description: t.items.portfolio,
      image: portfolio,
      href: "https://portfolio.e-ideacore.com/",
    },
    {
      title: "Todo App",
      description: t.items.todo,
      image: todoC,
      href: "https://teds81.github.io/Todo_app",
    },
  ];

  const displayedProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_COUNT);

  return (
    <section
      id="projects"
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            href={project.href}
          />
        ))}
      </div>

      {projects.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="
              px-6 py-2.5 rounded-lg text-sm font-semibold
              border border-gray-300 dark:border-zinc-600
              text-gray-800 dark:text-gray-100
              transition-all duration-300
              hover:border-[#ff6b5b] dark:hover:border-[#34d399]
              hover:text-[#ff6b5b] dark:hover:text-[#34d399]
            "
          >
            {showAll ? t.showLess : t.showMore}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
