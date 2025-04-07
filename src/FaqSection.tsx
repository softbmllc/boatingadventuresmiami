import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language].faq;

  const toggleQuestion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-white py-20 px-6 text-gray-800 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="faq-title"
          className="text-4xl sm:text-5xl font-extrabold text-center mb-14 text-gray-800 drop-shadow-md tracking-tight uppercase"
        >
          {t.title}
        </h2>

        <div className="space-y-5">
          {t.questions.map((q, index) => {
            const isOpen = activeIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl shadow-md p-5 transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center font-semibold text-left text-gray-800 text-lg hover:text-blue-600"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  aria-labelledby={questionId}
                  role="button"
                >
                  <h3 id={questionId}>{q.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && (
                  <p
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="mt-4 text-gray-600 text-base leading-relaxed"
                  >
                    {q.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}