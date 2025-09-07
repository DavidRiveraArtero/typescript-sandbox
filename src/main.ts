import {
  getPersonajeFiltrado,
  getPersonajes,
} from "./personajes/personaje.api";
import { MAIN_URL, Personajes } from "./personajes/personajes.model";

const mainSection = document.getElementById("main_section");

const card = async (): Promise<void> => {
  const personajes = await getPersonajes();
  if (mainSection && mainSection instanceof HTMLElement) {
    addInfo(personajes, mainSection);
  }
};

const addInfo = (personajes: Personajes[], mainSection: HTMLElement) => {
  personajes.forEach((personaje) => {
    const mainSectionContainer = document.createElement("div");
    const imagen = document.createElement("img");
    const nombre = document.createElement("p");
    const especialidad = document.createElement("p");
    const habilidad = document.createElement("p");

    mainSection.appendChild(mainSectionContainer);
    mainSectionContainer.className = "main_section_container";
    mainSectionContainer.appendChild(imagen);
    mainSectionContainer.appendChild(
      nombre
    ).innerText = `Nombre: ${personaje.nombre}`;
    mainSectionContainer.appendChild(
      especialidad
    ).innerText = `Especialidad: ${personaje.especialidad}`;
    mainSectionContainer.appendChild(
      habilidad
    ).innerText = `Especialidad: ${personaje.habilidades}`;
    imagen.src = `${MAIN_URL}${personaje.imagen}`;
  });
};

const deleteCard = () => {
  const deleteMainSectionContainer = document.getElementsByClassName(
    "main_section_container"
  );
  for (var x = deleteMainSectionContainer.length - 1; x >= 0; x--) {
    deleteMainSectionContainer[x].remove();
  }
};

const getSearch = (): string => {
  const textDocument = document.getElementById("searchText");
  if (textDocument && textDocument instanceof HTMLInputElement) {
    return textDocument.value;
  }
  return "";
};

const updateCharacterList = async (): Promise<void> => {
  const newList = await getPersonajeFiltrado(getSearch());
  deleteCard();
  if (mainSection && mainSection instanceof HTMLElement) {
    addInfo(newList, mainSection);
  }
};

addEventListener("DOMContentLoaded", async () => {
  const searchBTN = document.getElementById("search");
  card();
  if (searchBTN && searchBTN instanceof HTMLButtonElement) {
    searchBTN?.addEventListener("click", (e) => {
      e.preventDefault();
      updateCharacterList();
    });
  }
});
