import {
  Pacientes,
  pacientes,
  numeroPacientesPorEspecialidad,
  NumeroPacientesPorEspecialidad,
} from "./model";

export const mainPrograma = () => {
  console.log("LISTA ORIGNAL DE PACIENTES: ", pacientes);

  // EJERCICIO 1
  console.log(
    "LISTA PACIENTES ASIGNADOS A PEDRIATIA: ",
    obtenPacientesAsignadosAPediatria(pacientes)
  );
  console.log(
    "LISTA PACIENTES ASIGNADOS A PEDRIATIA MENORES DE 10: ",
    obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
  );

  // EJERCICIO 2
  for (var x: number = 0; x < pacientes.length; x++) {
    activarProtocoloUrgencia(pacientes[x])
      ? console.log(pacientes[x].nombre, "Se activa protocolo de urgencia")
      : console.log(pacientes[x].nombre, "Todo estable");
  }

  // EJERCICIO 3
  console.log(reasignaPacientesAMedicoFamilia(pacientes));

  // EJERCICIO 4
  HayPacientesDePediatria(pacientes)
    ? console.log("Te puedes ir a casa")
    : console.log("Aun tienes pacientes que atender");

  // EJERCICIO 5
  console.log(cuentaPacientesPorEspecialidad(pacientes));
};

// EJERCICIO 1 FUNCIONES
/*
    CREAMOS UNA FUNCION QUE NOS REGRESE UNA
    LISTA DE TODOS LOS PACIENTES QUE ESTEN ASIGNADOS EN EL
    AREA DE PEDIATRIA

*/

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let listaPedriatia: Pacientes[] = [];
  for (var x: number = 0; x < pacientes.length; x++) {
    if (pacientes[x].especialidad === "Pediatra") {
      listaPedriatia = [pacientes[x], ...listaPedriatia];
    }
  }
  return listaPedriatia;
};

/*
    A PARTIR DE LA LISTA CREADA ANTERIORMENTE 
    FILTRAMOS LOS PACIENTES QUE SEAN MENORES DE EDAD
*/

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const listaPedriatia: Pacientes[] =
    obtenPacientesAsignadosAPediatria(pacientes);
  let listaPedriatiaMenores: Pacientes[] = [];
  for (var x: number = 0; x < listaPedriatia.length; x++) {
    if (listaPedriatia[x].edad < 10) {
      listaPedriatiaMenores = [listaPedriatia[x], ...listaPedriatiaMenores];
    }
  }
  return listaPedriatiaMenores;
};

// EJERCICIO 2 FUNCIONES
export const activarProtocoloUrgencia = (pacientes: Pacientes): boolean => {
  if (pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39) {
    return true;
  }

  return false;
};

// EJERCICIO 3 FUNCIONES
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const listaPedriatia: Pacientes[] =
    obtenPacientesAsignadosAPediatria(pacientes);

  for (var x = 0; x < listaPedriatia.length; x++) {
    listaPedriatia[x] = {
      ...listaPedriatia[x],
      especialidad: "Medico de familia",
    };
  }

  return listaPedriatia;
};

// EJERCICIO 4 FUNCIONES

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const listaPedriatia: Pacientes[] =
    obtenPacientesAsignadosAPediatria(pacientes);
  if (listaPedriatia.length === 0) {
    return true;
  }
  return false;
};

// EJERCICIO 5 FUNCIONES
const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  for (var x = 0; x < pacientes.length; x++) {
    switch (pacientes[x].especialidad) {
      case "Cardiólogo":
        numeroPacientesPorEspecialidad.cardiologia++;
        break;
      case "Medico de familia":
        numeroPacientesPorEspecialidad.medicoDeFamilia++;
        break;
      case "Pediatra":
        numeroPacientesPorEspecialidad.pediatria++;
        break;
    }
  }
  return numeroPacientesPorEspecialidad;
};
