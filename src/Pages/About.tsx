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
        Bonjour ! Je suis RANDRIANARISOA Zoniaina Teddy, un développeur web junior passionné par la création de sites et d’applications modernes. J’ai récemment terminé une formation en développement web, WordPress et MySQL. Mon objectif est de contribuer à des projets stimulants tout en évoluant dans le monde du développement web.
      </p>
    </section>
  );
};

export default About;
