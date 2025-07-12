import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12 text-center text-sm">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-2 sm:gap-4">
          <p>© 2025 Boating Adventures Miami</p>
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>Made with 💻 by</span>
            <a
              href="https://www.devrodri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors font-semibold"
            >
              Rodrigo Opalo
            </a>
            <a
              href="https://wa.me/17544653318"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/boating.adventuresmiami/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}