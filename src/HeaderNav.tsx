import { useState } from "react";
import { Globe, Instagram } from "lucide-react";

export default function HeaderNav() {
  const [language, setLanguage] = useState("es");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // lógica de cambio de idioma futura acá
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Navegación */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-700 font-semibold text-sm sm:text-base">
          <a href="#experiencia" className="hover:text-blue-600 transition">Experiencia</a>
          <a href="#botes" className="hover:text-blue-600 transition">Nuestros Botes</a>
          <a href="#galeria" className="hover:text-blue-600 transition">Galería</a>
          <a href="#incluye" className="hover:text-blue-600 transition">Incluye</a>
          <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
          <a href="#contacto" className="hover:text-blue-600 transition">Contacto</a>
        </nav>

        {/* Idiomas + Instagram */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/boating.adventuresmiami/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <div className="relative">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <Globe className="w-5 h-5" /> {language.toUpperCase()}
            </button>
            {/* Lista de idiomas */}
            <div className="absolute top-7 left-0 bg-white border rounded-md shadow-md text-sm w-28 hidden group-hover:block">
              <button
                onClick={() => handleLanguageChange("es")}
                className="block w-full px-3 py-2 text-left hover:bg-gray-100"
              >
                Español
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className="block w-full px-3 py-2 text-left hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange("pt")}
                className="block w-full px-3 py-2 text-left hover:bg-gray-100"
              >
                Português
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
