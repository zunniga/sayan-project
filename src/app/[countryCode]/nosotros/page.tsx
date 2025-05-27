import { CountryParams, generateStaticParams } from '../page.params';
import { countries } from '@/config/countries';
import AboutLayout from '@/components/pages/about-layout';

// Importar datos específicos por país
import {
  heroStatsCO,
  teamMembersCO,
  certificationsCO,
  recognitionsCO,
  partnershipsCO,
  socialProgramsCO,
  sustainabilityInitiativesCO,
  impactNumbersCO,
} from '@/mock/nosotros/colombia-data';

import {
  heroStatsPE,
  teamMembersPE,
  certificationsPE,
  recognitionsPE,
  partnershipsPE,
  socialProgramsPE,
  sustainabilityInitiativesPE,
  impactNumbersPE,
} from '@/mock/nosotros/peru-data';

// Exportamos esta función para generar rutas estáticas
export { generateStaticParams };

export default async function NosotrosPage({ params }: CountryParams) {
  const { countryCode } = await params;
  
  // Obtener la configuración del país desde los parámetros
  const country = countries[countryCode];

  // Seleccionar datos según el país
  const getData = () => {
    if (countryCode === 'pe') {
      return {
        heroStats: heroStatsPE,
        teamMembers: teamMembersPE,
        certifications: certificationsPE,
        recognitions: recognitionsPE,
        partnerships: partnershipsPE,
        socialPrograms: socialProgramsPE,
        sustainabilityInitiatives: sustainabilityInitiativesPE,
        impactNumbers: impactNumbersPE,
      };
    } else {
      return {
        heroStats: heroStatsCO,
        teamMembers: teamMembersCO,
        certifications: certificationsCO,
        recognitions: recognitionsCO,
        partnerships: partnershipsCO,
        socialPrograms: socialProgramsCO,
        sustainabilityInitiatives: sustainabilityInitiativesCO,
        impactNumbers: impactNumbersCO,
      };
    }
  };

  const data = getData();
    return (
    <AboutLayout
      countryCode={countryCode}
      countryName={country.name}
      heroStats={data.heroStats}
      teamMembers={data.teamMembers}
      certifications={data.certifications}
      recognitions={data.recognitions}
      partnerships={data.partnerships}
      socialPrograms={data.socialPrograms}
      sustainabilityInitiatives={data.sustainabilityInitiatives}
      impactNumbers={data.impactNumbers}
    />
  );
}
