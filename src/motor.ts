import { puntuacion, cartas, setPuntuacion } from "./modelo";

export const generarCartaAleatoria = (): number => {
  let numeroAleatorio: number = randomNumber();
  numeroAleatorio = checkNumberCard(numeroAleatorio);
  return numeroAleatorio;
};

// UNA VEZ TENGAMOS LA CARTA SI ESTA ES SUPERIOR A 7 LE SUMAMOS 2 PUNTOS
const checkNumberCard = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    numeroAleatorio += 2;
  } else if (numeroAleatorio == 0) {
    numeroAleatorio += 1;
  }

  return numeroAleatorio;
};

//
export const sumarPuntuacion = (puntuacion_carta: number): void => {
  setPuntuacion(puntuacion + cartas[puntuacion_carta].valor);
};

// GENERAMOS UN NUMERO ALEATORIO
const randomNumber = (): number => {
  return Math.floor(Math.random() * 11);
};

export const isGameOver = (): boolean => {
  if (puntuacion > 7.5) {
    return true;
  }
  return false;
};
