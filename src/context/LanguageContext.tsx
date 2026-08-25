import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Lang = 'fr' | 'en';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-lang';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en') return saved;
    return navigator.language.startsWith('fr') ? 'fr' : 'en';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Lang) => setLangState(newLang);
  const toggleLang = () => setLangState((prev) => (prev === 'fr' ? 'en' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage doit être utilisé à l\'intérieur de <LanguageProvider>');
  }
  return context;
};
