import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
  validarClave,
} from "./motor";
import { commonPasswords, ValidacionClave } from "./modelo";
describe("tieneMayusculasYMinusculas", () => {
  it.each([
    ["holaMundo", { esValida: true, error: "" }],
    ["Juan123", { esValida: true, error: "" }],
  ])("Deberia regresar true", (password: string, esperado: ValidacionClave) => {
    expect(tieneMayusculasYMinusculas(password)).toEqual(esperado);
  });

  it.each([
    [
      "holamundo",
      {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      },
    ],
    [
      "juan123",
      {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      },
    ],
  ])(
    "Deberia regresar false",
    (password: string, esperado: ValidacionClave) => {
      expect(tieneMayusculasYMinusculas(password)).toEqual(esperado);
    }
  );
});

describe("tieneNumeros", () => {
  it.each([
    ["123hOla", { esValida: true, error: "" }],
    ["peDro123", { esValida: true, error: "" }],
  ])(
    "Deberia de regresar true con esta password: %s",
    (password: string, esperado: ValidacionClave) => {
      expect(tieneNumeros(password)).toEqual(esperado);
    }
  );

  it.each([
    ["hOla", { esValida: false, error: "La clave debe de tener números" }],
    ["peDro", { esValida: false, error: "La clave debe de tener números" }],
  ])(
    "Deberia de regresar false con esta password: %s",
    (password: string, esperado: ValidacionClave) => {
      expect(tieneNumeros(password)).toEqual(esperado);
    }
  );
});

describe("tieneCaracteresEspeciales", () => {
  it.each([
    ["hola!", { esValida: true, error: "" }],
    ["hola*", { esValida: true, error: "" }],
  ])(
    "Deberia de regresar true con esta password: %s",
    (password: string, esperado: ValidacionClave) => {
      expect(tieneCaracteresEspeciales(password)).toEqual(esperado);
    }
  );

  it.each([
    [
      "hola",
      {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      },
    ],
    [
      "12345pais",
      {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      },
    ],
  ])(
    "Deberia de regresar false con esta password: %s",
    (password: string, esperado: ValidacionClave) => {
      expect(tieneCaracteresEspeciales(password)).toEqual(esperado);
    }
  );
});

describe("tieneLongitudMinima", () => {
  it.each([
    ["cuantosdias", { esValida: true, error: "" }],
    ["juan2023", { esValida: true, error: "" }],
  ])(
    "Deberia de regresar true con esta password: %s",
    (password: string, esperado: ValidacionClave) => {
      expect(tieneLongitudMinima(password)).toEqual(esperado);
    }
  );

  it.each([
    [
      "cuan",
      {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      },
    ],
    [
      "juan",
      {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      },
    ],
  ])(
    "Deberia de regresar false con esta password: %s",
    (password: string, esperado: ValidacionClave) => {
      expect(tieneLongitudMinima(password)).toEqual(esperado);
    }
  );
});

describe("tieneNombreUsuario", () => {
  it.each([
    ["adasda", "aguaLeon", { esValida: true, error: "" }],
    ["sus", "pedro", { esValida: true, error: "" }],
  ])(
    "Deberia de regresar true con esta password: %s",
    (password: string, usuario: string, esperado: ValidacionClave) => {
      expect(tieneNombreUsuario(usuario, password)).toEqual(esperado);
    }
  );

  it.each([
    [
      "loqueAguaLeon2023",
      "aguaLeon",
      {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      },
    ],
    [
      "2023Pedro",
      "pedro",
      {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      },
    ],
  ])(
    "Deberia de regresar false con esta password: %s",
    (password: string, usuario: string, esperado: ValidacionClave) => {
      expect(tieneNombreUsuario(usuario, password)).toEqual(esperado);
    }
  );
});

describe("tienePalabrasComunes", () => {
  it.each([
    ["contraseña2023", { esValida: true, error: "" }],
    ["puedeser2023", { esValida: true, error: "" }],
  ])(
    "Deberia de regresar true con esta password: %s",
    (password: string, esperado: ValidacionClave) => {
      expect(tienePalabrasComunes(password, commonPasswords)).toEqual(esperado);
    }
  );

  it.each([
    [
      "admin",
      {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      },
    ],
    [
      "123456789",
      {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      },
    ],
  ])(
    "Deberia de regresar false con esta password: %s",
    (password: string, esperado: ValidacionClave) => {
      expect(tienePalabrasComunes(password, commonPasswords)).toEqual(esperado);
    }
  );
});

describe("validarClave", () => {
  it.each([
    ["usuario23", "cOntraseña!23", { esValida: true, error: "" }],
    ["admin", "holaMundo!23", { esValida: true, error: "" }],
  ])(
    "Con este usuario: %s y esta contraseña: %s tendria que ser valida",
    (usuario: string, contraseña: string, esperado: ValidacionClave) => {
      expect(validarClave(usuario, contraseña, commonPasswords)).toEqual(
        esperado
      );
    }
  );

  it.each([
    [
      "qwerty",
      "admin24",
      {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      },
    ],
    [
      "admin",
      "!2admin",
      {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      },
    ],
  ])(
    "Con este usuario: %s y esta contraseña: %s no tendria que ser valida",
    (usuario: string, contraseña: string, esperado: ValidacionClave) => {
      expect(validarClave(usuario, contraseña, commonPasswords)).toEqual(
        esperado
      );
    }
  );
});
