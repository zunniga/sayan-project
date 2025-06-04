// Tipos para la respuesta de la API de diplomas
export interface GraduateApiResponse {
  data: GraduateData[];
  pagination: PaginationData;
}

export interface GraduateData {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  corporation: CorporationData[];
}

export interface CorporationData {
  brochure: string[];
  flyerCourse: string[];
  hours: string;
  priceGraduate: string;
}

export interface PaginationData {
  total: number;
  limit: number;
  currentPages: number;
}
