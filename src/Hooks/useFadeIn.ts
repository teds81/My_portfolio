import { useRef, useState, useEffect } from "react";

const useFadeIn = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 1. Sauvegarder la référence dans une variable locale
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(element);

    // 2. Utiliser la variable locale pour le nettoyage
    return () => {
      observer.unobserve(element);
    };
  }, []);

  return { ref, visible };
};

export default useFadeIn;
