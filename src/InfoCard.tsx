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
  return (
    <motion.div
      onClick={onClick}
      className="bg-blue-50 rounded-2xl p-6 shadow-xl border border-blue-300 cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl hover:border-blue-500"
      whileHover={{ y: -4 }}
    >
      <div className="text-center">
        <div className="text-blue-600 w-8 h-8 mx-auto mb-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-500 mb-1">{subtitle}</p>
        )}
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        {prices.length > 0 && (
          <div className="mt-2 space-y-1">
            {prices.map((price, index) => (
              <p key={index} className="text-sm text-gray-700">
                {price}
              </p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}