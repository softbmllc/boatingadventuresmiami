import { motion } from "framer-motion";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  prices?: string[];
  onClick?: () => void;
  className?: string; // optional extension hook
  pricesOrientation?: "row" | "column";
}

export default function InfoCard({
  icon,
  title,
  subtitle,
  description,
  prices = [],
  onClick,
  className = "",
  pricesOrientation = "row",
}: InfoCardProps) {
  const clickable = typeof onClick === "function";

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      tabIndex={clickable ? 0 : -1}
      role={clickable ? "button" : "article"}
      aria-label={title}
      className={[
        // container
        "group relative overflow-hidden rounded-2xl",
        "border border-white/10 bg-[var(--ba-navy)] text-white",
        "shadow-[0_10px_30px_-12px_rgba(2,6,23,.5)] ring-1 ring-white/5",
        "transition-all duration-300 hover:-translate-y-0.5",
        "hover:shadow-[0_18px_40px_-12px_rgba(2,6,23,.8)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ba-gold)]",
        // decorative top shimmer
        "before:absolute before:inset-x-0 before:top-0 before:h-px",
        "before:bg-gradient-to-r before:from-transparent before:via-[var(--ba-gold-soft)] before:to-transparent",
        "p-6",
        className,
      ].join(" ")}
    >
      {/* subtle corner glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,rgba(201,163,58,0.15),transparent)] blur-md" />

      <div className="relative text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10">
          <div className="text-[var(--ba-gold)]">{icon}</div>
        </div>

        <h3 className="text-lg md:text-xl font-semibold tracking-wide mb-1">{title}</h3>

        {subtitle && (
          <p className="text-xs uppercase tracking-widest text-white/60 mb-1">{subtitle}</p>
        )}

        <p className="text-sm text-white/85 leading-relaxed text-white/90">
          {description}
        </p>

        {prices.length > 0 && (
          <div className={["mt-4 flex flex-wrap items-center justify-center gap-2", pricesOrientation === "column" ? "flex-col gap-1" : "flex-row"].join(" ")}>
            {prices.map((price, index) => (
              <span
                key={index}
                className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/85 ring-1 ring-white/10 group-hover:bg-white/10"
              >
                {price}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* bottom accent line that lights up on hover */}
      <div className="absolute inset-x-6 bottom-0 h-px bg-white/5 group-hover:bg-[var(--ba-gold-soft)] transition-colors" />
    </motion.div>
  );
}