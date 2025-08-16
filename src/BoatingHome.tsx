import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import HeroVideoLayer from "./Components/HeroVideoLayer";

export default function BoatingHome() {
  const { language } = useLanguage();
  const t = translations[language]?.home;
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, []);

  if (!t) return null;

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-cover bg-center min-h-[72vh] md:min-h-[80vh] flex items-center justify-center text-center px-6 py-12 sm:py-20 max-[380px]:py-8"
      >
        <HeroVideoLayer position="absolute" />
        <div className="relative z-10 max-w-3xl space-y-5 pt-16 max-[380px]:pt-24">
          {/* LOGO CIRCULAR AJUSTADO */}
          <motion.img
            src="/logo-circular.png"
            alt="Boating Adventures Miami"
            className="mx-auto w-20 h-20 sm:w-28 sm:h-28 mt-10 sm:mt-6 mb-3 rounded-full shadow-xl max-[380px]:w-16 max-[380px]:h-16 max-[380px]:mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <motion.h1
            initial={hasAnimated ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight md:leading-[1.1] tracking-tight drop-shadow-md mx-auto max-w-[700px] max-[380px]:text-xl max-[380px]:leading-snug max-[380px]:tracking-normal max-[380px]:px-2"
          >
            {language === "es"
              ? "Paseos en Bote por Miami"
              : language === "pt"
              ? "Passeios de Barco em Miami"
              : "Boat Tours in Miami"}
          </motion.h1>

          <motion.p
            initial={hasAnimated ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="text-white/90 text-sm sm:text-base mt-2 mb-5 drop-shadow-md mx-auto max-w-[600px] bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 sm:bg-transparent sm:backdrop-blur-0 sm:px-0 sm:py-0 max-[380px]:text-xs max-[380px]:px-3 max-[380px]:py-1"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={hasAnimated ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:justify-center items-center gap-3 md:gap-4 max-[380px]:gap-2"
          >
            <a
              href="https://wa.me/17544653318"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg transition-all hover:shadow-xl active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ba-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent flex items-center gap-2"
              aria-label="Abrir WhatsApp para reservar"
            >
              <FaWhatsapp className="text-xl" />
              <span className="font-semibold">{t.button}</span>
            </a>

            <a
              href="https://www.instagram.com/boating.adventuresmiami/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg transition-all hover:shadow-xl active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ba-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent flex items-center gap-2"
              aria-label="Abrir Instagram Boating Adventures"
            >
              <FaInstagram className="text-xl" />
              <span className="font-semibold">Instagram</span>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
          {[
            "/videos/Video1.mov",
            "/videos/Video2.mp4",
            "/videos/Video3.MOV"
          ].map((src, index) => (
            <div
              key={index}
              className="relative mx-auto w-full max-w-[360px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg"
            >
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
