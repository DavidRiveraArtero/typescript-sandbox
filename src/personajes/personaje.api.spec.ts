import { getPersonajeFiltrado } from "./personaje.api";

describe("getPersonajeFiltrado", () => {
  it("Tendria que regresar un personaje", async () => {
    const personaje = [
      {
        id: "1",
        nombre: "Mortadelo",
        apodo: "Mortadelo",
        especialidad: "Disfraces",
        habilidades: ["Camuflaje", "Imitaciones", "Huida rápida"],
        amigo: "Filemón",
        imagen: "mortadelo.webp",
      },
    ];

    // ACT

    const resultado = await getPersonajeFiltrado("Mortadelo");

    // ASSERT
    expect(resultado).toEqual(personaje);
  });
});
