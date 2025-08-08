import {
  activarProtocoloUrgencia,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
} from "./motor";
import { Pacientes, pacientes } from "./model";

describe("activarProtocoloUrgencia", () => {
  it("MIRAMOS SI EL PACIENTE ESTA EN ESTADO DE URGENCIAS", () => {
    // ARRANGE
    const valorEsperado: boolean = true;
    // ACT
    const resultado = activarProtocoloUrgencia(pacientes[4]);

    // ASSERT
    expect(resultado).toBe(valorEsperado);
  });
});

describe("obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios", () => {
  it("MIRAMOS SI EL PACIENTE TIENE MENOS DE 10 AÑOS", () => {
    // ARRAGNE
    const resultadoEsperado: Pacientes[] = [
      {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
      },
    ];
    // ACT
    const resultado =
      obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);

    // ASSERT
    expect(resultado).toStrictEqual(resultadoEsperado); // NO CREO QUE ESTO SEA CORRECTO, YA QUE ESTO MIRA LA ESTRUCTURA DEL OBJETO
  });
});
