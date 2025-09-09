import { extract_src } from "./validacion/img/extraer_img";

const getTextArea = document.getElementById("content-textarea");

export const getImagen = (): void => {
  if (getTextArea && getTextArea instanceof HTMLTextAreaElement) {
    const allImg = extract_src(getTextArea.value);
    createIMG(allImg);
  }
};

const createIMG = (allImg: string[]): void => {
  const getSectionImg = document.getElementById("section-img");

  if (getSectionImg && getSectionImg instanceof HTMLElement) {
    allImg.forEach((img) => {
      const div = document.createElement("div");
      div.innerHTML = img;
      console.log("div: ", div.firstChild);
      getSectionImg.appendChild(div.firstChild as HTMLImageElement);
    });
  }
};
