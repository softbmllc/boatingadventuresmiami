import { useEffect, useState } from "react";
import { Globe, Instagram, Menu, X } from "lucide-react";

export default function HeaderNav() {
  const [language, setLanguage] = useState("es");
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  // Elevar header al hacer scroll
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Inicio" },
    { href: "#tours", label: "Experiencias" },
    { href: "#boats", label: "Nuestros Botes" },
    { href: "#gallery", label: "Galería" },
    { href: "#services", label: "Servicios" },
    { href: "#contact", label: "Contacto" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        "backdrop-blur supports-[backdrop-filter]:bg-white/5",
        elevated ? "shadow-[0_8px_24px_-12px_rgba(2,6,23,.4)]" : "shadow-none",
      ].join(" ")}
      role="navigation"
      aria-label="Principal"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand / Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[var(--ba-navy)] ring-1 ring-white/10 flex items-center justify-center">
              {/* Marca minimal (iniciales o ícono) */}
              <span className="text-[var(--ba-gold)] font-bold">BA</span>
            </div>
            <span className="hidden sm:inline text-white/90 font-semibold tracking-wide">
              Boating Adventures
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-white/85 font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/boating.adventuresmiami/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white"
              aria-label="Abrir Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>

            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1 rounded-md px-2 py-1 text-white/85 hover:text-white hover:bg-white/10 ring-1 ring-white/10"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label="Cambiar idioma"
              >
                <Globe className="h-4 w-4" /> {language.toUpperCase()}
              </button>
              {langOpen && (
                <div
                  role="listbox"
                  className="absolute right-0 mt-2 w-32 rounded-md bg-[var(--ba-navy)] text-white/90 shadow-lg ring-1 ring-white/10 overflow-hidden z-50"
                >
                  {[
                    { code: "es", label: "Español" },
                    { code: "en", label: "English" },
                    { code: "pt", label: "Português" },
                  ].map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => handleLanguageChange(opt.code)}
                      className="w-full px-3 py-2 text-left hover:bg-white/10"
                      role="option"
                      aria-selected={language === opt.code}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/85 hover:text-white hover:bg-white/10 ring-1 ring-white/10"
              aria-label="Abrir menú"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-4">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
