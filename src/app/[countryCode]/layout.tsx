import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { countries } from '@/config/countries';
import { notFound } from 'next/navigation';

export default function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { countryCode: string };
}) {
  // Validar que el código de país existe en nuestra configuración
  if (!countries[params.countryCode]) {
    notFound(); // Redirigir a 404 si el país no existe
  }
  return (
    <div className="min-h-screen">
      <Navbar countryCode={params.countryCode} />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          {children}
        </div>
      </main>
      <Footer countryCode={params.countryCode} />
    </div>
  );
}
