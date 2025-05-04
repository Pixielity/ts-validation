import { isNumber } from "./is-number"

/**
 * Checks if a value is a negative number.
 *
 * This function determines whether the provided value is a number and is negative
 * (less than 0). It can optionally allow zero as a negative number based on
 * the options.
 *
 * @param value - The value to check
 * @param options - Optional configuration { allowZero: boolean }
 * @returns True if the value is a negative number, false otherwise
 * @category Number Validations
 *
 * @example
 * // Check if a value is a negative number
 * if (isNegative(-42)) {
 *   // Value is a negative number
 * }
 *
 * isNegative(-42); // true
 * isNegative(0); // false (zero is not negative by default)
 * isNegative(0, { allowZero: true }); // true
 * isNegative(42); // false (positive)
 * isNegative(-3.14); // true (negative float)
 * isNegative(NaN); // false (not a number)
 * isNegative("-42"); // false (string, not number)
 */
export function isNegative(value: any, options: { allowZero?: boolean } = {}): boolean {
  if (!isNumber(value)) {
    return false
  }

  // Check if the value is negative, optionally allowing zero
  return options.allowZero ? value <= 0 : value < 0
}
