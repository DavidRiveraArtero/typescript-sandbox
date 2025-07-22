import "./style.css";

// BOTONES
const buttonSiguiente = document.getElementById("siguiente") as HTMLElement
const buttonAnterior = document.getElementById("anterior") as HTMLElement
const buttonReset = document.getElementById("reset") as HTMLElement

// INPUT
let turnoNumber = document.getElementById("turno_number") as HTMLInputElement
const buttonEnviar = document.getElementById("enviar") as HTMLElement

// TEXT
let turn = document.getElementsByClassName("numero-turno")[0] as Element


function SiguienteTurno(turn:Element):void{
    let number = parseInt(turn.innerHTML)
    turn.innerHTML = String(number + 1).padStart(2, "0")
}

function AnteriorTurno(turn:Element):void{
    let number = parseInt(turn.innerHTML)
    turn.innerHTML = String(number - 1).padStart(2, "0")
}

function ResetTurno(turn:Element):void{
   turn.innerHTML = "0"; 
}

function TurnoManual(turn:Element, turnoNumber:HTMLInputElement){
    turn.innerHTML = turnoNumber.value.padStart(2, "0")
}

// EVENTOS BUTTON 

buttonSiguiente.addEventListener("click", () => {
    SiguienteTurno(turn)
})

buttonAnterior.addEventListener("click", () => {
    AnteriorTurno(turn)
})

buttonReset?.addEventListener("click", () => {
    ResetTurno(turn)
})

buttonEnviar.addEventListener("click", () => {
    TurnoManual(turn, turnoNumber)
})

