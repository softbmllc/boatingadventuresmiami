import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import InfoCard from "./InfoCard";
import { PartyPopper, Sun, Waves } from "lucide-react";

export default function BoatTourTypes() {
  const { language } = useLanguage();
  const t = translations[language].tourTypes;

  return (
    <section id="tours" className="py-20 px-6 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-14 drop-shadow-md tracking-tight uppercase">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {(language === "pt"
    ? [t.card2, t.card1, t.card3] // orden especial para portugués
    : [t.card1, t.card2, t.card3] // orden normal para los demás idiomas
  ).map((card, index) => {
    const icons = [
      <PartyPopper className="w-6 h-6" />,
      <Sun className="w-6 h-6" />,
      <Waves className="w-6 h-6" />,
    ];

    return (
      <InfoCard
        key={index}
        icon={icons[index]}
        title={card.title}
        description={card.description}
      />
    );
  })}
</div>
      </div>
    </section>
  );
}