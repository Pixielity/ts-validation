import { isNumber } from "./is-number"

/**
 * Checks if a number is divisible by another number.
 *
 * This function determines whether the provided value is a number and is divisible
 * by the specified divisor (with no remainder). It first checks if both the value
 * and divisor are numbers, then checks if the divisor is not zero, and finally
 * checks if the value is divisible by the divisor.
 *
 * @param value - The value to check
 * @param divisor - The divisor
 * @returns True if the number is divisible by the divisor, false otherwise
 * @category Number Validations
 *
 * @example
 * // Check if a number is divisible by another number
 * if (isDivisibleBy(10, 2)) {
 *   // Number is divisible by the divisor
 * }
 *
 * isDivisibleBy(10, 2); // true
 * isDivisibleBy(10, 3); // false
 * isDivisibleBy(0, 5); // true (0 is divisible by any non-zero number)
 * isDivisibleBy(10, 0); // false (division by zero)
 * isDivisibleBy(NaN, 2); // false (not a number)
 * isDivisibleBy(10, NaN); // false (not a number)
 * isDivisibleBy("10", 2); // false (string, not number)
 */
export function isDivisibleBy(value: any, divisor: number): boolean {
  if (!isNumber(value) || !isNumber(divisor)) {
    return false
  }

  // Division by zero is undefined
  if (divisor === 0) {
    return false
  }

  // Check if the value is divisible by the divisor with no remainder
  return value % divisor === 0
}
