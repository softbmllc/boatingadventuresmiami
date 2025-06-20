import fondo from "/bg-hero-v4.jpg";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

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
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center px-6 py-24 sm:py-32"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0" />
        <div className="relative z-10 max-w-3xl space-y-6">
          {/* LOGO CIRCULAR AJUSTADO */}
          <motion.img
            src="/logo-circular.png"
            alt="Boating Adventures Miami"
            className="mx-auto w-32 h-32 sm:w-36 sm:h-36 mt-10 sm:mt-6 mb-6 rounded-full shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <motion.h1
            initial={hasAnimated ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-white text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md"
          >
            {language === "es"
              ? "Paseos en Bote Premium por Miami | Boating Adventures Miami"
              : language === "pt"
              ? "Passeios de Barco Premium em Miami | Boating Adventures Miami"
              : "Premium Boat Tours in Miami | Boating Adventures Miami"}
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
            <a
              href="https://wa.me/17544653318"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full text-lg shadow-md transition-transform hover:scale-105 flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              <span className="font-bold">{t.button}</span>
            </a>

            <a
              href="https://www.instagram.com/boating.adventuresmiami/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-full text-lg shadow-md transition-transform hover:scale-105 flex items-center gap-2"
            >
              <FaInstagram className="text-xl" />
              <span className="font-bold">Instagram</span>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
          {[
            "https://res.cloudinary.com/ddkyumyw3/video/upload/v1748555344/AQNqYQMBAg8SC29O_M5dpX7y5DCjl-3vv25PGmJkd6pIzBtApZLvyL2fRjr0NAalnHDkiOo_XoTcvEY8wtCRE6F48nZWgo2lgkeD9b8_d4qear.mov",
            "https://res.cloudinary.com/ddkyumyw3/video/upload/v1748551026/AQOn7_UzochxYh58vRUbmBGsNgKDvxwEW5rA2i7Xdf2dGlIP8CGPniPhEFlyznATTu0s58s6MogQWUlL6s13O5HM7C_v9yhoJ_7cP1I_euojm4.mp4",
            "https://res.cloudinary.com/ddkyumyw3/video/upload/v1748556378/IMG_5364_v1uwhx.mov"
          ].map((src, index) => (
            <div
              key={index}
              className="relative mx-auto w-[360px] h-[640px] rounded-xl overflow-hidden shadow-lg"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
