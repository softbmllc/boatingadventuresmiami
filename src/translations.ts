import { Translations, LanguageKeys } from "./types";

const translations: Record<LanguageKeys, Translations> = {
  es: {
    landing: {
      title: "Tu experiencia en barco por Miami comienza acá",
      subtitle: "Reservá fácil, rápido y 100% por WhatsApp",
      button: "Reservar ahora",
      cta: "¿Listo para navegar?",
      ctaButton: "Escribinos por WhatsApp",
      seo: {
        title: "Paseos en barco en Miami | Boating Adventures",
        description:
          "Reservá tu paseo privado en barco por Miami. Atardeceres, deportes acuáticos y diversión en el sandbar.",
        keywords: "miami, barco, alquiler, lancha, paseo, privado, sandbar",
      },
    },
    nav: {
      home: "Inicio",
      tours: "Experiencias",
      boats: "Nuestros Botes",
      gallery: "Galería",
      details: "Servicios",
      contact: "Contacto",
      faq: "FAQ",
    },
    home: {
      title: "Explorá Miami desde el agua como nunca antes",
      subtitle:
        "Disfrutá de Miami desde el agua con paseos privados, deportes acuáticos y puestas de sol en entornos únicos.",
      button: "Reservar",
    },
    hero: {
      title: "Explorá Miami desde el agua como nunca antes",
      subtitle:
        "Alquiler de botes privados para grupos. Atardeceres, deportes acuáticos y experiencias únicas en el Sandbar.",
      button: "Reservar",
    },
    tourTypes: {
      title: "Elige tu experiencia ideal en el agua",
      card1: {
        title: "Sandbar & Fiesta",
        description:
          "Sol, música y buena onda en Miami. Ideal para grupos que buscan diversión asegurada.",
      },
      card2: {
        title: "Atardecer Relax",
        description:
          "Un paseo relajado al atardecer, perfecto para disfrutar en pareja o con amigos. Champagne opcional.",
      },
      card3: {
        title: "Deportes Acuáticos",
        description:
          "Wakeboard, donut y otras aventuras para los que buscan adrenalina.",
      },
      seo: {
        title: "Tipos de paseo en barco en Miami | Boating Adventures",
        description:
          "Descubrí nuestros paseos: fiesta en el sandbar, atardecer romántico o deportes acuáticos. El plan perfecto en barco te espera en Miami.",
        keywords:
          "fiesta en barco, paseo al atardecer, deportes acuáticos, sandbar, miami, barco privado",
      },
    },
    details: {
      includesTitle: "¿Qué incluye cada paseo?",
      titleIncludes: "Todo lo que está incluido en tu paseo",
      includes: {
        fridge: "Heladera",
        ice: "Hielo",
        water: "Agua",
        fuel: "Combustible",
        lifejackets: "Chalecos salvavidas",
        bluetooth: "Música con Bluetooth",
        captain: "Capitán profesional",
        cleaning: "Limpieza posterior",
        note: "Si el clima no es el adecuado, el paseo se reprogramará sin costo adicional.",
      },
      policiesTitle: "Políticas",
      titlePolicies: "Políticas simples y claras",
      policies: {
        weather: "Reprogramación por mal tiempo",
        substances: "No se permiten sustancias ilegales",
        damages: "Daños evaluados en el momento",
        children: "Adecuado para todas las edades",
        return: "El paseo será reembolsado si se cancela a tiempo",
      },
      seo: {
        title: "¿Qué incluye cada paseo? | Boating Adventures Miami",
        description:
          "Descubrí todo lo que está incluido en nuestros paseos en barco por Miami. Desde música con Bluetooth hasta limpieza posterior, te contamos cada detalle.",
        keywords:
          "qué incluye, paseo en barco, servicios, música, hielo, limpieza, seguridad, miami",
      },
    },
    contact: {
      title: "¿Querés reservar o tenés dudas? Escribinos",
      location: "Miami, FL",
      email: "info@boatingadventuresmiami.com",
      phone: "754-465-3318",
      hours: "Atención 24/7",
      message: "¡Gracias por tu mensaje! Te responderemos pronto.",
      note: "También podés escribirnos por Instagram o WhatsApp. ¡Te responderemos a la brevedad!",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar mensaje",
        error: "Este campo es obligatorio",
        invalidEmail: "Correo electrónico inválido",
      },
      seo: {
        title: "Contacto | Boating Adventures Miami",
        description:
          "¿Querés reservar o tenés dudas? Escribinos por WhatsApp o completá el formulario. Estamos disponibles 24/7 para ayudarte.",
        keywords:
          "contacto, whatsapp, reservas, paseo en barco, miami, formulario, atención al cliente",
      },
    },
    gallery: {
      title: "Descubrí cada detalle en fotos reales",
      meridian: "Meridian 42'",
      sundancer: "Sundancer 36'",
      yamaha: "Yamaha AR195",
      seo: {
        title: "Galería de fotos de paseos en barco por Miami | Boating Adventures",
        description:
          "Explorá imágenes reales de nuestros paseos en barco por Miami. Conocé el Meridian 42', Sundancer 36' y Yamaha AR195 en acción.",
        keywords:
          "galería, fotos, barco, miami, meridian, sundancer, yamaha, paseo en barco",
      },
    },
    boatServices: {
      title: "Tu bote ideal te espera",
      seo: {
        title: "Nuestros botes en Miami | Boating Adventures",
        description:
          "Conocé los botes disponibles para tus paseos por Miami. Capacidad, precios y servicios de cada uno: Meridian, Sundancer y Yamaha Sport.",
        keywords:
          "botes, barcos, alquiler, miami, meridian, sundancer, yamaha, lancha",
      },
      meridian: {
        title: "Meridian 42'",
        subtitle: "Hasta 13 personas",
        description:
          "Opción premium para celebraciones. Brickell, Venetian Islands, Key Biscayne.",
        prices: {
          label: "Precios:",
          list: ["2h $800", "4h $1300", "5h $1400", "6h $1500", "7h $1700", "8h $1900"],
        },
      },
      sundancer: {
        title: "Sundancer 36'",
        subtitle: "Hasta 13 personas",
        description:
          "Ideal para eventos, cumpleaños y grupos grandes. Key Biscayne, Monument Island, Brickell.",
        prices: {
          label: "Precios:",
          list: ["2h $500", "4h $800", "5h $900", "6h $1000", "7h $1100", "8h $1300"],
        },
      },
      yamaha: {
        title: "Yamaha Sport 20'",
        subtitle: "Hasta 6 personas",
        description: "Ideal para deportes acuáticos y sandbar. Incluye donut, kneeboard, música y más.",
        prices: {
          label: "Precios:",

          list: ["4h $450", "6h $600"]
        }
      }
    },
    faq: {
      title: "Preguntas Frecuentes",
      questions: [
        {
          question: "¿Qué incluye el alquiler del bote?",
          answer: "Todos nuestros paseos incluyen heladera con hielo, agua, combustible, chalecos salvavidas, música con Bluetooth, capitán profesional y limpieza posterior.",
        },
        {
          question: "¿Puedo hacer deportes acuáticos con ustedes?",
          answer: "¡Sí! Nuestro Yamaha AR195 es ideal para deportes como donut inflable, kneeboard y más. Sólo tenés que indicarlo al momento de reservar.",
        },
        {
          question: "¿Qué zonas recorren?",
          answer: "Navegamos por Key Biscayne, Brickell, Venetian Islands y Haulover. Las rutas dependen del barco elegido y la duración del paseo.",
        },
        {
          question: "Somos un grupo grande, ¿cuál es el mejor barco para nosotros?",
          answer: "Los barcos Sundancer 36' y Meridian 42' son ideales para grupos de hasta 13 personas. Perfectos para celebraciones, cumpleaños o salidas en grupo.",
        },
        {
          question: "¿Está incluido el capitán en el precio?",
          answer: "Sí, todos nuestros paseos incluyen capitán profesional. No es necesario que tengas experiencia previa navegando.",
        },
        {
          question: "¿Puedo llevar comida o bebida a bordo?",
          answer: "Claro que sí. Podés llevar snacks, cerveza o vino. Sólo te pedimos evitar botellas de vidrio por seguridad.",
        },
        {
          question: "¿Qué pasa si llueve o el clima está mal?",
          answer: "En caso de mal clima, el paseo se reprograma sin costo. Si no podés reprogramar, puede evaluarse una devolución parcial.",
        },
        {
          question: "¿Cómo se realiza la reserva?",
          answer: "Se coordina día y horario y se realiza una seña del 50% del valor por Zelle, CashApp o Venmo. El saldo restante se abona el mismo día del paseo.",
        },
      ],
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },

  en: {
    landing: {
      title: "Your boat experience in Miami starts here",
      subtitle: "Book easily, quickly and 100% via WhatsApp",
      button: "Book Now",
      cta: "Ready to sail?",
      ctaButton: "Message us on WhatsApp",
      seo: {
        title: "Boat Tours in Miami | Boating Adventures",
        description: "Book your private boat tour in Miami. Sunsets, water sports and sandbar fun.",
        keywords: "miami, boat, rental, paseo, alquiler, lancha"
      }
    },
    nav: {
      home: "Home",
      tours: "Experiences",
      boats: "Our Boats",
      gallery: "Gallery",
      details: "Services",
      contact: "Contact",
      faq: "FAQ",
    },
    home: {
      title: "Explore Miami from the water like never before",
      subtitle: "Enjoy Miami from the water with private boat rides, water sports, and sunsets in unique surroundings.",
      button: "Book Now",

    },
    hero: {
      title: "Explore Miami from the water like never before",
      subtitle:
        "Private boat rentals for groups. Sunsets, water sports, and unique experiences at the Sandbar.",
      button: "Book Now",
    },
    tourTypes: {
      title: "Live the experience your way",
      card1: {
        title: "Sandbar & Party",
        description: "Sun, music and good vibes in Miami. Ideal for groups looking for guaranteed fun.",
      },
      card2: {
        title: "Sunset Relax",
        description: "A relaxing sunset ride, perfect for couples or friends. Optional champagne.",
      },
      card3: {
        title: "Water Sports",
        description: "Wakeboard, donut and more adventures for adrenaline seekers.",
      },
      seo: {
        title: "Boat tour types in Miami | Boating Adventures",
        description: "Discover your perfect experience: party at the sandbar, romantic sunset, or adrenaline-filled water sports. Your private boat trip in Miami awaits.",
        keywords: "boat party, sunset cruise, water sports, sandbar, miami, private boat"
      }
    },
    details: {
      includesTitle: "Everything included in your trip",
      titleIncludes: "Everything included in your ride",
      includes: {
        fridge: "Fridge",
        ice: "Ice",
        water: "Water",
        fuel: "Fuel",
        lifejackets: "Life jackets",
        bluetooth: "Bluetooth music",
        captain: "Professional captain",
        cleaning: "Post-trip cleaning",
        note: "If the weather is not suitable, the trip will be rescheduled at no additional cost.",
      },
      policiesTitle: "Simple and clear policies",
      titlePolicies: "Important policies",
      policies: {
        weather: "Rescheduling due to bad weather",
        substances: "No illegal substances allowed",
        damages: "Damages evaluated on the spot",
        children: "Suitable for all ages",
        return: "The trip will be refunded if canceled on time",
      },
      seo: {
        title: "What's included in your Miami boat tour | Boating Adventures",
        description: "Find out everything included in our private boat tours in Miami. From Bluetooth music and ice to a professional captain and post-trip cleaning.",
        keywords: "what's included, boat tour, services, bluetooth, ice, cleaning, captain, safety, miami"
      }
    },
    contact: {
      title: "Want to book or have questions? Write to us",
      location: "Miami, FL",
      email: "info@boatingadventuresmiami.com",
      phone: "754-465-3318",
      hours: "Open 24/7",
      message: "Thank you for your message! We'll get back to you soon.",
      note: "You can also reach us on Instagram or WhatsApp. We'll reply shortly!",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send message",
        error: "This field is required",
        invalidEmail: "Invalid email address",
      },
      seo: {
        title: "Contact | Boating Adventures Miami",
        description: "Want to book or have questions? Write to us on WhatsApp or fill out the form. We're available 24/7 to help you.",
        keywords: "contact, whatsapp, booking, boat tour, miami, form, customer service"
      }
    },
    gallery: {
      title: "Discover every detail in real photos",
      meridian: "Meridian 42'",
      sundancer: "Sundancer 36'",
      yamaha: "Yamaha AR195",
      seo: {
        title: "Photo gallery of boat tours in Miami | Boating Adventures",
        description: "Check out real images of our boat tours in Miami. See the Meridian 42', Sundancer 36', and Yamaha AR195 in action.",
        keywords: "gallery, photos, boat, miami, meridian, sundancer, yamaha, boat tour"
      }
    },
    boatServices: {
      title: "Your perfect boat is here",
      seo: {
        title: "Private boat rentals in Miami | Our Boats | Boating Adventures",
        description: "Explore our fleet of private boats for rent in Miami. Discover the Meridian 42', Sundancer 36' and Yamaha Sport 20'.",
        keywords: "miami boats, boat rental, private boats, meridian, sundancer, yamaha, rent a boat miami"
      },
      meridian: {
        title: "Meridian 42'",
        subtitle: "Up to 13 people",
        description: "Premium option for celebrations. Brickell, Venetian Islands, Key Biscayne.",
        prices: {
          label: "Prices:",
          list: ["2h $800", "4h $1300", "5h $1400", "6h $1500", "7h $1700", "8h $1900"]
        }
      },
      sundancer: {
        title: "Sundancer 36'",
        subtitle: "Up to 13 people",
        description: "Ideal for events, birthdays, and large groups. Key Biscayne, Monument Island, Brickell.",
        prices: {
          label: "Prices:",
          list: ["2h $500", "4h $800", "5h $900", "6h $1000", "7h $1100", "8h $1300"]
        }
      },
      yamaha: {
        title: "Yamaha Sport 20'",
        subtitle: "Up to 6 people",
        description: "Perfect for water sports and sandbar fun. Includes donut, kneeboard, music, and more.",
        prices: {
          label: "Prices:",
          list: ["4h $450", "6h $600"]
        }
      }
    },
    faq: {
      title: "FAQ",
      questions: [
        {
          question: "What is included with the boat rental?",
          answer: "All our trips include a cooler with ice, water, fuel, life jackets, Bluetooth music, a professional captain, and post-trip cleaning.",
        },
        {
          question: "Can I do water sports with you?",
          answer: "Yes! Our Yamaha AR195 is perfect for activities like inflatable donut, kneeboard, and more. Just let us know when booking.",
        },
        {
          question: "Which areas do you cover?",
          answer: "We sail through Key Biscayne, Brickell, Venetian Islands, and Haulover. Routes depend on the boat and duration selected.",
        },
        {
          question: "We are a large group, which boat is best for us?",
          answer: "The Sundancer 36' and Meridian 42' boats are perfect for groups of up to 13 people. Great for celebrations or outings.",
        },
        {
          question: "Is the captain included in the price?",
          answer: "Yes, all trips include a professional captain. No previous boating experience is needed.",
        },
        {
          question: "Can I bring food or drinks on board?",
          answer: "Yes, you can bring snacks, beer, or wine. We just ask you to avoid glass bottles for safety.",
        },
        {
          question: "What happens if it rains or the weather is bad?",
          answer: "If the weather doesn’t allow sailing, the trip is rescheduled at no cost. If rescheduling is not possible, a partial refund may be considered.",
        },
        {
          question: "How do I book a trip?",
          answer: "We coordinate the date and time, and a 50% deposit is paid via Zelle, CashApp, or Venmo. The balance is due on the day of the trip.",
        },
      ],
    },
    footer: {
      rights: "All rights reserved.",
    },
  },

  pt: {
    landing: {
      title: "Sua experiência de barco em Miami começa aqui",
      subtitle: "Reserve fácil, rápido e 100% pelo WhatsApp",
      button: "Reservar agora",
      cta: "Pronto para navegar?",
      ctaButton: "Fale conosco no WhatsApp",
      seo: {
        title: "Passeios de barco em Miami | Boating Adventures",
        description: "Reserve seu passeio de barco privado em Miami. Pôr do sol, esportes aquáticos e diversão no sandbar.",
        keywords: "miami, barco, aluguel, lancha, passeio, privado, sandbar"
      }
    },

    nav: {
      home: "Início",
      tours: "Experiências",
      boats: "Nossos Barcos",
      gallery: "Galeria",
      details: "Serviços",
      contact: "Contato",
      faq: "FAQ"
    },
    home: {
      title: "Explore Miami pelas águas como nunca antes",
      subtitle: "Aproveite Miami desde a água com passeios privados, esportes aquáticos e pores do sol em cenários únicos.",
      button: "Reservar"
    },
    hero: {
      title: "Explore Miami da água como nunca antes",
      subtitle: "Aluguel de barcos privados para grupos. Pôr do sol, esportes aquáticos e experiências únicas no Sandbar.",
      button: "Reservar"
    },
    tourTypes: {
      title: "Viva a experiência do seu jeito",
      card1: {
        title: "Pôr do Sol Relax",
        description: "Um passeio relaxante ao pôr do sol, perfeito para casais ou amigos. Champagne opcional."
      },
      card2: {
        title: "Ilhas & Diversão",
        description: "Sol, música e boas vibrações em Miami. Ideal para grupos que querem diversão garantida."
      },
      card3: {
        title: "Esportes Aquáticos",
        description: "Wakeboard, boia inflável e outras aventuras para quem busca adrenalina."
      },
      seo: {
        title: "Tipos de passeio de barco em Miami | Boating Adventures",
        description: "Conheça nossas experiências: festa no sandbar, passeio romântico ao pôr do sol ou esportes aquáticos cheios de adrenalina. O passeio ideal de barco em Miami te espera.",
        keywords: "passeio de barco, sandbar, pôr do sol, esportes aquáticos, miami, barco privado"
      }
    },
    details: {
      includesTitle: "Tudo que está incluso no seu passeio",
      titleIncludes: "Tudo que está incluído no seu passeio",
      includes: {
        fridge: "Geladeira",
        ice: "Gelo",
        water: "Água",
        fuel: "Combustível",
        lifejackets: "Coletes salva-vidas",
        bluetooth: "Música com Bluetooth",
        captain: "Capitão profissional",
        cleaning: "Limpeza posterior",
        note: "Se o clima não for adequado, o passeio será remarcado sem custo adicional."
      },
      policiesTitle: "Políticas simples e claras",
      titlePolicies: "Políticas importantes",
      policies: {
        weather: "Remarcação por mau tempo",
        substances: "Substâncias ilegais não são permitidas",
        damages: "Danos avaliados na hora",
        children: "Adequado para todas as idades",
        return: "O passeio será reembolsado se for cancelado com antecedência"
      },
      seo: {
        title: "O que está incluído no passeio de barco em Miami | Boating Adventures",
        description: "Descubra tudo o que está incluído em nossos passeios de barco em Miami. Capitão, música, gelo, limpeza e muito mais para sua experiência perfeita.",
        keywords: "o que inclui, passeio de barco, serviços, capitão, bluetooth, gelo, limpeza, miami, segurança"
      }
    },
    contact: {
      title: "Quer reservar ou tem dúvidas? Escreva pra gente",
      location: "Miami, FL",
      email: "info@boatingadventuresmiami.com",
      phone: "754-465-3318",
      hours: "Atendimento 24/7",
      message: "Obrigado pela sua mensagem! Responderemos em breve.",
      note: "Você também pode nos escrever pelo Instagram ou WhatsApp. Responderemos em breve!",
      form: {
        name: "Nome",
        email: "Email",
        subject: "Assunto",
        message: "Mensagem",
        send: "Enviar mensagem",
        error: "Este campo é obrigatório",
        invalidEmail: "Endereço de email inválido"
      },
      seo: {
        title: "Contato | Boating Adventures Miami",
        description: "Quer reservar ou tem dúvidas? Escreva para nós pelo WhatsApp ou preencha o formulário. Estamos disponíveis 24/7 para ajudar você.",
        keywords: "contato, whatsapp, reservas, passeio de barco, miami, formulário, atendimento"
      }
    },
    gallery: {
      title: "Descubra todos os detalhes em fotos reais",
      meridian: "Meridian 42'",
      sundancer: "Sundancer 36'",
      yamaha: "Yamaha AR195",
      seo: {
        title: "Galeria de fotos dos passeios de barco em Miami | Boating Adventures",
        description: "Veja fotos reais dos nossos passeios de barco em Miami. Conheça o Meridian 42', Sundancer 36' e Yamaha AR195 em ação.",
        keywords: "galeria, fotos, barco, miami, meridian, sundancer, yamaha, passeio de barco"
      }
    },
    boatServices: {
      title: "O barco ideal para você",
      seo: {
        title: "Aluguel de barcos privados em Miami | Nossos Barcos | Boating Adventures",
        description: "Conheça nossa frota de barcos para aluguel em Miami. Descubra o Meridian 42', Sundancer 36' e Yamaha Sport 20'.",
        keywords: "barcos miami, aluguel de barco, barco privado, meridian, sundancer, yamaha, passeio de barco miami"
      },
      meridian: {
        title: "Meridian 42'",
        subtitle: "Até 13 pessoas",
        description: "Opção premium para celebrações. Brickell, Venetian Islands, Key Biscayne.",
        prices: {
          label: "Preços:",
          list: ["2h $800", "4h $1300", "5h $1400", "6h $1500", "7h $1700", "8h $1900"]
        }
      },
      sundancer: {
        title: "Sundancer 36'",
        subtitle: "Até 13 pessoas",
        description: "Ideal para eventos, aniversários e grupos grandes. Key Biscayne, Monument Island, Brickell.",
        prices: {
          label: "Preços:",
          list: ["2h $500", "4h $800", "5h $900", "6h $1000", "7h $1100", "8h $1300"]
        }
      },
      yamaha: {
        title: "Yamaha Sport 20'",
        subtitle: "Até 6 pessoas",
        description: "Perfeito para esportes aquáticos e diversão no sandbar. Inclui boia, kneeboard, música e mais.",
        prices: {
          label: "Preços:",
          list: ["4h $450", "6h $600"]
        }
      }
    },
    faq: {
      title: "Dúvidas frequentes antes de reservar",
      questions: [
        {
          question: "O que está incluído no aluguel do barco?",
          answer: "Todos os nossos passeios incluem geladeira com gelo, água, combustível, coletes salva-vidas, música com Bluetooth, capitão profissional e limpeza após o passeio."
        },
        {
          question: "Posso praticar esportes aquáticos com vocês?",
          answer: "Sim! Nosso Yamaha AR195 é ideal para atividades como boia inflável, kneeboard e mais. É só avisar no momento da reserva."
        },
        {
          question: "Quais áreas vocês percorrem?",
          answer: "Navegamos por Key Biscayne, Brickell, Venetian Islands e Haulover. As rotas variam conforme o barco e a duração do passeio."
        },
        {
          question: "Somos um grupo grande, qual o melhor barco para nós?",
          answer: "Os barcos Sundancer 36' e Meridian 42' são ideais para grupos de até 13 pessoas. Perfeitos para festas e comemorações."
        },
        {
          question: "O capitão está incluído no valor?",
          answer: "Sim, todos os nossos passeios incluem um capitão profissional. Não é necessário ter experiência prévia."
        },
        {
          question: "Posso levar comida ou bebida a bordo?",
          answer: "Claro! Você pode levar petiscos, cerveja ou vinho. Apenas evite garrafas de vidro por segurança."
        },
        {
          question: "E se chover ou o tempo estiver ruim?",
          answer: "Em caso de mau tempo, o passeio será remarcado sem custo. Se não puder remarcar, poderá ser avaliado um reembolso parcial."
        },
        {
          question: "Como faço para reservar?",
          answer: "Coordenamos o dia e o horário e você faz um depósito de 50% via Zelle, CashApp ou Venmo. O saldo é pago no dia do passeio."
        }
      ]
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  };
  
  export default translations;1
