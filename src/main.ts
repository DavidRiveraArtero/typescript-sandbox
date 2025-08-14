import "./style.css";
import { mainMotor } from "./motor";
import {
  crearTablero,
  tableroCard,
  mainUi,
  reset_btn,
  reset,
  htmlNumIntentos,
} from "./ui";
import { numIntentos } from "./model";

const main = () => {
  mainMotor();
  crearTablero();

  // BTN TABLERO
  for (var x = 0; x < tableroCard.length; x++) {
    tableroCard[x].addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      mainUi(target);
    });
  }

  // BTN RESET GAME
  reset_btn?.addEventListener("click", () => {
    reset();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
  htmlNumIntentos.innerHTML = numIntentos.toString();
});
