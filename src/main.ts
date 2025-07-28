import "./style.css";
let puntuacion = 0;
interface values {
  src: string;
  alt: string;
  title: string;
  valor: number;
}

const cartas: {
  [key: number]: values;
} = {
  0: {
    src: "./public/img/back.jpg",
    alt: "Reverse",
    title: "reverse",
    valor: 2,
  },
  1: {
    src: "./public/img/1_as-copas.jpg",
    alt: "Carta con valor 1",
    title: "Carta con valor 1",
    valor: 1,
  },
  2: {
    src: "./public/img/2_dos-copas.jpg",
    alt: "Carta con valor 2",
    title: "Carta con valor 2",
    valor: 2,
  },
  3: {
    src: "./public/img/3_tres-copas.jpg",
    alt: "Carta con valor 3",
    title: "Carta con valor 3",
    valor: 3,
  },
  4: {
    src: "./public/img/4_cuatro-copas.jpg",
    alt: "Carta con valor 4",
    title: "Carta con valor 4",
    valor: 4,
  },
  5: {
    src: "./public/img/5_cinco-copas.jpg",
    alt: "Carta con valor 5",
    title: "Carta con valor 5",
    valor: 5,
  },
  6: {
    src: "./public/img/6_seis-copas.jpg",
    alt: "Carta con valor 6",
    title: "Carta con valor 6",
    valor: 6,
  },
  7: {
    src: "./public/img/7_siete-copas.jpg",
    alt: "Carta con valor 7",
    title: "Carta con valor 7",
    valor: 7,
  },
  10: {
    src: "./public/img/10_sota-copas.jpg",
    alt: "Carta con valor 0.5",
    title: "Carta con valor 0.5",
    valor: 0.5,
  },
  11: {
    src: "./public/img/11_caballo-copas.jpg",
    alt: "Carta con valor 0.5",
    title: "Carta con valor 0.5",
    valor: 0.5,
  },
  12: {
    src: "./public/img/12_rey-copas.jpg",
    alt: "Carta con valor 0.5",
    title: "Carta con valor 0.5",
    valor: 0.5,
  },
};

const generarCartaAleatoria = (): number => {
  let numeroAleatorio: number = randomNumber();
  numeroAleatorio = checkNumberCard(numeroAleatorio);
  return numeroAleatorio;
};

const pedirCarta = (): void => {
  let numCartaPedida: number = generarCartaAleatoria();
  let itsOk = mostrarCartaSalida(numCartaPedida);
  if (itsOk) {
    sumarPuntuacion(numCartaPedida);
  }

  statusGame(puntuacion);
};

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

const sumarPuntuacion = (puntuacion_carta: number): void => {
  let puntuacionNumber = document.getElementById("puntuacion-number");
  puntuacion += cartas[puntuacion_carta].valor;
  if (
    puntuacionNumber !== null &&
    puntuacionNumber !== undefined &&
    puntuacionNumber instanceof HTMLElement
  ) {
    puntuacionNumber.innerHTML = puntuacion.toString();
  }
};

const reinciciar = () => {
  puntuacion = 0;
  let puntuacionNumber = document.getElementById("puntuacion-number");
  let mensaje = document.getElementById("mensaje");
  let CARTA_SACADA = document?.getElementById("carta-mostrar");

  if (
    puntuacionNumber !== undefined &&
    puntuacionNumber !== null &&
    puntuacionNumber instanceof HTMLElement
  ) {
    puntuacionNumber.innerHTML = puntuacion.toString();
  }
  if (
    mensaje !== undefined &&
    mensaje !== null &&
    mensaje instanceof HTMLElement
  ) {
    mensaje.innerHTML = "";
  }
  ocultarBotones();

  // REINICIAR CARTA
  if (CARTA_SACADA instanceof HTMLImageElement) {
    CARTA_SACADA.src = cartas[0].src;
    CARTA_SACADA.alt = cartas[0].alt;
    CARTA_SACADA.title = cartas[0].title;
  }
};

const errorMensaje = (): void => {
  let errorMensaje = document.getElementById("mensaje") as HTMLElement;
  errorMensaje.innerHTML = "Esta imagen no existe";
};

const mensaje = (puntuacion: number) => {
  let mensaje = document.getElementById("mensaje") as HTMLElement;
  mensaje.innerHTML = checkPoints(puntuacion);

  // OCULTAR BOTONS REINCIAR Y WHATIF
  mostrarBotones();
};

// AÑADIMOS DISPLAY BLOCK LOS BOTONES REINICIAR y WHATIF
const mostrarBotones = (): void => {
  let btn_reiniciar_style = document.getElementById("btn_reiniciar");
  let btn_whatif_style = document.getElementById("btn-whatIF");
  if (
    btn_reiniciar_style !== undefined &&
    btn_reiniciar_style !== null &&
    btn_reiniciar_style instanceof HTMLButtonElement
  ) {
    btn_reiniciar_style.style.display = "block";
  }
  if (
    btn_whatif_style !== undefined &&
    btn_whatif_style !== null &&
    btn_whatif_style instanceof HTMLButtonElement &&
    puntuacion < 7.5
  ) {
    btn_whatif_style.style.display = "block";
  }
};

// Deshabilitar LOS BOTONES REINICIAR, WHATIF Y PLANTARSE
const ocultarBotones = (): void => {
  let btn_reiniciar_style = document.getElementById("btn_reiniciar");
  let btn_whatif_style = document.getElementById("btn-whatIF");
  let btn_plantarse_active = document.getElementById("btn_plantarse");

  if (
    btn_reiniciar_style !== undefined &&
    btn_reiniciar_style !== null &&
    btn_reiniciar_style instanceof HTMLButtonElement
  ) {
    btn_reiniciar_style.style.display = "none";
  }
  if (
    btn_whatif_style !== undefined &&
    btn_whatif_style !== null &&
    btn_whatif_style instanceof HTMLButtonElement &&
    puntuacion < 7.5
  ) {
    btn_whatif_style.style.display = "none";
    btn_whatif_style.disabled = false;
  }

  if (
    btn_plantarse_active !== undefined &&
    btn_plantarse_active !== null &&
    btn_plantarse_active instanceof HTMLButtonElement
  ) {
    btn_plantarse_active.disabled = true;
  }
};

// MIRAMOS LA PUNTUACIÓN FINAL DEL JUGADOR Y DEVOLVEMOS UN MENSAJE
const checkPoints = (puntuacion: number): string => {
  let mensajeGame: string = "";

  if (puntuacion < 4) {
    mensajeGame = "Has sido muy conservador";
  } else if (puntuacion >= 5 && puntuacion < 6) {
    mensajeGame = "Te ha entrado el canguelo eh?";
  } else if (puntuacion >= 6 && puntuacion <= 7) {
    mensajeGame = "Casi casi...";
  } else if (puntuacion === 7.5) {
    mensajeGame = "¡Lo has clavado! ¡Enhorabuena!";
  } else {
    mensajeGame = "GAME OVER ";
  }

  return mensajeGame;
};

// GENERAMOS UN NUMERO ALEATORIO
const randomNumber = (): number => {
  return Math.floor(Math.random() * 11);
};

// POR CADA VEZ QUE EL JUGADOR PIDE UNA CARTA ESTE CHECKEA QUE SU PUNTUACIÓN NO SEA MAYOR A 7.5 O IGUAL
const statusGame = (puntuacion: number): void => {
  if (puntuacion > 7.5) {
    mensaje(puntuacion);
  } else if (puntuacion === 7.5) {
    mensaje(puntuacion);
  }
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

const btnPedirCarta = (
  BTN_PLANTARSE: HTMLButtonElement,
  BTN_PEDIR_CARTA: HTMLButtonElement
): void => {
  BTN_PLANTARSE.disabled = false;
  if (puntuacion > 7.5 || puntuacion === 7.5) {
    BTN_PEDIR_CARTA.disabled = true;
  } else {
    pedirCarta();
  }
};

// LO INTENTE PONER CON IF para quitar el AS
const eventos = () => {
  const BTN_PEDIR_CARTA = document?.getElementById(
    "main-section-container-pedir"
  ) as HTMLButtonElement;
  const BTN_PLANTARSE = document?.getElementById(
    "btn_plantarse"
  ) as HTMLButtonElement;
  const BTN_REINICIAR = document?.getElementById(
    "btn_reiniciar"
  ) as HTMLButtonElement;
  const BTN_WHATIF = document?.getElementById(
    "btn-whatIF"
  ) as HTMLButtonElement;

  BTN_PLANTARSE.disabled = true;

  BTN_PEDIR_CARTA?.addEventListener("click", () => {
    btnPedirCarta(BTN_PLANTARSE, BTN_PEDIR_CARTA);
  });

  BTN_PLANTARSE?.addEventListener("click", () => {
    mensaje(puntuacion);
  });

  BTN_REINICIAR.addEventListener("click", reinciciar);

  BTN_WHATIF.addEventListener("click", () => {
    pedirCarta();
  });
};

const printarPuntuacion = (): void => {
  let puntuacionNumber = document.getElementById("puntuacion-number");
  if (
    puntuacionNumber !== undefined &&
    puntuacionNumber !== null &&
    puntuacionNumber instanceof HTMLElement
  ) {
    puntuacionNumber.innerHTML = puntuacion.toString();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  printarPuntuacion();
});
