import { extractDigits } from "./utils";

/**
 * Checks if the provided phone number's DDD (area code) is valid.
 * @param value The phone number value to validate.
 * @returns A boolean indicating whether the DDD is valid.
 */
export function isValidPhoneAreaCode(value: string | number): boolean {
  value = extractDigits(value);

  // Check if the first two digits of the phone number are in the areaCodes array
  return areaCodes.includes(Number(value.substr(0, 2)));
}

/**
 * Checks if the provided phone number has a valid length.
 * @param value The phone number value to validate.
 * @returns A boolean indicating whether the length is valid.
 */
export function isValidPhoneLength(value: string | number): boolean {
  value = extractDigits(value);

  // Check if the phone number has a length between 10 and 11 digits
  return value.length >= 10 && value.length <= 11;
}

/**
 * Checks if the provided phone number's first number is valid.
 * @param value The phone number value to validate.
 * @returns A boolean indicating whether the first number is valid.
 */
export function isValidPhoneFirstNumber(value: string | number): boolean {
  value = extractDigits(value);

  // If the phone number has 11 digits, check if the third digit is '9'
  // Otherwise, return true
  return value.length === 11 ? value.charAt(2) === "9" : true;
}

/**
 * Checks if the provided phone number is valid.
 * @param value The phone number value to validate.
 * @returns A boolean indicating whether the phone number is valid.
 */
export function isValidPhone(value: string | number): boolean {
  // Check if the phone number satisfies all the conditions: length, first number and DDD
  return (
    isValidPhoneLength(value) &&
    isValidPhoneFirstNumber(value) &&
    isValidPhoneAreaCode(value)
  );
}

/**
 * An array of valid area codes (DDDs) for phone numbers.
 */
export const areaCodes: number[] = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
  37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64,
  65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
  89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
];
