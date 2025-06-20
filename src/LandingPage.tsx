import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import SeoHead from "./Components/SeoHead";
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

  const { title, description, keywords } = t.landing.seo;

  return (
    <div id="landing" className="bg-white text-gray-800">
      <SeoHead title={title} description={description} keywords={keywords} />

      {/* Video Hero */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/ddkyumyw3/video/upload/f_auto,q_auto/v1748549274/0528_2_oteca5.mov"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
              Viví el mar como nunca antes
            </h1>
            <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
              Botes, amigos, sandbar y atardeceres inolvidables
            </p>
          </div>
        </div>
      </section>
      {/* 
      Encabezado original temporalmente comentado
      <section className="text-center py-24 px-6" aria-label="Landing header">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-md">
          {t.landing.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          {t.landing.subtitle}
        </p>
      </section>
      */}

      {/* Selector de Botes */}
      <section
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 pb-24"
        aria-label="Boat options"
      >
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
              aria-label="Reservar por WhatsApp"
              className="inline-block"
            >
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl text-sm shadow">
                {t.landing.button}
              </button>
            </a>
          </div>
        ))}
      </section>

      {/* CTA Final */}
      <section
        className="bg-gray-100 py-16 text-center"
        aria-label="Llamado a la acción"
      >
        <h2 className="text-3xl font-bold mb-4">{t.landing.cta}</h2>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-xl">
            {t.landing.ctaButton}
          </button>
        </a>
      </section>
    </div>
  );
}