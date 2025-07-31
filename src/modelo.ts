export let puntuacion = 0;
export let mensajeGame = "";

interface values {
  src: string;
  alt: string;
  title: string;
  valor: number;
}

export const cartas: {
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

export const setPuntuacion = (nuevaPuntuacion: number) => {
  puntuacion = nuevaPuntuacion;
};

export const setMensajeGame = (nuevoMensaje: string) => {
  mensajeGame = nuevoMensaje;
};
