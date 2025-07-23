import "./style.css";

let turno = 0;

const turnoSiguiente = () => {
  turno++;
  pintarTurno();
};

const turnoAnterior = () => {
  if (turno > 0) {
    turno--;
    pintarTurno();
  }
};

const resetearTurno = () => {
  turno = 0;
  pintarTurno();
};

const turnoManual = () => {
  /* 
    La otra forma para que no de error al recoger el .value es en el if añadir el instanceof de HTMLInputElement
    No se si hay otra forma
  */
  let turnoNumber = document.getElementById("turno_number") as HTMLInputElement;  
  let finalTurn: number = parseInt(turnoNumber.value)

  if(turnoNumber !== undefined && turnoNumber !== null ){
    if(finalTurn > 0){
      turno = finalTurn
    }else {
      console.error("Turno tiene que ser mayor a 0 ")
    }
    pintarTurno()
  }
}

const pintarTurno = () => {
  const numero = document.getElementById("numero-turno");
  if (numero !== undefined && numero !== null) {
    numero.innerHTML = turno.toString().padStart(2, "0");
  }
};


// EVENTOS BUTTON
const eventos = () => {

  // BOTON SIGUIENTE
  const buttonSiguiente = document.getElementById("siguiente");
  if (buttonSiguiente !== undefined && buttonSiguiente !== null) {
    buttonSiguiente.addEventListener("click", () => {
      turnoSiguiente()
    });
  }

  // BOTON ANTERIOR
  const buttonAnterior = document.getElementById("anterior");
  if(buttonAnterior !== undefined && buttonAnterior !== null){
    buttonAnterior.addEventListener("click", turnoAnterior);
  }

  // BOTON RESET
  const buttonReset = document.getElementById("reset");
  if(buttonReset !== undefined && buttonReset !== null){
    buttonReset.addEventListener("click", resetearTurno);
  }

  // BOTON ENVIAR
  const buttonEnviar = document.getElementById("enviar");
  if(buttonEnviar !== undefined && buttonEnviar !== null){
    buttonEnviar.addEventListener("click", turnoManual);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  pintarTurno();
});