import { Personajes, _RUTA_PERSONAJES } from "./personajes.model";
import axios from "axios";

export const getPersonajes = async (): Promise<Personajes[]> => {
  try {
    const { data } = await axios.get(_RUTA_PERSONAJES);
    return data;
  } catch (error) {
    throw new Error("Error con el servidor");
  }
};

export const getPersonajeFiltrado = async (
  nombre: string
): Promise<Personajes[]> => {
  const data: Promise<Personajes[]> = new Promise((resolve, reject) => {
    axios.get(_RUTA_PERSONAJES + `?nombre_like=${nombre}`).then((resultado) => {
      if (resultado.status === 200) {
        resolve(resultado.data);
      } else if (resultado.status === 500) {
        reject("Server Error");
      } else if (resultado.status === 404) {
        reject("Client ERROR");
      }
    });
  });
  return data;
};
