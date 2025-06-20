import { useLanguage } from "./LanguageContext";
import translations from "./translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center bg-no-repeat text-white text-center px-6 sm:px-10 pb-28"
      style={{ backgroundImage: "url('/bg-hero-v4.jpg')" }}
    >
      <div className="pt-40 sm:pt-32"> {/* Aumentamos espacio en mobile */}
        <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-md tracking-tight mb-6 leading-tight">
          {t.title}
        </h1>

        <p className="text-base sm:text-lg max-w-md mx-auto text-white/90 mb-8 leading-relaxed">
          {t.subtitle}
        </p>

        <a
          href="#contact"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-md"
        >
          {t.button}
        </a>
      </div>
    </section>
  );
}