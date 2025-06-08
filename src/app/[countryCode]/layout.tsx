import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { countries } from '@/config/countries';
import { notFound } from 'next/navigation';

export default async function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ countryCode: string }>;
}) {
  const { countryCode } = await params;
  
  // Validar que el código de país existe en nuestra configuración
  if (!countries[countryCode]) {
    notFound(); // Redirigir a 404 si el país no existe
  }
  
  return (
    <div className="min-h-screen">
      <Navbar countryCode={countryCode} />
      {children}
      <Footer countryCode={countryCode} />
    </div>
  );
}
