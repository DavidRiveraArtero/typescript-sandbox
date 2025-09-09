export interface ExtractIBANResult {
  accountNumber?: string;
  bankIdentifier?: string;
  bban?: string;
  branchIdentifier?: string;
  countryCode?: string;
  iban: string;
  valid: boolean;
}
export const validarIban = (iban: string): boolean => {
  const regexIban: RegExp =
    /[A-Z]{2}\d{2}\-?\s?(\d{4}\-?\s?){2}\d{2}\-?\s?\d{10}/;
  return regexIban.test(iban);
};
