import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import InfoCard from "./InfoCard";
import { PartyPopper, Sun, Waves } from "lucide-react";
import SeoHead from "./Components/SeoHead";

export default function BoatTourTypes() {
  const { language } = useLanguage();
  const t = translations[language]?.tourTypes;

  // 🚨 Si no existe contenido traducido, no renderizar nada
  if (!t || !t.card1 || !t.card2 || !t.card3 || !t.seo) return null;

  const cards = language === "pt"
    ? [t.card2, t.card1, t.card3]
    : [t.card1, t.card2, t.card3];

  const icons = [
    <PartyPopper className="w-6 h-6" aria-hidden="true" />,
    <Sun className="w-6 h-6" aria-hidden="true" />,
    <Waves className="w-6 h-6" aria-hidden="true" />,
  ];

  return (
    <section
      id="tours"
      aria-label={t.title}
      className="py-20 px-6 bg-white scroll-mt-20"
    >
      <SeoHead
        title={t.seo.title}
        description={t.seo.description}
        keywords={t.seo.keywords}
      />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-900">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              icon={icons[index]}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}