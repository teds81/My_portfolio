import React from "react";
import useFadeIn from "../Hooks/useFadeIn";
import ProjectCard from "../Components/ProjectCard";
import todoC from "../assets/Todo-App-C.png";
import voyageC from "../assets/voyage-C.png";
import Kymco from "../assets/kymco.png";

interface Project {
  title: string;
  description: string;
  image: string;
  href?: string;
}

const Projects: React.FC = () => {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  const projects: Project[] = [
    {
      title: "Todo App",
      description: "Une application interactive pour gérer les tâches quotidiennes.",
      image: todoC,
      href: "https://teds81.github.io/Todo_app",
    },
    {
      title: "Clonage site de voyage",
      description: "Clonage d’un site avec responsive design.",
      image: voyageC,
      href: "https://teds81.github.io/clone_Jacaranda",
    },
    {
      title: "Site web de Kymco",
      description: "Site web vitrine interactif pour kymco.",
      image: Kymco,
      href: "https://kymco.mg",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`fade-section pt-12 pb-16 px-4 max-w-5xl mx-auto transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-3xl text-yellow-500 font-bold mb-6 border-b-2 border-yellow-500 inline-block pb-2">
        Mes projets
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
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
