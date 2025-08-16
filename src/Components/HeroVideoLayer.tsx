

import * as React from "react";

/**
 * Capa de video fija detrás del Hero.
 * Soporta fuentes separadas para desktop y mobile.
 */
export interface HeroVideoLayerProps {
  /** Forzar una única fuente (si se provee, ignora mobile/desktop). */
  src?: string;
  /** Video para desktop (default: /videos/bg-hero-v4.mp4) */
  srcDesktop?: string;
  /** Video para mobile (default: /videos/bg-hero-mobile.mp4) */
  srcMobile?: string;
  /** Altura visible del bloque (default: 72vh en mobile, 80vh en desktop) */
  heightClass?: string;
  /** Poster genérico (si se define, tiene prioridad sobre los específicos) */
  poster?: string;
  /** Posters específicos */
  posterDesktop?: string;
  posterMobile?: string;
  /** Breakpoint en px para considerar "mobile" (default: 768) */
  mobileBreakpoint?: number;
  /** Posición del video layer (default: "absolute") */
  position?: "fixed" | "absolute";
}

const HeroVideoLayer: React.FC<HeroVideoLayerProps> = ({
  src,
  srcDesktop = "/videos/bg-hero-v4.mp4",
  srcMobile = "/videos/bg-hero-mobile.mp4",
  heightClass = "h-[72vh] md:h-[80vh]",
  poster,
  posterDesktop = "/images/hero-poster.jpg",
  posterMobile = "/images/hero-poster-mobile.jpg",
  mobileBreakpoint = 768,
  position = "absolute",
}) => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`);
    const set = () => setIsMobile(mq.matches);
    set();
    try {
      mq.addEventListener("change", set);
      return () => mq.removeEventListener("change", set);
    } catch {
      // Safari fallback
      mq.addListener(set);
      return () => mq.removeListener(set);
    }
  }, [mobileBreakpoint]);

  const effectiveSrc = src ?? (isMobile ? srcMobile : srcDesktop);
  const effectivePoster = poster ?? (isMobile ? posterMobile : posterDesktop);

  return (
    <div
      aria-hidden
      className={[
        "pointer-events-none inset-x-0 top-0 z-0 overflow-hidden",
        position === "fixed" ? "fixed" : "absolute",
        heightClass,
      ].join(" ")}
    >
      {/* Video de fondo */}
      <video
        className="min-w-full min-h-full w-auto h-auto object-cover"
        src={effectiveSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={effectivePoster}
      />

      {/* Overlay oscuro para legibilidad del texto */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Glow central suave para estabilizar contraste del titular */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(40%_40%_at_50%_45%,#000_60%,transparent_100%)] bg-black/30" />
    </div>
  );
};

export default HeroVideoLayer;