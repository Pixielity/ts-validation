import { isInteger } from "./is-integer"

/**
 * Checks if a number is odd.
 *
 * This function determines whether the provided value is an integer and is odd
 * (not divisible by 2). It first checks if the value is an integer using the
 * isInteger function, then checks if it's not divisible by 2.
 *
 * @param value - The value to check
 * @returns True if the number is odd, false otherwise
 * @category Number Validations
 *
 * @example
 * // Check if a number is odd
 * if (isOdd(43)) {
 *   // Number is odd
 * }
 *
 * isOdd(43); // true
 * isOdd(1); // true
 * isOdd(-43); // true
 * isOdd(42); // false (even)
 * isOdd(0); // false (even)
 * isOdd(3.14); // false (not an integer)
 * isOdd(NaN); // false (not a number)
 * isOdd("43"); // false (string, not number)
 */
export function isOdd(value: any): boolean {
  if (!isInteger(value)) {
    return false
  }

  // Check if the value is not divisible by 2
  return value % 2 !== 0
}
