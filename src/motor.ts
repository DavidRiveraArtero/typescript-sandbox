import { ValidacionClave } from "./modelo";

/*
    HA ESTA FUNCION LE PASAREMOS 3 PARAMETROS
    {nombreUsuario: string} -> datos del usuario
    {clave: string} -> Datos del usuario
    {commonPassword: string[]} -> Lista creada en el modelo.ts que incluye una lista de contraseñas comunes 

    La utilidad de validarClave es comprobar si la contraseña que
    estamos añadiendo sigue una serie de criterios
    que definiremos a continuación
*/

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  /* 
    ESTO AL PRINCIPIO LO PUSE CON UN SWITCH CASE DENTRO DE UN BUCLE 
    PERO ME DABA PROBLEMAS, BUSCANDO VI QUE SE PODÍA HACER DE ESTA MANERA 
  */
  let validaciones = [
    () => tieneMayusculasYMinusculas(clave),
    () => tieneNumeros(clave),
    () => tieneCaracteresEspeciales(clave),
    () => tieneLongitudMinima(clave),
    () => tieneNombreUsuario(nombreUsuario, clave),
    () => tienePalabrasComunes(clave, commonPasswords),
  ];

  for (const validar of validaciones) {
    const resultado = validar();
    if (!resultado.esValida) {
      return resultado; // detenemos en la primera falla
    }
  }

  return { esValida: true, error: "" };
};

//
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  return comprobacionMinMay(clave)
    ? { esValida: comprobacionMinMay(clave), error: "" }
    : {
        esValida: comprobacionMinMay(clave),
        error: "La clave debe de tener mayúsculas y minúsculas",
      };
};

// COMPROBAMOS SI LA CLAVE QUE LE PASAMOS TIENE UNA MAYÚSCULA Y UNA MINÚSCULA
const comprobacionMinMay = (clave: string) => {
  let tieneMayuscula: boolean = false;
  let tieneMinuscula: boolean = false;
  for (var x = 0; x < clave.length; x++) {
    if (clave[x] === clave[x].toUpperCase() && !Number(clave[x])) {
      tieneMayuscula = true;
    }

    if (clave[x] === clave[x].toLowerCase() && !Number(clave[x])) {
      tieneMinuscula = true;
    }

    if (tieneMayuscula && tieneMinuscula) {
      return true;
    }
  }
  return false;
};

// COMPROBAMOS SI TIENE UN NUMERO
export const tieneNumeros = (clave: string): ValidacionClave => {
  for (var x = 0; x < clave.length; x++) {
    if (Number(clave[x])) {
      return { esValida: true, error: "" };
    }
  }
  return { esValida: false, error: "La clave debe de tener números" };
};

// COMPROBAMOS SI TIENE CARACTERES ESPECIALES
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteresEspeciales = ["?", "@", "#", "+", "_", "!", "*"];
  for (var x = 0; x < clave.length; x++) {
    if (caracteresEspeciales.includes(clave[x])) {
      return { esValida: true, error: "" };
    }
  }
  return {
    esValida: false,
    error: "La clave debe de tener caracteres especiales",
  };
};

// COMPROBAMOS SI TIENEN UNA LONGITUD SUPERIOR A 8 CARACTERES
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  return clave.length >= 8
    ? { esValida: true, error: "" }
    : {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      };
};

// COMPROBAMOS SI LA CONTRASEÑA ES IGUAL AL NOMBRE DEL USUARIO
export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  return !clave.toLowerCase().includes(nombreUsuario.toLowerCase())
    ? { esValida: true, error: "" }
    : {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      };
};

// COMPROBAMOS QUE LA CONTRASEÑA NO ESTE EN LA LISTA DE CONTRASEÑAS COMUNES

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  return !commonPasswords.includes(clave.toLocaleLowerCase())
    ? { esValida: true, error: "" }
    : {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      };
};
