import { ShipWheel, Sailboat, Waves } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import InfoCard from "./InfoCard";

export default function BoatServiceInfo() {
  const { language } = useLanguage();
  const t = translations[language].boatServices;

  return (
    <section id="boats" className="bg-white py-20 px-6 text-gray-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-14 drop-shadow-md tracking-tight uppercase">
          {t.title ? t.title : "Title not available"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MERIDIAN */}
          <InfoCard
            icon={<ShipWheel className="w-6 h-6" />}
            title={t.meridian.title}
            subtitle={t.meridian.subtitle}
            description={t.meridian.description}
            prices={t.meridian.prices.list}
            onClick={() => {
              const section = document.getElementById("meridian");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* SUNDANCER */}
          <InfoCard
            icon={<Sailboat className="w-6 h-6" />}
            title={t.sundancer.title}
            subtitle={t.sundancer.subtitle}
            description={t.sundancer.description}
            prices={t.sundancer.prices.list}
            onClick={() => {
              const section = document.getElementById("sundancer");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* YAMAHA */}
          <InfoCard
            icon={<Waves className="w-6 h-6" />}
            title={t.yamaha.title}
            subtitle={t.yamaha.subtitle}
            description={t.yamaha.description}
            prices={t.yamaha.prices.list}
            onClick={() => {
              const section = document.getElementById("yamaha");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </section>
  );
}