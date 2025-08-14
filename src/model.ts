export interface InfoCarta {
  url: string;
  id: number;
  isClick?: boolean;
  isSame: boolean;
}

export const imgInfo: { [key: number]: InfoCarta } = {
  1: { url: "./public/img/1.png", id: 1, isClick: true, isSame: false },
  2: { url: "./public/img/2.png", id: 2, isClick: true, isSame: false },
  3: { url: "./public/img/3.png", id: 3, isClick: true, isSame: false },
  4: { url: "./public/img/4.png", id: 4, isClick: true, isSame: false },
  5: { url: "./public/img/5.png", id: 5, isClick: true, isSame: false },
  6: { url: "./public/img/6.png", id: 6, isClick: true, isSame: false },
};

export const barajas: InfoCarta[] = [
  imgInfo[1],
  imgInfo[1],
  imgInfo[2],
  imgInfo[2],
  imgInfo[3],
  imgInfo[3],
  imgInfo[4],
  imgInfo[4],
  imgInfo[5],
  imgInfo[5],
  imgInfo[6],
  imgInfo[6],
];

export let numIntentos: number = 0;

export let nuevaBaraja: InfoCarta[] = [...barajas];

export let cartasGiradas: InfoCarta[] = [];

export const setCartasGiradas = (nuevaCarta: InfoCarta[]): void => {
  cartasGiradas = nuevaCarta;
};

export const setNuevaBaraja = (nuevaCarta: InfoCarta[]): void => {
  nuevaBaraja = nuevaCarta;
};

export const setNumeroIntentos = (): void => {
  numIntentos++;
};

export const resetNumIntentos = (): void => {
  numIntentos = 0;
};
