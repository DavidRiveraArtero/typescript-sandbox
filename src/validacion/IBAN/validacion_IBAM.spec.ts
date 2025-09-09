import { validarIban } from "./validacion_IBAN";

describe("validarIban", () => {
  it.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
  ])("El IBAN con numero %s es %s", (iban: string, isCorrect: boolean) => {
    expect(validarIban(iban)).toEqual(isCorrect);
  });
});
