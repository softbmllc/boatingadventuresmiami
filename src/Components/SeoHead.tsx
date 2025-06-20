// src/Components/SeoHead.tsx
import { Helmet } from "react-helmet-async";

export type SeoHeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
};

export default function SeoHead({
  title = "Boating Adventures Miami | Paseos en barco",
  description = "Disfrutá paseos premium en barco por Miami. Música, relax, deportes acuáticos y más.",
  keywords = "paseos en barco, miami, sandbar, paseo privado, deportes acuáticos, sunset tour",
}: SeoHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}