import "./style.css";

interface GrupoMusica{
    nombre: string;
    dateFundation: number;
    isActive: boolean;
    typeOf : string
}

const grupo1: GrupoMusica = {
    nombre: "The Beatles",
    dateFundation: 1960,
    isActive: true,
    typeOf: "🎵 Pop Rock"
}

const grupo2: GrupoMusica = {
    nombre: "Queen",
    dateFundation: 1970,
    isActive: false,
    typeOf: "🎸 Rock"
}

const grupo3: GrupoMusica = {
    nombre: "AC DC",
    dateFundation: 1973,
    isActive: true,
    typeOf: "🤘 Hard Rock"
}

const grupo4: GrupoMusica = {
    nombre: "Ludwig van Beethoven",
    dateFundation: 1770,
    isActive: false,
    typeOf: "🎼 Clásica"
}

const grupo5: GrupoMusica = {
    nombre: "The Rolling Stones",
    dateFundation: 1962,
    isActive: true,
    typeOf: "🎸 Rock"
}

console.log(`%c${grupo1.nombre}`  ,"background: green; font-size: 32px; font-weight: bold")
console.log(`%c${grupo2.nombre}`  ,"background: green; font-size: 32px; font-weight: bold")
console.log(`%c${grupo3.nombre}`  ,"background: green; font-size: 32px; font-weight: bold")
console.log(`%c${grupo4.nombre}`  ,"background: green; font-size: 32px; font-weight: bold")
console.log(`%c${grupo5.nombre}`  ,"background: green; font-size: 32px; font-weight: bold")


