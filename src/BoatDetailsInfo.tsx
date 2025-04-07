import {
  Droplets,
  Fuel,
  LifeBuoy,
  Volume2,
  UserCheck,
  Sparkles,
  Refrigerator,
  Repeat2,
  Ban,
  AlertTriangle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

export default function BoatDetailsInfo() {
  const { language } = useLanguage();
  const t = translations[language].details;

  return (
    <section
      id="details"
      aria-label={t.includesTitle}
      className="bg-white py-20 px-6 text-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Qué incluye cada paseo */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-10 drop-shadow-md tracking-tight uppercase">
            {t.includesTitle}
          </h2>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base sm:text-lg max-w-4xl mx-auto text-left"
            aria-label="Servicios incluidos en los paseos"
          >
            <li className="flex items-start gap-3">
              <Refrigerator className="w-6 h-6 text-blue-600 mt-1" />
              {t.includes.fridge}
            </li>
            <li className="flex items-start gap-3">
              <Droplets className="w-6 h-6 text-cyan-600 mt-1" />
              {t.includes.ice}
            </li>
            <li className="flex items-start gap-3">
              <Droplets className="w-6 h-6 text-sky-600 mt-1" />
              {t.includes.water}
            </li>
            <li className="flex items-start gap-3">
              <Fuel className="w-6 h-6 text-yellow-600 mt-1" />
              {t.includes.fuel}
            </li>
            <li className="flex items-start gap-3">
              <LifeBuoy className="w-6 h-6 text-red-600 mt-1" />
              {t.includes.lifejackets}
            </li>
            <li className="flex items-start gap-3">
              <Volume2 className="w-6 h-6 text-indigo-600 mt-1" />
              {t.includes.bluetooth}
            </li>
            <li className="flex items-start gap-3">
              <UserCheck className="w-6 h-6 text-green-600 mt-1" />
              {t.includes.captain}
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-gray-600 mt-1" />
              {t.includes.cleaning}
            </li>
          </ul>

          <p className="mt-8 text-gray-600 text-center text-sm sm:text-base max-w-xl mx-auto">
            {t.includes.note}
          </p>
        </div>

        {/* Políticas */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-10 drop-shadow-md tracking-tight uppercase">
            {t.policiesTitle}
          </h2>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base sm:text-lg max-w-2xl mx-auto"
            aria-label="Políticas de servicio"
          >
            <li className="flex items-start gap-3">
              <Repeat2 className="w-6 h-6 text-blue-600 mt-1" />
              {t.policies.weather}
            </li>
            <li className="flex items-start gap-3">
              <Ban className="w-6 h-6 text-red-600 mt-1" />
              {t.policies.substances}
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
              {t.policies.damages}
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-6 h-6 text-purple-600 mt-1" />
              {t.policies.children}
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-green-600 mt-1" />
              {t.policies.return}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}