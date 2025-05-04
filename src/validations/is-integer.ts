import { isNumber } from "./is-number"

/**
 * Checks if a value is an integer.
 *
 * This function determines whether the provided value is a number and an integer
 * (a whole number without a fractional component). It first checks if the value
 * is a number using the isNumber function, then uses Number.isInteger to verify
 * it's an integer.
 *
 * @param value - The value to check
 * @returns True if the value is an integer, false otherwise
 * @category Number Validations
 *
 * @example
 * // Check if a value is an integer
 * if (isInteger(42)) {
 *   // Value is an integer
 * }
 *
 * isInteger(42); // true
 * isInteger(0); // true
 * isInteger(-42); // true
 * isInteger(3.14); // false (has decimal part)
 * isInteger(NaN); // false (not a number)
 * isInteger(Infinity); // false (not an integer)
 * isInteger("42"); // false (string, not number)
 */
export function isInteger(value: any): value is number {
  if (!isNumber(value)) {
    return false
  }

  // Use Number.isInteger to check if the value is an integer
  return Number.isInteger(value)
}
