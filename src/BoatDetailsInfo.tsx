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
        description={
          t.seo?.description ||
          "Todo lo que incluyen nuestros paseos y políticas importantes para disfrutar al máximo."
        }
        keywords={t.seo?.keywords || "barco, paseo, capitán, música, sandbar, miami, alquiler"}
      />

      <div className="max-w-6xl mx-auto space-y-24">
        {/* ✅ Qué incluye cada paseo */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6">
            {t.titleIncludes}
          </h2>

          {/* Card navy coherente con las superiores */}
          <div
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--ba-navy)] text-white shadow-[0_10px_30px_-12px_rgba(2,6,23,.5)] ring-1 ring-white/5 p-8 max-w-4xl mx-auto"
          >
            {/* shimmer superior */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--ba-gold-soft)] to-transparent" />

            <div className="flex flex-col items-center text-center">
              <ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base sm:text-lg max-w-3xl mx-auto"
                aria-label="Qué incluye cada paseo"
              >
                <li className="flex items-start gap-3 text-white/90">
                  <Refrigerator className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                  {t.includes.fridge}
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <Droplets className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                  {t.includes.ice}
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <Droplets className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                  {t.includes.water}
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <Fuel className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                  {t.includes.fuel}
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <LifeBuoy className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                  {t.includes.lifejackets}
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <Volume2 className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                  {t.includes.bluetooth}
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <UserCheck className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                  {t.includes.captain}
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <Sparkles className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                  {t.includes.cleaning}
                </li>
              </ul>

              <p className="mt-8 text-white/70 text-sm sm:text-base max-w-xl mx-auto">
                {t.includes.note}
              </p>
            </div>

            {/* línea inferior de acento */}
            <div className="absolute inset-x-8 bottom-0 h-px bg-white/5 group-hover:bg-[var(--ba-gold-soft)] transition-colors" />
          </div>
        </div>

        {/* ✅ Políticas */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6">
            {t.titlePolicies}
          </h2>

          <div
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--ba-navy)] text-white shadow-[0_10px_30px_-12px_rgba(2,6,23,.5)] ring-1 ring-white/5 p-8 max-w-4xl mx-auto"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--ba-gold-soft)] to-transparent" />

            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base sm:text-lg max-w-2xl mx-auto"
              aria-label="Políticas de los paseos"
            >
              <li className="flex items-start gap-3 text-white/90">
                <Repeat2 className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                {t.policies.weather}
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <Ban className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                {t.policies.substances}
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <AlertTriangle className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                {t.policies.damages}
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <Users className="w-6 h-6 text-[var(--ba-gold)] mt-1" aria-hidden="true" />
                {t.policies.children}
              </li>
            </ul>

            <div className="absolute inset-x-8 bottom-0 h-px bg-white/5 group-hover:bg-[var(--ba-gold-soft)] transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}