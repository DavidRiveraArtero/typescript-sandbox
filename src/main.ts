import "./style.css";

import { puntuacion } from "./modelo";
import {
  pedirCarta,
  btnPedirCarta,
  BTN_PEDIR_CARTA,
  BTN_PLANTARSE,
  BTN_REINICIAR,
  BTN_WHATIF,
  startGame,
  bloquearBotones,
  mostrarBotones,
  checkPoints,
} from "./ui";

// LO INTENTE PONER CON IF para quitar el AS
const eventos = () => {
  BTN_PLANTARSE.disabled = true;

  BTN_PEDIR_CARTA?.addEventListener("click", btnPedirCarta);

  BTN_PLANTARSE?.addEventListener("click", () => {
    checkPoints(puntuacion);
    bloquearBotones(["PEDIR_CARTA", "PLANTARSE"]);
    mostrarBotones(["WHAT_IF", "REINICIAR"]);
  });

  BTN_REINICIAR.addEventListener("click", startGame);

  BTN_WHATIF.addEventListener("click", () => {
    pedirCarta();
    bloquearBotones(["WHAT_IF"]);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  startGame();
});
