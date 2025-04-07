import fondo from "/Fondo.jpg";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Instagram } from "lucide-react";

export default function BoatingHome() {
  const { language } = useLanguage();
  const t = translations[language].home;
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center px-6 py-24 sm:py-32"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
      <div className="relative z-10 max-w-3xl space-y-6">
        <motion.h1
          initial={hasAnimated ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-white text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md"
        >
          {t.title}
        </motion.h1>

        <motion.p
          initial={hasAnimated ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          className="text-white text-base sm:text-lg mt-2 mb-4 drop-shadow-md"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
  initial={hasAnimated ? false : { opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
  className="flex flex-col sm:flex-row sm:justify-center items-center gap-4"
>
  {/* Botón WhatsApp */}
  <a
    href="https://wa.me/17544653318"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-md transition-transform hover:scale-105"
  >
    {t.button}
  </a>

  {/* Botón Instagram */}
  <a
    href="https://www.instagram.com/boating.adventuresmiami/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-full text-lg shadow-md transition-transform hover:scale-105 flex items-center gap-2"
  >
    <Instagram size={20} strokeWidth={1.8} />
    Instagram
  </a>
</motion.div>
      </div>
    </section>
  );
}
