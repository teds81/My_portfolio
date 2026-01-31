import React from "react";
import useFadeIn from "../Hooks/useFadeIn";
import ProjectCard from "../Components/ProjectCard";
import shopC from  "../assets/shop-C.png";
import shopS from  "../assets/shop-S.png";
import todoC from  "../assets/Todo-App-C.png";
import todoS from  "../assets/Todo-App-S.png";
import voyageC from  "../assets/voyage-C.png";
import voyageS from  "../assets/voyage-S.png";

const Projects: React.FC = () => {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  const projects = [
    {
      title: "Todo App",
      description: "Une application interactive pour gérer les tâches quotidiennes.",
      imageLight: todoC,
      imageDark: todoS,
      href: "https://teds81.github.io/Todo_app"
    },
    {
      title: "Clonage site de voyage",
      description: "Clonage d’un site avec responsive design.",
      imageLight: voyageC,
      imageDark: voyageS,
    },
    {
      title: "Site e-commerce",
      description: "Site de tendances masculine et féminine.",
      imageLight: shopC,
      imageDark: shopS,
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
            imageLight={project.imageLight}
            imageDark={project.imageDark}
            href={project.href}
          />
        ))}
      </div>
    </section>

  );
};

export default Projects;
