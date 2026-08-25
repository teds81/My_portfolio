import useFadeIn from "../Hooks/useFadeIn";
import ProjectCard from "../Components/ProjectCard";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import todoC from "../assets/Todo-App-C.jpg";
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

const Projects = () => {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const { ref, visible } = useFadeIn<HTMLDivElement>();

  const projects: Project[] = [
    {
      title: "Todo App",
      description: t.items.todo,
      image: todoC,
      href: "https://teds81.github.io/Todo_app",
    },
    {
      title: lang === "fr" ? "Clonage site de voyage" : "Travel site clone",
      description: t.items.voyage,
      image: voyageC,
      href: "https://teds81.github.io/clone_Jacaranda",
    },
    {
      title: lang === "fr" ? "Site web IDEA BC" : "IDEA BC website",
      description: t.items.ideabc,
      image: ideaBC,
      href: "https://e-ideacore.com",
    },
    {
      title: lang === "fr" ? "Portfolio IDEA BC" : "IDEA BC Portfolio",
      description: t.items.portfolio,
      image: portfolio,
      href: "https://portfolio.e-ideacore.com/",
    },
    {
      title: "Soaranty",
      description: t.items.soaranty,
      image: soaranty,
      href: "https://soaranty-srty.com",
    },
  ];

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
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
