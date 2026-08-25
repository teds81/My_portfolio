import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  href,
}: ProjectCardProps) => {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        block
        bg-white dark:bg-zinc-800/60
        border border-gray-200 dark:border-zinc-700
        rounded-xl
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#ff6b5b] dark:hover:border-[#34d399]
        hover:shadow-lg
      "
    >
      <div className="relative h-48 w-full bg-gray-100 dark:bg-zinc-900 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#ff6b5b] dark:text-[#34d399]">
          {t.viewProject}
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
