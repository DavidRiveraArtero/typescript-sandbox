import {
  LineaTicket,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TotalPorTipoIva,
} from "./modelo";
import {
  calcularIva,
  calcularLineaTicket,
  calcularTotalTicket,
  calcularTotalTipoIva,
  tiposIva,
} from "./motor";

describe("calcularLineaTicket", () => {
  it("deberia regresar una lista cons los tickets calculados", () => {
    // ARR
    const productos: LineaTicket[] = [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      },
      {
        producto: {
          nombre: "Perfume",
          precio: 20,
          tipoIva: "general",
        },
        cantidad: 3,
      },
      {
        producto: {
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC",
        },
        cantidad: 6,
      },
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
        },
        cantidad: 1,
      },
    ];

    // adas
    const resultado = calcularLineaTicket(productos);

    // Assert
    const resultadoEsperado: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precionSinIva: 2,
        tipoIva: "general",
        precioConIva: 2.42,
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precionSinIva: 20,
        tipoIva: "general",
        precioConIva: 24.2,
      },
      {
        nombre: "Leche",
        cantidad: 6,
        precionSinIva: 1,
        tipoIva: "superreducidoC",
        precioConIva: 1,
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precionSinIva: 5,
        tipoIva: "superreducidoA",
        precioConIva: 5.25,
      },
    ];

    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("TiposIva", () => {
  it.each([
    ["general", 21],
    ["reducido", 10],
  ])(
    "El porcentaje de %s tendría que ser %s",
    (tipoIva: string, porcentaje: number) => {
      // Aquí puedes poner la lógica de tu test
      expect(tiposIva(tipoIva)).toBe(porcentaje);
    }
  );
});

describe("CalcularIva", () => {
  it.each([
    ["general", 2, 2.42],
    ["reducido", 1, 1.1],
  ])(
    "el %s del Iva del precio %s es de %s",
    (iva: string, precio: number, resultado: number) => {
      expect(calcularIva(iva, precio)).toBe(resultado);
    }
  );
});

describe("calcularTotalTicket", () => {
  it("Deberia regresar el calculo todal de precio iva etc", () => {
    // ARR
    const resultadoLineaTicket: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precionSinIva: 2,
        tipoIva: "general",
        precioConIva: 2.42,
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precionSinIva: 20,
        tipoIva: "general",
        precioConIva: 24.2,
      },
      {
        nombre: "Leche",
        cantidad: 6,
        precionSinIva: 1,
        tipoIva: "superreducidoC",
        precioConIva: 1,
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precionSinIva: 5,
        tipoIva: "superreducidoA",
        precioConIva: 5.25,
      },
    ];

    //
    const resultado = calcularTotalTicket(resultadoLineaTicket);

    // ASSERT
    const esperado: ResultadoTotalTicket = {
      totalSinIva: 75,
      totalConIva: 88.69,
      totalIva: 13.69,
    };
    expect(resultado).toEqual(esperado);
  });
});

describe("calcularTotalTipoIva", () => {
  it("aaa", () => {
    // ARR
    const resultadoEsperado: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precionSinIva: 2,
        tipoIva: "general",
        precioConIva: 2.42,
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precionSinIva: 20,
        tipoIva: "general",
        precioConIva: 24.2,
      },
      {
        nombre: "Leche",
        cantidad: 6,
        precionSinIva: 1,
        tipoIva: "superreducidoC",
        precioConIva: 1,
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precionSinIva: 5,
        tipoIva: "superreducidoA",
        precioConIva: 5.25,
      },
    ];

    //
    const resultado = calcularTotalTipoIva(resultadoEsperado);

    // ASSERT
    const resultadoFinal: TotalPorTipoIva[] = [
      {
        tipoIva: "general",
        cuantia: 26.62,
      },
      {
        tipoIva: "superreducidoC",
        cuantia: 1,
      },
      {
        tipoIva: "superreducidoA",
        cuantia: 5.25,
      },
    ];
    expect(resultado).toEqual(resultadoFinal);
  });
});
