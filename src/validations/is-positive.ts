import { isNumber } from "./is-number"

/**
 * Checks if a value is a positive number.
 *
 * This function determines whether the provided value is a number and is positive
 * (greater than 0). It can optionally allow zero as a positive number based on
 * the options.
 *
 * @param value - The value to check
 * @param options - Optional configuration { allowZero: boolean }
 * @returns True if the value is a positive number, false otherwise
 * @category Number Validations
 *
 * @example
 * // Check if a value is a positive number
 * if (isPositive(42)) {
 *   // Value is a positive number
 * }
 *
 * isPositive(42); // true
 * isPositive(0); // false (zero is not positive by default)
 * isPositive(0, { allowZero: true }); // true
 * isPositive(-42); // false (negative)
 * isPositive(3.14); // true (positive float)
 * isPositive(NaN); // false (not a number)
 * isPositive("42"); // false (string, not number)
 */
export function isPositive(value: any, options: { allowZero?: boolean } = {}): boolean {
  if (!isNumber(value)) {
    return false
  }

  // Check if the value is positive, optionally allowing zero
  return options.allowZero ? value >= 0 : value > 0
}
