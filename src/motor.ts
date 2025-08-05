import { puntuacion, cartas } from "./modelo";

export const generarCartaAleatoria = (): number => {
  const numeroAleatorio: number = randomNumber();
  const numeroFinal = checkNumberCard(numeroAleatorio);
  return numeroFinal;
};

// UNA VEZ TENGAMOS LA CARTA SI ESTA ES SUPERIOR A 7 LE SUMAMOS 2 PUNTOS
export const checkNumberCard = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    numeroAleatorio += 2;
  } else if (numeroAleatorio == 0) {
    numeroAleatorio += 1;
  }

  return numeroAleatorio;
};

//
export const sumarPuntuacion = (puntuacion_carta: number): number => {
  return puntuacion + cartas[puntuacion_carta].valor;
};

// GENERAMOS UN NUMERO ALEATORIO
export const randomNumber = (): number => {
  return Math.floor(Math.random() * 11);
};

export const isButton = (button: unknown): HTMLButtonElement => {
  if (
    button !== null &&
    button !== undefined &&
    button instanceof HTMLButtonElement
  ) {
    return button;
  }
  throw new Error("NO ES UN ELEMENTO HTMLButton");
};

export const isHtmlElement = (button: unknown): HTMLElement => {
  if (
    button !== null &&
    button !== undefined &&
    button instanceof HTMLElement
  ) {
    return button;
  }
  throw new Error("NO ES UN ELEMENTO HTMLElement");
};
