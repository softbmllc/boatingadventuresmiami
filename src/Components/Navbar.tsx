import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language]?.nav;

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

  if (!t) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#0c1e2b]/80 backdrop-blur-md text-white rounded-full shadow-md mx-auto mt-4 max-w-fit px-4 py-2 flex flex-col items-center justify-center gap-2 text-sm sm:text-base">
        <div className="flex flex-col items-center gap-y-2 sm:flex-row sm:justify-between">
          {/* NAV LINKS */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs sm:text-sm px-4 sm:px-6">
            <a href="#home" className="font-bold hover:text-blue-300 transition-colors">
              {t.home}
            </a>
            <a href="#tours" className="font-bold hover:text-blue-300 transition-colors">
              {t.tours}
            </a>
            <a href="#boats" className="font-bold hover:text-blue-300 transition-colors">
              {t.boats}
            </a>
            <a href="#gallery" className="font-bold hover:text-blue-300 transition-colors">
              {t.gallery}
            </a>
            <a href="#details" className="font-bold hover:text-blue-300 transition-colors">
              {t.details}
            </a>
            <a href="#contact" className="font-bold hover:text-blue-300 transition-colors">
              {t.contact}
            </a>
            <a href="#faq" className="font-bold hover:text-blue-300 transition-colors">
              {t.faq}
            </a>
          </div>

          {/* LANGUAGES */}
          <div className="flex items-center justify-center space-x-2 border-t border-white/30 pt-2 sm:border-t-0 sm:pt-0 sm:ml-4">
  <button
    className={`px-3 py-1 rounded-full flex items-center gap-1 text-xs sm:text-sm ${
      language === "es" ? "bg-white text-[#0c1e2b] font-bold" : "bg-white/20 hover:bg-white/30"
    }`}
    onClick={() => setLanguage("es")}
  >
    <img src="/icons/flag-es.svg" alt="ES" className="w-4 h-4" />
    ES
  </button>
  <button
    className={`px-3 py-1 rounded-full flex items-center gap-1 text-xs sm:text-sm ${
      language === "en" ? "bg-white text-[#0c1e2b] font-bold" : "bg-white/20 hover:bg-white/30"
    }`}
    onClick={() => setLanguage("en")}
  >
    <img src="/icons/flag-en.svg" alt="EN" className="w-4 h-4" />
    EN
  </button>
  <button
    className={`px-3 py-1 rounded-full flex items-center gap-1 text-xs sm:text-sm ${
      language === "pt" ? "bg-white text-[#0c1e2b] font-bold" : "bg-white/20 hover:bg-white/30"
    }`}
    onClick={() => setLanguage("pt")}
  >
    <img src="/icons/flag-pt.svg" alt="PT" className="w-4 h-4" />
    PT
  </button>
</div>
        </div>
      </div>
    </nav>
  );
}