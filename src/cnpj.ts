import { extractDigits } from "./utils";

/**
 * Checks if the provided CNPJ has a valid length.
 * @param value The CNPJ value to validate.
 * @returns A boolean indicating whether the length is valid.
 */
export function isValidCNPJLength(value: string | number): boolean {
  value = extractDigits(value);

  // Checks if the CNPJ number has 14 digits
  return value.length === 14;
}

/**
 * Checks if the provided CNPJ has a valid length.
 * @param value The CNPJ value to validate.
 * @returns A boolean indicating whether the length is valid.
 */
export function isValidCNPJDigits(value: string | number): boolean {
  value = extractDigits(value);

  // Eliminates invalids with all the same digits
  const isAllEqual: boolean = /^(\d)\1+$/.test(value);

  return !isAllEqual;
}

/**
 * Checks if the provided CNPJ has a valid firs check digit.
 * @param value The CNPJ value to validate.
 * @returns A boolean indicating whether the firs check digit is valid.
 */
export function isValidCNPJFirstCheckDigit(value: string | number): boolean {
  value = extractDigits(value);

  let sum: number = 0;
  let factor: number = 5;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(value.charAt(i), 10) * factor--;

    if (factor === 1) factor = 9;
  }

  const remainder: number = sum % 11;
  const digit: number = remainder < 2 ? 0 : 11 - remainder;

  return parseInt(value.charAt(12), 10) === digit;
}

/**
 * Checks if the provided CNPJ has a valid second check digit.
 * @param value The CNPJ value to validate.
 * @returns A boolean indicating whether the second check digit is valid.
 */
export function isValidCNPJSecondCheckDigit(value: string | number): boolean {
  value = extractDigits(value);

  let sum: number = 0;
  let factor: number = 6;

  for (let i = 0; i < 13; i++) {
    sum += parseInt(value.charAt(i), 10) * factor--;

    if (factor === 1) factor = 9;
  }

  const remainder: number = sum % 11;
  const digit: number = remainder < 2 ? 0 : 11 - remainder;

  return parseInt(value.charAt(13), 10) === digit;
}

/**
 * Checks if the provided CNPJ is valid.
 * @param value The CNPJ value to validate.
 * @returns A boolean indicating whether the CNPJ is valid.
 */
export function isValidCNPJ(value: string | number): boolean {
  // Check if the CNPJ number satisfies all the conditions: length, not equals digits, first check digit and second check digit
  return (
    isValidCNPJLength(value) &&
    isValidCNPJDigits(value) &&
    isValidCNPJFirstCheckDigit(value) &&
    isValidCNPJSecondCheckDigit(value)
  );
}
