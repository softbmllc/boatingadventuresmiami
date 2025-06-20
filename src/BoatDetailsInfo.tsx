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
import SeoHead from "./Components/SeoHead";

export default function BoatDetailsInfo() {
  const { language } = useLanguage();
  const t = translations[language].details;

  return (
    <section
      id="details"
      aria-label={t.includesTitle}
      className="bg-white py-20 px-6 text-gray-800 scroll-mt-20"
    >
      <SeoHead
        title={t.seo?.title || "Servicios en barco Miami | Boating Adventures"}
        description={t.seo?.description || "Todo lo que incluyen nuestros paseos y políticas importantes para disfrutar al máximo."}
        keywords={t.seo?.keywords || "barco, paseo, capitán, música, sandbar, miami, alquiler"}
      />

      <div className="max-w-6xl mx-auto space-y-24">
        {/* ✅ Qué incluye cada paseo */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6">
            {t.titleIncludes}
          </h2>

          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col items-center text-center">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base sm:text-lg max-w-3xl mx-auto" aria-label="Qué incluye cada paseo">
                <li className="flex items-start gap-3">
                  <Refrigerator className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
                  {t.includes.fridge}
                </li>
                <li className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-cyan-600 mt-1" aria-hidden="true" />
                  {t.includes.ice}
                </li>
                <li className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-sky-600 mt-1" aria-hidden="true" />
                  {t.includes.water}
                </li>
                <li className="flex items-start gap-3">
                  <Fuel className="w-6 h-6 text-yellow-600 mt-1" aria-hidden="true" />
                  {t.includes.fuel}
                </li>
                <li className="flex items-start gap-3">
                  <LifeBuoy className="w-6 h-6 text-red-600 mt-1" aria-hidden="true" />
                  {t.includes.lifejackets}
                </li>
                <li className="flex items-start gap-3">
                  <Volume2 className="w-6 h-6 text-indigo-600 mt-1" aria-hidden="true" />
                  {t.includes.bluetooth}
                </li>
                <li className="flex items-start gap-3">
                  <UserCheck className="w-6 h-6 text-green-600 mt-1" aria-hidden="true" />
                  {t.includes.captain}
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-gray-600 mt-1" aria-hidden="true" />
                  {t.includes.cleaning}
                </li>
              </ul>

              <p className="mt-8 text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
                {t.includes.note}
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Políticas */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6">
            {t.titlePolicies}
          </h2>

          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base sm:text-lg max-w-2xl mx-auto" aria-label="Políticas de los paseos">
              <li className="flex items-start gap-3">
                <Repeat2 className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
                {t.policies.weather}
              </li>
              <li className="flex items-start gap-3">
                <Ban className="w-6 h-6 text-red-600 mt-1" aria-hidden="true" />
                {t.policies.substances}
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" aria-hidden="true" />
                {t.policies.damages}
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-purple-600 mt-1" aria-hidden="true" />
                {t.policies.children}
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-green-600 mt-1" aria-hidden="true" />
                {t.policies.return}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}