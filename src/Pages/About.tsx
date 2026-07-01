import useFadeIn from "../Hooks/useFadeIn";

const About = () => {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`fade-section scroll-mt-26 px-4 max-w-5xl mx-auto transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >

      <h2 className="text-3xl text-yellow-500 font-bold mb-6 border-b-2 border-yellow-500 inline-block pb-2">
        À propos de moi
      </h2>
      <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
        Bonjour ! Je suis Zoniaina Teddy RANDRIANARISOA,{" "}
        <span className="text-yellow-500 font-semibold">Webmaster</span> &{" "}
        <span className="text-yellow-500 font-semibold">Développeur Web</span>, passionné par la
        création et la gestion de sites web modernes, performants et esthétiques. <br /><br />

        Je gère l'ensemble du cycle de vie d'un site : conception, développement, mise en ligne
        et maintenance. Expert WordPress (Elementor, WooCommerce), je maîtrise aussi le
        développement sur mesure avec React, TypeScript et Tailwind CSS. Je complète ces
        compétences par des bases solides en Design (Figma, Canva) pour créer des interfaces
        cohérentes et attractives.<br /><br />

        En veille technologique constante, je suis toujours en quête de nouveaux défis pour
        apprendre et contribuer activement au succès des projets.
      </p>
    </section>
  );
};

export default About;
