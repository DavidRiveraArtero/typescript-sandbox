export const extract_src = (txtArea: string): string[] => {
  const txtAreaValidation: RegExp = /(?<img><img\s(src)?.*>)$/gm;
  const existImg = txtArea.match(txtAreaValidation);
  if (existImg) {
    return existImg;
  } else {
    console.log("NO EXISTE IMG");
    return [];
  }
};
