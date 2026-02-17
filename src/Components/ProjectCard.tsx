import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  href,
}) => {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        bg-gray-100 dark:bg-zinc-900
        border border-gray-200 dark:border-zinc-700
        rounded-xl
        overflow-hidden
        shadow-sm
        transition
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* Image avec fond visible en mode sombre */}
      <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800/50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
