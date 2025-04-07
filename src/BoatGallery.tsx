import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

const boats = [
  {
    id: "meridian",
    name: "MERIDIAN 42’",
    nameKey: "meridian",
    images: ["/Meridian42-1.jpg", "/Meridian42-2.jpg", "/Meridian42-3.jpg", "/Meridian42-4.jpg", "/Meridian42-5.jpg", "/Meridian42-6.jpg"],
  },
  {
    id: "sundancer",
    name: "SUNDANCER 36’",
    nameKey: "sundancer",
    images: ["/Sundancer36-1.jpg", "/Sundancer36-2.jpg", "/Sundancer36-3.jpg", "/Sundancer36-4.jpg", "/Sundancer36-5.jpg", "/Sundancer36-6.jpg"],
  },
  {
    id: "yamaha",
    name: "YAMAHA SPORT 20’",
    nameKey: "yamaha",
    images: ["/YamahaSport-1.jpg", "/YamahaSport-2.jpg", "/YamahaSport-3.jpg", "/YamahaSport-4.jpg", "/YamahaSport-5.jpg", "/YamahaSport-6.jpg"],
  },
];

export default function BoatGallery() {
  const { language } = useLanguage();
  const t = translations[language].gallery;

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allSlides = boats.flatMap((boat) =>
    boat.images.map((src) => ({
      src,
      description: t[boat.nameKey],
    }))
  );

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section
      id="gallery"
      aria-label={t.title}
      className="bg-white py-14 sm:py-20 px-4 text-center scroll-mt-20"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-md tracking-tight uppercase">
        {t.title}
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        {language === "es" && "Explorá nuestros botes en detalle. Fotos reales de cada modelo para ayudarte a elegir tu paseo ideal por Miami."}
        {language === "en" && "Browse our boats in detail. Real photos of each model to help you choose your ideal Miami boat tour."}
        {language === "pt" && "Explore nossos barcos em detalhes. Fotos reais de cada modelo para ajudar você a escolher o passeio ideal por Miami."}
      </p>

      {boats.map((boat, boatIndex) => {
        const baseIndex = boats.slice(0, boatIndex).reduce((acc, b) => acc + b.images.length, 0);

        return (
          <div key={boat.id} id={boat.id} className="mb-20">
            <div
              className="flex justify-center mb-6 sm:mb-10 cursor-pointer"
              onClick={() => {
                const infoSection = document.getElementById(`info-${boat.id}`);
                if (infoSection) infoSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl px-6 py-4 sm:px-10 sm:py-5 shadow-xl text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest drop-shadow-md hover:scale-105 transition-transform duration-300">
                {boat.name}
              </div>
            </div>

            <div className="grid gap-6 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center max-w-6xl mx-auto">
              {boat.images.map((src, imgIndex) => {
                const index = baseIndex + imgIndex;

                return (
                  <img
                    key={src}
                    src={src}
                    alt={`Paseo en bote ${boat.name} - imagen ${imgIndex + 1}`}
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => openLightbox(index)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={allSlides}
          plugins={[Captions, Thumbnails]}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
            description: {
              color: "#ffffff",
              fontSize: "1rem",
              textAlign: "center",
              fontFamily: "inherit",
              padding: "1rem 1.5rem",
              maxWidth: "800px",
              margin: "0 auto",
            },
          }}
          captions={{ descriptionTextAlign: "center" }}
        />
      )}
    </section>
  );
}