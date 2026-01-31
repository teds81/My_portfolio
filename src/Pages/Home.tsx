import React from "react";
import useFadeIn from "../Hooks/useFadeIn";

const Home: React.FC = () => {
  const textFade = useFadeIn<HTMLDivElement>();
  const photoFade = useFadeIn<HTMLDivElement>();

  return (
    <section className="pt-20 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

      {/* Texte */}
      <div
        ref={textFade.ref}
        className={`flex-1 space-y-6 transition-all duration-1000 ${
          textFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
          Bonjour, je suis <span className="text-yellow-400">RANDRIANARISOA Zoniaina Teddy</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
          Développeur Web Junior | Front-end & Back-end.   
          Je crée des applications modernes, intuitives et esthétiques, prêtes pour un environnement professionnel.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-blue-500 dark:bg-yellow-400 text-gray-900 px-6 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-300 px-6 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Photo */}
      <div
        ref={photoFade.ref}
        className={`flex-1 flex justify-center md:justify-end transition-all duration-1000 ${
          photoFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <img
          src="/teds.png"
          alt="Ma photo"
          className="w-48 md:w-72 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Home;
