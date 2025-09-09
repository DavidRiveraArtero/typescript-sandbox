import "./style.css";
import { extractIBAN } from "ibantools";
import {
  validarIban,
  ExtractIBANResult,
} from "./validacion/IBAN/validacion_IBAN";
import { codeSucursal } from "./validacion/IBAN/sucursales.model";
export const getSucursal = async () => {
  const list = [
    "ES9121000418450200051332", // Caixabank
    "ES7921000813610123456789", // Caixabank (ejemplo)
    "ES4721000418401234567891", // Santander (ejemplo)
    "ES9121000418450200051332", // BBVA
    "ES9121000000001234567890", // Ejemplo genérico
    "ES9820385778983000760236", // Bankia
    "ES7620770024003102575766", // Ibercaja
    "ES7001822370180200059012", // BBVA
    "ES7100302053091234567895", // Santander
    "ES2100490026123456789012",
  ];

  for (var x = 0; x < list.length; x++) {
    if (validarIban(list[x])) {
      const sucursal: ExtractIBANResult = extractIBAN(list[x]);
      if (sucursal.bankIdentifier) {
        console.log(codeSucursal[sucursal.bankIdentifier]);
      }
    }
  }
};

getSucursal();
