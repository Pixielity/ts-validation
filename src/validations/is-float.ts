import { isNumber } from "./is-number"
import { isInteger } from "./is-integer"

/**
 * Checks if a value is a floating-point number.
 *
 * This function determines whether the provided value is a number but not an integer,
 * meaning it has a fractional component. It first checks if the value is a number
 * using the isNumber function, then verifies it's not an integer using the isInteger function.
 *
 * @param value - The value to check
 * @returns True if the value is a floating-point number, false otherwise
 * @category Number Validations
 *
 * @example
 * // Check if a value is a floating-point number
 * if (isFloat(3.14)) {
 *   // Value is a floating-point number
 * }
 *
 * isFloat(3.14); // true
 * isFloat(0.0); // false (equivalent to integer 0)
 * isFloat(42); // false (integer)
 * isFloat(NaN); // false (not a number)
 * isFloat(Infinity); // false (not a float)
 * isFloat("3.14"); // false (string, not number)
 */
export function isFloat(value: any): value is number {
  if (!isNumber(value)) {
    return false
  }

  // A float is a number that is not an integer
  return !isInteger(value)
}
