import useFadeIn from "../Hooks/useFadeIn";
import img from "../assets/teds.png";

const Home = () => {
  const { ref: textRef, visible: textVisible } = useFadeIn<HTMLDivElement>();
  const { ref: photoRef, visible: photoVisible } = useFadeIn<HTMLDivElement>();

  return (
    <section
      id="home"
      className="pt-20 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
    >

      <div
        ref={textRef}
        className={`flex-1 space-y-6 transition-all duration-1000 ${
          textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
          Bonjour, je suis <span className="text-yellow-400">RANDRIANARISOA Zoniaina Teddy</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
          <span className="text-yellow-400 font-semibold">Webmaster</span> &{" "}
          <span className="text-yellow-400 font-semibold">Développeur Web</span>, avec des
          compétences en Design (Figma, Canva). Je crée des sites vitrines, e-commerce et
          applications sur mesure, modernes et esthétiques.
        </p>

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

      <div
        ref={photoRef}
        className={`flex-1 flex justify-center md:justify-end transition-all duration-1000 ${
          photoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <img
          src={img}
          alt="Ma photo"
          className="w-48 md:w-72 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Home;
