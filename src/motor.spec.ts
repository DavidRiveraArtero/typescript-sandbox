import { checkNumberCard, randomNumber, sumarPuntuacion } from "./motor";
import * as modelo from "./modelo";

import { vi } from "vitest";

describe("sumarPuntuacion", () => {
  it("SUMA DE LA PUNTUACION", () => {
    // ARRANGE
    const numeroEsperado: number = 4;
    vi.spyOn(modelo, "puntuacion", "get").mockReturnValue(2);
    // ACT
    const resultado = sumarPuntuacion(2);

    // ASSERT
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("getNumeroAleatorio", () => {
  it("MIRAMOS SI EL NUMERO ALEATORIO TIENE UN RANGO ENTRE 1 y 10", () => {
    // ARRANGE
    const numeroEsperado = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.99);
    // ACT
    const resultado = randomNumber();
    // ASSERT
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("checkNumberCard", () => {
  it("SUMAR +2 A LAS CARTAS SUPERIORES A 7 ", () => {
    // ARRANGE
    const numeroEsperado = 10;
    // ACT
    const resultado = checkNumberCard(8);

    // ASSERT
    expect(resultado).toBe(numeroEsperado);
  });
});
