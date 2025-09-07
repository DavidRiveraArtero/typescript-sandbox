export interface Personajes {
  id: string;
  nombre: string;
  apodo: string;
  especialidad: string;
  habilidades: string[];
  amigo: string;
  imagen: string;
}
export const MAIN_URL = `http://localhost:3000/`;
export const _RUTA_PERSONAJES = "http://localhost:3000/personajes";
