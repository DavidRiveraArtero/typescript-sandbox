import {
  cartasGiradas,
  nuevaBaraja,
  numIntentos,
  resetNumIntentos,
  setCartasGiradas,
} from "./model";
import {
  girarCarta,
  isNotClick,
  checkCard,
  isSameCard,
  isWin,
  isSameDefault,
  mainMotor,
  incrementoIntentos,
} from "./motor";

// VARIABLES

// -- SPAN NUMERO DE INTETOS
export const htmlNumIntentos = document.getElementById(
  "contador-intentos"
) as HTMLElement;

// -- TABLERO DE JUEGO
const tablero = document.getElementById("tablero") as HTMLElement;

// -- BTN_RESET_BTN
export const reset_btn = document.getElementById(
  "reset-game-btn"
) as HTMLButtonElement;

// -- CASILLAS DE JUEGO
export const tableroCard = document.getElementsByClassName(
  "card"
) as HTMLCollectionOf<HTMLElement>;

// -- Mensaje Final
const mensaje_win = document.getElementById("win-mensaje") as HTMLElement;

// MAIN
export const mainUi = (target: HTMLElement) => {
  const idTarget: number = Number(target.id);

  if (girarCarta(idTarget) && !isWin()) {
    addImagenesAlTablero(target, idTarget);
    isTheSameCard();
  }

  if (isWin()) {
    mensaje_win.innerHTML = "Felicidades has ganado !!!";
  }
};

// CREAR TABLERO
export const crearTablero = (): void => {
  nuevaBaraja.map((_, id: number) => {
    const createDiv = document.createElement("div");
    tablero.appendChild(createDiv);

    createDiv.setAttribute("class", "card");
    createDiv.setAttribute("id", id.toString());
  });
};

export const addImagenesAlTablero = (target: HTMLElement, idTarget: number) => {
  target.appendChild(createImg()).src = nuevaBaraja[idTarget].url;
  target.style.setProperty("pointer-events", "none");
};

// FUNCION QUE CREA UNA IMAGEN
const createImg = (): HTMLImageElement => {
  const crearImg = document.createElement("img") as HTMLImageElement;
  crearImg.setAttribute("class", "up");
  return crearImg;
};

// FUNCION DONDE MIRAMOS SI LAS CARTA SON IGUALES O NO
const isTheSameCard = (): void => {
  if (!checkCard() && cartasGiradas.length === 2) {
    incrementoIntentos();
    ocultarImagen();
  } else if (checkCard() && cartasGiradas.length === 2) {
    mantenerCarta();
  }
};

const ocultarImagen = () => {
  const imgMostrada = document.getElementsByClassName(
    "up"
  ) as HTMLCollectionOf<HTMLImageElement>;

  setTimeout(() => {
    Array.from(imgMostrada).forEach((img) => {
      img.parentElement?.style.setProperty("pointer-events", "auto");
      img.remove();
    });

    // Activar pointer-events en los padres
  }, 500);
  printarNuevoIntento();
  isNotClick();
  setCartasGiradas([]);
};

const mantenerCarta = () => {
  isSameCard();
  setCartasGiradas([]);
  const imgMostrada = document.getElementsByClassName(
    "up"
  ) as HTMLCollectionOf<HTMLImageElement>;
  Array.from(imgMostrada).forEach((img) => {
    img.classList.remove("up");
    img.parentElement?.style.setProperty("cursor", "default");
  });
};

const activarEventoBoton = (tableroCard: HTMLCollectionOf<HTMLElement>) => {
  Array.from(tableroCard).map((casilla: HTMLElement) => {
    casilla.style.setProperty("pointer-events", "auto");
    casilla.style.setProperty("cursor", "pointer");
  });
};

const eliminarImg = (tableroCard: HTMLCollectionOf<HTMLElement>) => {
  Array.from(tableroCard).map((casilla: HTMLElement) => {
    casilla.firstChild?.remove();
  });
};

const printarNuevoIntento = () => {
  htmlNumIntentos.innerHTML = numIntentos.toString();
};

// RESET GAME
export const reset = (): void => {
  activarEventoBoton(tableroCard);
  isSameCard();
  isSameDefault();
  eliminarImg(tableroCard);
  mainMotor();
  resetNumIntentos();
  printarNuevoIntento();
  mensaje_win.innerHTML = "";
};
