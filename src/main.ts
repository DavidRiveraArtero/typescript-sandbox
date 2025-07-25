import "./style.css";
let puntuacion = 0;
const cartas:{[key: number]: {src: string; alt: string; title: string , valor: number}}  = {
    1 : {
            src: "./public/img/1_as-copas.jpg",
            alt: "Carta con valor 1",
            title: "Carta con valor 1",
            valor: 1
        },
    2 : {
            src: "./public/img/2_dos-copas.jpg",
            alt: "Carta con valor 2",
            title: "Carta con valor 2",
            valor: 2
        },
    3 : {
            src: "./public/img/3_tres-copas.jpg",
            alt: "Carta con valor 3",
            title: "Carta con valor 3",
            valor: 3
        },
    4 : {
            src: "./public/img/4_cuatro-copas.jpg",
            alt: "Carta con valor 4",
            title: "Carta con valor 4",
            valor: 4
        },
    5 : {
            src: "./public/img/5_cinco-copas.jpg",
            alt: "Carta con valor 5",
            title: "Carta con valor 5",
            valor: 5
        },
    6 : {
            src: "./public/img/6_seis-copas.jpg",
            alt: "Carta con valor 6",
            title: "Carta con valor 6",
            valor: 6
        },
    7 : {
            src: "./public/img/7_siete-copas.jpg",
            alt: "Carta con valor 7",
            title: "Carta con valor 7",
            valor: 7
        },
    10 :{
            src: "./public/img/10_sota-copas.jpg",
            alt: "Carta con valor 0.5",
            title: "Carta con valor 0.5",
            valor: 0.5
        },
    11 :{
            src: "./public/img/11_caballo-copas.jpg",
            alt: "Carta con valor 0.5",
            title: "Carta con valor 0.5",
            valor: 0.5
        },
    12 :{
            src: "./public/img/12_rey-copas.jpg",
            alt: "Carta con valor 0.5",
            title: "Carta con valor 0.5",
            valor: 0.5
        }

}

const generarCartaAleatoria = () :number => {
    let numeroAleatorio:number = Math.floor(Math.random() * 11)

    if(numeroAleatorio > 7){
        numeroAleatorio += 2
    }else if(numeroAleatorio == 0){
        numeroAleatorio += 1
    }
    return numeroAleatorio
}

const pedirCarta = () : void => {
    let numCartaPedida: number = generarCartaAleatoria();
    let itsOk = mostrarCartaSalida(numCartaPedida)
    if(itsOk){
        sumarPuntuacion(numCartaPedida)
    }
    
}

const mostrarCartaSalida = (numero: number) : boolean => {
    const CARTA_SACADA = document?.getElementById("carta-mostrar") as HTMLImageElement
    if(cartas[numero] !== undefined){
        CARTA_SACADA.src = cartas[numero].src
        CARTA_SACADA.alt = cartas[numero].alt
        CARTA_SACADA.title = cartas[numero].title
        return true
    }else{
        errorMensaje()
        return false
    }
}


const sumarPuntuacion = (puntuacion_carta : number) : void => {
    let puntuacionNumber = document.getElementById("puntuacion-number") as HTMLInputElement
    puntuacion += cartas[puntuacion_carta].valor 
    puntuacionNumber.innerHTML = puntuacion.toString();
    
}

const reinciciar = () => {
    location.reload()
}

const errorMensaje = (): void => {
    let errorMensaje = document.getElementById('mensaje') as HTMLElement
    errorMensaje.innerHTML = "Esta imagen no existe"
       
}

const mensaje = (puntuacion: number) => {
    let mensaje = document.getElementById('mensaje') as HTMLElement
    let btn_reiniciar_style = document.getElementById("btn_reiniciar") as HTMLButtonElement
    let btn_whatif_style = document.getElementById("btn-whatIF") as HTMLButtonElement

    if(puntuacion < 4){
        mensaje.innerHTML = "Has sido muy conservador"
    }else if(puntuacion >= 5 && puntuacion < 6){
        mensaje.innerHTML = "Te ha entrado el canguelo eh?"
    }else if(puntuacion >= 6 && puntuacion <= 7){
        mensaje.innerHTML = "Casi casi..."
    }else if(puntuacion === 7.5){
        mensaje.innerHTML = "¡Lo has clavado! ¡Enhorabuena!"
    }else {
        mensaje.innerHTML = "GAME OVER "
    }

    btn_reiniciar_style.style.display = 'block'
    btn_whatif_style.style.display = 'block'

}




const eventos = () => {
    const BTN_PEDIR_CARTA = document?.getElementById("main-section-container-pedir") as HTMLButtonElement
    const BTN_PLANTARSE = document?.getElementById("btn_plantarse") as HTMLButtonElement
    const BTN_REINICIAR = document?.getElementById("btn_reiniciar") as HTMLButtonElement
    const BTN_WHATIF = document?.getElementById("btn-whatIF") as HTMLButtonElement

    BTN_PLANTARSE.disabled = true;

    BTN_PEDIR_CARTA?.addEventListener("click", () => {
        BTN_PLANTARSE.disabled = false;
        if(puntuacion > 7.5){
            BTN_PEDIR_CARTA.disabled = true 
            mensaje(puntuacion)  
        }else {
           pedirCarta()
        }
     
    })

    BTN_PLANTARSE?.addEventListener("click", () => {
            mensaje(puntuacion)
    })

    BTN_REINICIAR.addEventListener("click", reinciciar)

    BTN_WHATIF.addEventListener("click", () => {
        pedirCarta()
        BTN_WHATIF.disabled = true
        BTN_PLANTARSE.disabled = true
        BTN_PEDIR_CARTA.disabled = true
    })

}

document.addEventListener("DOMContentLoaded", () => {
  eventos();
});