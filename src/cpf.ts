import { extractDigits } from "./utils";

/**
 * Checks if the provided CPF (Brazilian identification number) has a valid length.
 * @param value The CPF value to validate.
 * @returns A boolean indicating whether the length is valid.
 */
export function isValidCPFLength(value: string | number): boolean {
  value = extractDigits(value);

  // Checks if the CPF number has 11 digits
  return value.length === 11;
}

/**
 * Checks if the provided CPF (Brazilian identification number) is valid.
 * @param value The CPF value to validate.
 * @returns A boolean indicating whether the CPF is valid.
 */
export function isValidCPF(value: string | number): boolean {
  value = extractDigits(value);

  if (!isValidCPFLength(value)) return false;

  const values: number[] = value.split("").map((el) => +el);
  const rest = (count: number) =>
    ((values
      .slice(0, count - 12)
      .reduce((sum, el, index) => sum + el * (count - index), 0) *
      10) %
      11) %
    10;

  return rest(10) === values[9] && rest(11) === values[10];
}
