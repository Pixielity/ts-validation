import { isString } from "./is-string"

/**
 * Checks if a string is a hexadecimal number.
 *
 * This function determines whether the provided value is a string and contains
 * only hexadecimal characters (0-9, A-F, a-f). It does not require the "0x" prefix.
 *
 * @param value - The value to check
 * @returns True if the string is a hexadecimal number, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is a hexadecimal number
 * if (isHexadecimal("A1B2C3")) {
 *   // String is a hexadecimal number
 * }
 *
 * isHexadecimal("A1B2C3"); // true
 * isHexadecimal("a1b2c3"); // true
 * isHexadecimal("0x123ABC"); // false (contains 'x')
 * isHexadecimal("GHIJK"); // false (contains non-hex characters)
 * isHexadecimal(""); // false (empty string)
 * isHexadecimal(123); // false (not a string)
 */
export function isHexadecimal(value: any): boolean {
  if (!isString(value)) {
    return false
  }

  return /^[0-9A-Fa-f]+$/.test(value)
}
