import {
  barajas,
  nuevaBaraja,
  InfoCarta,
  setCartasGiradas,
  cartasGiradas,
  setNuevaBaraja,
  setNumeroIntentos,
} from "./model";

export const mainMotor = () => {
  barajarCartas(barajas);
};

const barajarCartas = (barajas: InfoCarta[]): InfoCarta[] => {
  barajas.map((_, id) => {
    let random = Math.floor(Math.random() * barajas.length);
    [nuevaBaraja[id], nuevaBaraja[random]] = [
      nuevaBaraja[random],
      nuevaBaraja[id],
    ];
  });
  return nuevaBaraja;
};

export const checkCard = (): boolean => {
  let isSame: boolean = true;
  setCartasGiradas(
    nuevaBaraja.filter((baraja: InfoCarta): boolean => !baraja.isClick)
  );
  if (cartasGiradas.length === 2) {
    isSame = cartasGiradas.every(
      (carta: InfoCarta) => carta.id === cartasGiradas[0].id
    );
  }
  return isSame;
};

export const girarCarta = (id_target: number): boolean => {
  if (nuevaBaraja[id_target].isClick) {
    nuevaBaraja[id_target] = {
      ...nuevaBaraja[id_target],
      isClick: false,
    };
    return true;
  }

  return false;
};

export const isSameCard = (): void => {
  setNuevaBaraja(
    nuevaBaraja.map((baraja: InfoCarta) =>
      !baraja.isClick
        ? { ...baraja, isSame: true, isClick: true }
        : { ...baraja, isClick: true }
    )
  );
};

export const isSameDefault = (): void => {
  setNuevaBaraja(
    nuevaBaraja.map((baraja: InfoCarta) =>
      baraja.isSame ? { ...baraja, isSame: false } : { ...baraja }
    )
  );
};

export const isNotClick = (): void => {
  setNuevaBaraja(
    nuevaBaraja.map(
      (carta: InfoCarta): InfoCarta =>
        !carta.isClick ? { ...carta, isClick: true } : { ...carta }
    )
  );
};

export const isWin = (): boolean => {
  return nuevaBaraja.every((carta: InfoCarta) => carta.isSame);
};

export const incrementoIntentos = () => {
  setNumeroIntentos();
};
