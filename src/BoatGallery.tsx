import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import SeoHead from "./Components/SeoHead"; // ✅ SEO

// 🔐 Tipado robusto para las keys del gallery
type BoatNameKey = "meridian" | "sundancer" | "yamaha";

const boats: {
  id: string;
  name: string;
  nameKey: BoatNameKey;
  images: { src: string; alt: string }[];
}[] = [
  {
    id: "meridian",
    name: "MERIDIAN 42ft",
    nameKey: "meridian",
    images: [
      { src: "/meridian-42ft-boat-charter-miami-1.jpg", alt: "Meridian 42ft boat charter in Miami - Interior view" },
      { src: "/meridian-42ft-boat-charter-miami-2.jpg", alt: "Meridian 42ft luxury boat rental Miami - Cabin area" },
      { src: "/meridian-42ft-boat-charter-miami-3.jpg", alt: "Meridian yacht for charter in Miami - Side deck" },
      { src: "/meridian-42ft-boat-charter-miami-4.jpg", alt: "Spacious 42ft Meridian boat in Miami - Lounge area" },
      { src: "/meridian-42ft-boat-charter-miami-5.jpg", alt: "Premium Meridian yacht rental Miami - View from bow" },
      { src: "/meridian-42ft-boat-charter-miami-6.jpg", alt: "42ft Meridian boat in Miami - Ready for charter" },
    ],
  },
  {
    id: "sundancer",
    name: "SUNDANCER 36ft",
    nameKey: "sundancer",
    images: [
      { src: "/sundancer-36ft-boat-tour-miami-1.jpg", alt: "Sundancer 36ft boat tour in Miami - Front view" },
      { src: "/sundancer-36ft-boat-tour-miami-2.jpg", alt: "36ft Sundancer boat rental Miami - Side angle" },
      { src: "/sundancer-36ft-boat-tour-miami-3.jpg", alt: "Miami boat tour with Sundancer 36ft - Interior space" },
      { src: "/sundancer-36ft-boat-tour-miami-4.jpg", alt: "Rent Sundancer 36ft boat in Miami - Deck area" },
      { src: "/sundancer-36ft-boat-tour-miami-5.jpg", alt: "Sundancer yacht Miami - Luxury 36ft boat experience" },
      { src: "/sundancer-36ft-boat-tour-miami-6.jpg", alt: "Tour Miami on a Sundancer 36ft boat - Fun and sun" },
      { src: "/sundancer-36ft-boat-tour-miami-7.jpg", alt: "Sundancer 36ft boat Miami - Sunset view" },
      { src: "/sundancer-36ft-boat-tour-miami-8.jpg", alt: "Luxury Sundancer 36ft Miami - Night tour" },
    ],
  },
  {
    id: "yamaha",
    name: "YAMAHA SPORT 20ft",
    nameKey: "yamaha",
    images: [
      { src: "/yamaha-sport-boat-miami-1.jpg", alt: "Yamaha 20ft sport boat in Miami - Sandbar ride" },
      { src: "/yamaha-sport-boat-miami-2.jpg", alt: "Rent Yamaha boat in Miami - Watersports fun" },
      { src: "/yamaha-sport-boat-miami-3.jpg", alt: "20ft Yamaha boat for rent Miami - Comfortable seating" },
      { src: "/yamaha-sport-boat-miami-4.jpg", alt: "Yamaha sport boat in Miami - Bluetooth music onboard" },
      { src: "/yamaha-sport-boat-miami-5.jpg", alt: "Miami sandbar adventure - Yamaha 20ft boat rental" },
      { src: "/yamaha-sport-boat-miami-6.jpg", alt: "Yamaha boat tour Miami - Ideal for watersports and fun" },
    ],
  },
];

export default function BoatGallery() {
  const { language } = useLanguage();
  const { seo, ...galleryStrings } = translations[language].gallery;

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allSlides = boats.flatMap((boat) =>
    boat.images.map((img) => ({
      src: img.src,
      description: galleryStrings[boat.nameKey],
    }))
  );

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section id="gallery" aria-label={galleryStrings.title} className="bg-white py-14 sm:py-20 px-4 text-center scroll-mt-20">
      {/* ✅ SEO dinámico para la galería */}
      <SeoHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />

      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-900">
        {galleryStrings.title}
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
              <div className="bg-[#0c1e2b] text-white rounded-2xl px-6 py-4 sm:px-10 sm:py-5 shadow-lg text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest drop-shadow-md hover:scale-105 transition-transform duration-300">
  {boat.name}
</div>
            </div>

            <div className="grid gap-6 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center max-w-6xl mx-auto">
              {boat.images.map((img, imgIndex) => {
                const index = baseIndex + imgIndex;

                return (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
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
          render={{
            // @ts-expect-error: custom caption render
            description: ({ description }) => (
              <div className="w-full flex justify-center">
                <div className="text-white text-center text-base font-sans pt-2 max-w-xl px-4">
                  {description}
                </div>
              </div>
            ),
          }}
        />
      )}
    </section>
  );
}