import { isNumber } from "./is-number"

/**
 * Checks if a value is zero.
 *
 * This function determines whether the provided value is a number and is exactly zero.
 *
 * @param value - The value to check
 * @returns True if the value is zero, false otherwise
 * @category Number Validations
 *
 * @example
 * // Check if a value is zero
 * if (isZero(0)) {
 *   // Value is zero
 * }
 *
 * isZero(0); // true
 * isZero(0.0); // true
 * isZero(-0); // true
 * isZero(42); // false
 * isZero(-42); // false
 * isZero(NaN); // false (not a number)
 * isZero("0"); // false (string, not number)
 */
export function isZero(value: any): boolean {
  if (!isNumber(value)) {
    return false
  }

  // Check if the value is exactly zero
  return value === 0
}
