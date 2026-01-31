import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  href?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageLight,
  imageDark,
  href,
}) => {
  return (
    <a
      href={href || "#"}
      target="_blank"
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
      {/* Image */}
      <div className="relative h-48 w-full">
        <img
          src={imageLight}
          alt={title}
          className="w-full h-full object-cover block dark:hidden"
        />
        <img
          src={imageDark}
          alt={title}
          className="w-full h-full object-cover hidden dark:block"
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
