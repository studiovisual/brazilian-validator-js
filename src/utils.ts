/**
 * Extracts only the digits from the provided value.
 * @param value The value to extract digits from. Accepts both strings and numbers.
 * @returns A string containing only the extracted digits.
 */
export function extractDigits(value: string | number): string {
  // Convert the value to a string and remove non-digit characters
  const digits: string = String(value);

  return digits.replace(/[^\d]/g, "");
}
