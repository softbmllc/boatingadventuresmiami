import { motion } from "framer-motion";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  prices?: string[];
  onClick?: () => void;
}

export default function InfoCard({
  icon,
  title,
  subtitle,
  description,
  prices = [],
  onClick,
}: InfoCardProps) {
  if (!title || !description) return null;

  return (
    <motion.div
      onClick={onClick}
      className="bg-[#0c1e2b] text-white rounded-2xl p-6 shadow-xl cursor-pointer 
                 transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                 hover:bg-[#0c1e2b]/90 focus:outline-none focus:ring-2 focus:ring-white/30"
      whileHover={{ y: -4 }}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <div className="text-center">
        <div className="text-yellow-400 w-8 h-8 mx-auto mb-3">{icon}</div>
        <h3 className="text-xl font-semibold tracking-wide mb-1">{title}</h3>

        {subtitle && (
          <p className="text-sm text-white/80 mb-1">{subtitle}</p>
        )}

        <p className="text-sm text-white/90 leading-relaxed">{description}</p>

        {prices.length > 0 && (
          <div className="mt-2 space-y-1">
            {prices.map((price, index) => (
              <p key={index} className="text-sm text-white/80">
                {price}
              </p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}