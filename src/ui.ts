import {
  cartas,
  puntuacion,
  mensajeGame,
  setMensajeGame,
  setPuntuacion,
} from "./modelo";
import { generarCartaAleatoria, sumarPuntuacion, isGameOver } from "./motor";

// VARIABLES DE UI
export const BTN_PEDIR_CARTA = document?.getElementById(
  "main-section-container-pedir"
) as HTMLButtonElement;
export const BTN_PLANTARSE = document?.getElementById(
  "btn_plantarse"
) as HTMLButtonElement;
export const BTN_REINICIAR = document?.getElementById(
  "btn_reiniciar"
) as HTMLButtonElement;
export const BTN_WHATIF = document?.getElementById(
  "btn-whatIF"
) as HTMLButtonElement;

// FUNCIONES
export const btnPedirCarta = (): void => {
  if (puntuacion < 7.5) {
    activarBotones(["PLANTARSE"]);
    mostrarBotones(["REINICIAR"]);
    pedirCarta();
  }
};

export const pedirCarta = (): void => {
  let numCartaPedida: number = generarCartaAleatoria();
  let itsOk = mostrarCartaSalida(numCartaPedida);
  if (itsOk) {
    sumarPuntuacion(numCartaPedida);
  }

  if (isGameOver()) {
    checkPoints(puntuacion);

    mostrarBotones(["REINICIAR"]);
  }

  printarNuevaPuntuacion(puntuacion);
  statusGame(puntuacion);
};

// POR CADA VEZ QUE EL JUGADOR PIDE UNA CARTA ESTE CHECKEA QUE SU PUNTUACIÓN NO SEA MAYOR A 7.5 O IGUAL
const statusGame = (puntuacion: number): void => {
  if (puntuacion > 7.5) {
    setMensajeGame("Has perdido");
  } else if (puntuacion === 7.5) {
    setMensajeGame("Has Ganado");
  }
  mensaje();
};

export const checkPoints = (puntuacion: number): void => {
  if (puntuacion <= 4) {
    setMensajeGame("Has sido muy conservador");
  } else if (puntuacion >= 5 && puntuacion < 6) {
    setMensajeGame("Te ha entrado el canguelo eh?");
  } else if (puntuacion >= 6 && puntuacion <= 7) {
    setMensajeGame("Casi casi...");
  } else if (puntuacion === 7.5) {
    setMensajeGame("¡Lo has clavado! ¡Enhorabuena!");
  }
  mensaje();
};

// LE ENSEÑAMOS AL JUGADOR LA CARTA QUE HA SACADO
const mostrarCartaSalida = (numero: number): boolean => {
  const CARTA_SACADA = document?.getElementById("carta-mostrar");
  if (
    cartas[numero] !== undefined &&
    CARTA_SACADA instanceof HTMLImageElement
  ) {
    CARTA_SACADA.src = cartas[numero].src;
    CARTA_SACADA.alt = cartas[numero].alt;
    CARTA_SACADA.title = cartas[numero].title;
    return true;
  } else {
    errorMensaje();
    return false;
  }
};

// MENSAJE DE ERROR SI LA CARTA NO EXISTE
const errorMensaje = (): void => {
  setMensajeGame("Esta imagen no existe");
  mensaje();
};

// PRINTAR EL NUEVO MENSAJE AL TERMINAR O CUANDO NOS PLANTAMOS
export const mensaje = () => {
  let mensaje = document.getElementById("mensaje") as HTMLElement;
  mensaje.innerHTML = mensajeGame;
};

// PRINTAR LA NUEVA PUNTUACION
const printarNuevaPuntuacion = (puntuacion: number) => {
  let puntuacionNumber = document.getElementById("puntuacion-number");
  if (
    puntuacionNumber !== null &&
    puntuacionNumber !== undefined &&
    puntuacionNumber instanceof HTMLElement
  ) {
    puntuacionNumber.innerHTML = puntuacion.toString();
  }
};

// INTERACCION CON LOS BOTONES
export const bloquearBotones = (buttons: string[]) => {
  for (var x: number = 0; x < buttons.length; x++) {
    switch (buttons[x]) {
      case "PEDIR_CARTA":
        BTN_PEDIR_CARTA.disabled = true;
        break;
      case "REINICIAR":
        BTN_REINICIAR.disabled = true;
        break;
      case "PLANTARSE":
        BTN_PLANTARSE.disabled = true;
        break;
      case "WHAT_IF":
        BTN_WHATIF.disabled = true;
        break;
      default:
        break;
    }
  }
};

export const activarBotones = (buttons: string[]) => {
  for (var x: number = 0; x < buttons.length; x++) {
    switch (buttons[x]) {
      case "PEDIR_CARTA":
        BTN_PEDIR_CARTA.disabled = false;
        break;
      case "REINICIAR":
        BTN_REINICIAR.disabled = false;
        break;
      case "PLANTARSE":
        BTN_PLANTARSE.disabled = false;
        break;
      case "WHAT_IF":
        BTN_WHATIF.disabled = false;
        break;
      default:
        break;
    }
  }
};

export const mostrarBotones = (name_button: string[]) => {
  for (var x = 0; x < name_button.length; x++) {
    switch (name_button[x]) {
      case "REINICIAR":
        BTN_REINICIAR.style.display = "block";
      case "PLANTARSE":
        BTN_PLANTARSE.style.display = "block";
        break;
      case "WHAT_IF":
        BTN_WHATIF.style.display = "block";
        break;
      default:
        break;
    }
  }
};

export const ocultarBotones = (name_button: string[]) => {
  for (var x = 0; x < name_button.length; x++) {
    switch (name_button[x]) {
      case "REINICIAR":
        BTN_REINICIAR.style.display = "none";
        break;
      case "PLANTARSE":
        console.log("DENTRO");
        BTN_PLANTARSE.style.display = "none";
        break;
      case "WHAT_IF":
        BTN_WHATIF.style.display = "none";
        break;
      default:
        break;
    }
  }
};

export const startGame = () => {
  setMensajeGame("");
  setPuntuacion(0);
  activarBotones(["PEDIR_CARTA", "REINICIAR", "WHAT_IF"]);
  bloquearBotones(["PLANTARSE"]);
  ocultarBotones(["REINICIAR", "WHAT_IF"]);
  mensaje();
  printarNuevaPuntuacion(0);
  mostrarCartaSalida(0);
};
