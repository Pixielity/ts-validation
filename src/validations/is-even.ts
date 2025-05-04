import { isInteger } from "./is-integer"

/**
 * Checks if a number is even.
 *
 * This function determines whether the provided value is an integer and is even
 * (divisible by 2 with no remainder). It first checks if the value is an integer
 * using the isInteger function, then checks if it's divisible by 2.
 *
 * @param value - The value to check
 * @returns True if the number is even, false otherwise
 * @category Number Validations
 *
 * @example
 * // Check if a number is even
 * if (isEven(42)) {
 *   // Number is even
 * }
 *
 * isEven(42); // true
 * isEven(0); // true
 * isEven(-42); // true
 * isEven(43); // false (odd)
 * isEven(3.14); // false (not an integer)
 * isEven(NaN); // false (not a number)
 * isEven("42"); // false (string, not number)
 */
export function isEven(value: any): boolean {
  if (!isInteger(value)) {
    return false
  }

  // Check if the value is divisible by 2 with no remainder
  return value % 2 === 0
}
