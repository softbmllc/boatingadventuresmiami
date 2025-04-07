import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import { Sailboat, PartyPopper, Waves } from "lucide-react";

export default function LandingPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const whatsappLink = "https://wa.me/17544653318";

  const boats = [
    {
      icon: <Waves size={28} className="text-purple-600 mb-2" />,
      name: t.boatServices.meridian.title,
      description: t.boatServices.meridian.description,
      subtitle: t.boatServices.meridian.subtitle,
      prices: t.boatServices.meridian.prices.list,
      color: "text-purple-600 border-purple-300",
    },
    {
      icon: <PartyPopper size={28} className="text-yellow-600 mb-2" />,
      name: t.boatServices.sundancer.title,
      description: t.boatServices.sundancer.description,
      subtitle: t.boatServices.sundancer.subtitle,
      prices: t.boatServices.sundancer.prices.list,
      color: "text-yellow-600 border-yellow-300",
    },
    {
      icon: <Sailboat size={28} className="text-blue-600 mb-2" />,
      name: t.boatServices.yamaha.title,
      description: t.boatServices.yamaha.description,
      subtitle: t.boatServices.yamaha.subtitle,
      prices: t.boatServices.yamaha.prices.list,
      color: "text-blue-600 border-blue-300",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Encabezado */}
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-md">
          Tu experiencia en bote en Miami empieza acá
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Reservá fácil, rápido y 100% por WhatsApp
        </p>
      </section>

      {/* Selector de Botes */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 pb-24">
        {boats.map((boat, index) => (
          <div
            key={index}
            className={`rounded-2xl border ${boat.color} p-6 hover:shadow-xl transition text-center`}
          >
            {boat.icon}
            <h3 className={`text-xl font-extrabold mb-1 ${boat.color}`}>
              {boat.name}
            </h3>
            <p className={`italic mb-2 text-sm ${boat.color}`}>
              {boat.subtitle}
            </p>
            <p className="text-gray-600 mb-4 text-sm">{boat.description}</p>
            <ul className="mb-4 text-sm text-gray-700">
              {boat.prices.map((price, idx) => (
                <li key={idx}>{price}</li>
              ))}
            </ul>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl text-sm shadow">
                Reservar por WhatsApp
              </button>
            </a>
          </div>
        ))}
      </section>

      {/* CTA Final */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para tu paseo inolvidable?
        </h2>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-xl">
            Quiero reservar ahora
          </button>
        </a>
      </section>
    </div>
  );
}