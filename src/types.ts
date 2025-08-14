// SEO genérico para cada sección
export type SectionSEO = {
    title: string;
    description: string;
    keywords: string;
  };
  
  // Sección landing
  export type LandingSection = {
    title: string;
    subtitle: string;
    button: string;
    cta: string;
    ctaButton: string;
    seo: SectionSEO;
  };
  
  // Menú de navegación
  export type NavSection = {
    home: string;
    tours: string;
    boats: string;
    gallery: string;
    details: string;
    contact: string;
    faq: string;
  };
  
  // Sección hero / home
  export type HeroSection = {
    title: string;
    subtitle: string;
    button: string;
  };
  
  export type HomeSection = HeroSection;
  
  // Sección de tipos de paseo
  export type TourCard = {
    title: string;
    description: string;
  };
  
  export type TourTypesSection = {
    title: string;
    card1: TourCard;
    card2: TourCard;
    card3: TourCard;
    seo: SectionSEO;
  };
  
  // Sección detalles de servicios
  export type Includes = {
    fridge: string;
    ice: string;
    water: string;
    fuel: string;
    lifejackets: string;
    bluetooth: string;
    captain: string;
    cleaning: string;
    note: string;
  };
  
export type Policies = {
    weather: string;
    substances: string;
    damages: string;
    children: string;
};
  
export type DetailsSection = {
  includesTitle: string;
  titleIncludes: string;
  policiesTitle: string;
  titlePolicies: string;
  includes: Includes;
  policies: Policies;
  seo: SectionSEO;
};
  
  // Sección contacto
  export type ContactFormLabels = {
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    error: string;
    invalidEmail: string;
  };
  
  export type ContactSection = {
    title: string;
    location: string;
    email: string;
    phone: string;
    hours: string;
    message: string;
    note: string;
    form: ContactFormLabels;
    seo: SectionSEO;
  };
  
  // Galería
  export type GallerySection = {
    title: string;
    meridian: string;
    sundancer: string;
    yamaha: string;
    seo: SectionSEO;
  };
  
  // Servicios por barco
  export type BoatCard = {
    title: string;
    subtitle: string;
    description: string;
    prices: {
      label: string;
      list: string[];
    };
  };
  
  export type BoatServicesSection = {
    title: string;
    seo: SectionSEO;
    meridian: BoatCard;
    sundancer: BoatCard;
    yamaha: BoatCard;
  };
  
  // FAQ
  export type FaqQuestion = {
    question: string;
    answer: string;
  };
  
  export type FaqSection = {
    title: string;
    questions: FaqQuestion[];
    // seo?: SectionSEO;
  };
  
  // Footer ✅
  export type FooterSection = {
    rights: string;
  };
  
  // Idiomas
  export type LanguageKeys = "es" | "en" | "pt";
  
  // Tipo principal para cada idioma
  export type Translations = {
    landing: LandingSection;
    nav: NavSection;
    home: HomeSection;
    hero: HeroSection;
    tourTypes: TourTypesSection;
    details: DetailsSection;
    contact: ContactSection;
    gallery: GallerySection;
    boatServices: BoatServicesSection;
    faq: FaqSection;
    footer: FooterSection; // ✅ agregado
  };
  
  // ✅ Exportación explícita para que puedas importar sin errores