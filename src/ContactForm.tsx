import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { language } = useLanguage();
  const t = translations[language].contact;

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = {
      nombre: form.nombre.value.trim(),
      email: form.email.value.trim(),
      asunto: form.asunto.value.trim(),
      mensaje: form.mensaje.value.trim(),
    };

    const newErrors: { [key: string]: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = t.form.error;
    });

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = t.form.invalidEmail || "Email inválido";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    fetch("https://formsubmit.co/ajax/info@boatingadventuresmiami.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nombre: formData.nombre,
        Email: formData.email,
        Asunto: formData.asunto,
        Mensaje: formData.mensaje,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-white py-20 px-6 text-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="contact-title"
          className="text-4xl sm:text-5xl font-extrabold text-center mb-14 text-gray-800 drop-shadow-md tracking-tight uppercase"
        >
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6 text-lg" aria-label="Información de contacto">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <p><strong>{t.location}</strong></p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <p><strong>{t.email}</strong></p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <p><strong>{t.phone}</strong></p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-600" />
              <p><strong>{t.hours}</strong></p>
            </div>
            <p className="text-sm text-gray-500 mt-2">{t.note}</p>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
            aria-label="Formulario de contacto"
          >
            <div>
              <label htmlFor="nombre" className="sr-only">{t.form.name}</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder={t.form.name}
                autoComplete="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.nombre && <p className="text-red-600 text-sm mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">{t.form.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.form.email}
                autoComplete="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="asunto" className="sr-only">{t.form.subject}</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder={t.form.subject}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.asunto && <p className="text-red-600 text-sm mt-1">{errors.asunto}</p>}
            </div>

            <div>
              <label htmlFor="mensaje" className="sr-only">{t.form.message}</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder={t.form.message}
                rows={5}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {errors.mensaje && <p className="text-red-600 text-sm mt-1">{errors.mensaje}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {t.form.send}
            </button>

            {submitted && (
              <div className="mt-4 bg-green-100 border border-green-300 text-green-800 p-3 rounded text-center shadow-md">
                {t.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}