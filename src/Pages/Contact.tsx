import React, { useState } from "react";
import useFadeIn from "../Hooks/useFadeIn";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const { ref, visible } = useFadeIn();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xpqrwzaq", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`fade-section py-16 px-4 max-w-5xl mx-auto transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } text-gray-900 dark:text-gray-100`}
    >
      <h2 className="text-3xl text-yellow-500 font-bold mb-8 border-b-2 border-yellow-500 inline-block pb-2">
        Contactez-moi
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Formulaire */}
        <div className="flex-1 bg-gray-200 dark:bg-zinc-800 p-6 rounded-lg shadow-md">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Nom */}
            <label className="flex flex-col text-gray-900 dark:text-gray-100 font-medium">
              Nom
              <input
                type="text"
                name="name"
                className="mt-1 p-3 rounded border border-gray-300 dark:border-zinc-700
                  bg-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                required
              />
            </label>

            {/* Email */}
            <label className="flex flex-col text-gray-900 dark:text-gray-100 font-medium">
              Email
              <input
                type="email"
                name="email"
                className="mt-1 p-3 rounded border border-gray-300 dark:border-zinc-700
                  bg-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                required
              />
            </label>

            {/* Message */}
            <label className="flex flex-col text-gray-900 dark:text-gray-100 font-medium">
              Message
              <textarea
                name="message"
                rows={5}
                className="mt-1 p-3 rounded border border-gray-300 dark:border-zinc-700
                  bg-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-yellow-500 text-gray-900 font-semibold py-3 rounded hover:bg-yellow-400 transition mt-2"
            >
              Envoyer
            </button>

            {/* Message de confirmation */}
            {submitted && (
              <p className="text-green-500 mt-2 font-medium">
                Merci, votre message a été envoyé !
              </p>
            )}
          </form>
        </div>

        {/* Infos de contact */}
        <div className="flex-1 flex flex-col gap-4 justify-start">
          <div className="flex items-center gap-2">
            <MdEmail className="text-yellow-500" size={24} />
            <span>Email: zoniainateddy@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <MdPhone className="text-yellow-500" size={24} />
            <span>Téléphone: +261 38 76 862 57</span>
          </div>

          <div className="flex items-center gap-2">
            <FaLinkedin className="text-blue-700" size={24} />
            <span>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/zoniaina-teddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-400"
              >
                Voir mon profil LinkedIn
              </a>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaGithub className="text-gray-700" size={24} />
            <span>
              GitHub:{" "}
              <a
                href="https://github.com/teds81"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-400"
              >
                Voir mes projets sur GitHub
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
