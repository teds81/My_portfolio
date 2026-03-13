import React from "react";
import useFadeIn from "../Hooks/useFadeIn";


const About: React.FC = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      className={`fade-section px-4 max-w-5xl mx-auto transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >

      <h2 className="text-3xl text-yellow-500 font-bold mb-6 border-b-2 border-yellow-500 inline-block pb-2">
        À propos de moi
      </h2>
      <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
        Bonjour ! Je suis Zoniaina Teddy RANDRIANARISOA, développeur Fullstack junior passionné par la conception d'expériences web modernes et performantes.

        Diplômé en développement web , je maîtrise l'intégralité du cycle de création, de l'interface utilisateur avec React et Tailwind à la mise en place de services back-end robustes avec Node.js, Express et API REST. Expert WordPress, je combine rigueur technique et résolution de problèmes pour transformer vos idées en solutions digitales évolutives.

        En veille technologique constante, je suis toujours en quête de nouveaux défis pour apprendre et contribuer activement au succès des projets en équipe.
      </p>
    </section>
  );
};

export default About;
