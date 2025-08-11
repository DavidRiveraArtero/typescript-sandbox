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
  console.log(activarProtocoloUrgencia(pacientes));

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
  let listaPedriatia: Pacientes[] = pacientes.filter((paciente: Pacientes) => {
    return paciente.especialidad === "Pediatra";
  });

  return listaPedriatia;
};

/*
    A PARTIR DE LA LISTA CREADA ANTERIORMENTE 
    FILTRAMOS LOS PACIENTES QUE SEAN MENORES DE EDAD
*/

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const listaPedriatias: Pacientes[] =
    obtenPacientesAsignadosAPediatria(pacientes);

  let listaPedriatiaMenores: Pacientes[] = listaPedriatias.filter(
    (listaPedriatia) => {
      return listaPedriatia.edad < 10;
    }
  );

  return listaPedriatiaMenores;
};

// EJERCICIO 2 FUNCIONES
export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente): boolean => {
    if (paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39) {
      return true;
    }

    return false;
  });
};

// EJERCICIO 3 FUNCIONES
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let nuevaLista: Pacientes[] = pacientes.map((lista: Pacientes): Pacientes => {
    return lista.especialidad === "Pediatra"
      ? {
          ...lista,
          especialidad: "Medico de familia",
        }
      : {
          ...lista,
        };
  });
  return nuevaLista;
};

// EJERCICIO 4 FUNCIONES

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const listaPedriatia: Pacientes[] =
    obtenPacientesAsignadosAPediatria(pacientes);
  return listaPedriatia.length === 0 ? true : false;
};

// EJERCICIO 5 FUNCIONES
const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  pacientes.forEach((paciente) => {
    switch (paciente.especialidad) {
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
  });

  return numeroPacientesPorEspecialidad;
};
