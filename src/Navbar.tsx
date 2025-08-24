import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  const handleLang = (lang: "es" | "en" | "pt") => {
    console.log("SET LANG CLICK:", lang);
    setLanguage(lang);
    try {
      localStorage.setItem("lang", lang);
    } catch {}
    document.documentElement.setAttribute("lang", lang);
    // fuerza remonte completo para que todos los componentes tomen el idioma
    window.location.reload();
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setVisible(
          prevScrollPos > currentScrollPos || currentScrollPos < 10
        );
        setPrevScrollPos(currentScrollPos);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-md mx-auto mt-4 max-w-fit px-4 py-2 flex flex-col items-center justify-center gap-2 text-sm sm:text-base">
        <div className="flex flex-col items-center gap-y-2 sm:flex-row sm:justify-between">
          {/* NAV LINKS */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs sm:text-sm px-4 sm:px-6">            <a href="#home" className="font-bold hover:text-blue-600">
              {t.home}
            </a>
            <a href="#tours" className="font-bold hover:text-blue-600">
              {t.tours}
            </a>
            <a href="#boats" className="font-bold hover:text-blue-600">
              {t.boats}
            </a>
            <a href="#gallery" className="font-bold hover:text-blue-600">
              {t.gallery}
            </a>
            <a href="#details" className="font-bold hover:text-blue-600">
              {t.details}
            </a>
            <a href="#contact" className="font-bold hover:text-blue-600">
              {t.contact}
            </a>
            <a href="#faq" className="font-bold hover:text-blue-600">
              {t.faq}
            </a>
          </div>

          {/* LANGUAGES */}
          <div className="flex items-center justify-center space-x-2 border-t border-gray-200 pt-2 sm:border-t-0 sm:pt-0 sm:ml-4">
            <button
              type="button"
              className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                language === "es" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleLang("es")}
              aria-pressed={language === "es"}
            >
              🇪🇸 ES
            </button>
            <button
              type="button"
              className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleLang("en")}
              aria-pressed={language === "en"}
            >
              🇺🇸 EN
            </button>
            <button
              type="button"
              className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                language === "pt" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleLang("pt")}
              aria-pressed={language === "pt"}
            >
              🇧🇷 PT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
