// Tipos para la respuesta de la API de cursos
export interface CourseApiResponse {
  data: CourseData[];
  pagination: PaginationData;
}

export interface CourseData {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  corporation: CorporationData[];
}

export interface CorporationData {
  hours: string;
  flyerCourse: string[];
  institute: InstituteData;
}

export interface InstituteData {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface PaginationData {
  total: number;
  page: number;
  limit: number;
  currentPages: number;
}
