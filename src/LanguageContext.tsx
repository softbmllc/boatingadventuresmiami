import { createContext, useContext, useState, ReactNode, useEffect, useMemo } from "react";

type Language = "es" | "en" | "pt";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: "es",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && ["es","en","pt"].includes(saved)) return saved;
    const nav = (navigator.language || "es").slice(0,2);
    return (["es","en","pt"].includes(nav) ? (nav as Language) : "es");
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);