import { CountryParams, generateStaticParams } from "../page.params";
import VerificationPage from "@/components/pages/verification-page";
import VeryCertsMessage from "@/components/pages/verycerts-message";

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

export default async function VerificacionPage({ params }: CountryParams) {
  const { countryCode } = await params;
  
  if (countryCode === "pe") {
    return <VerificationPage />;
  } else {
    return <VeryCertsMessage countryCode={countryCode} />;
  }
}