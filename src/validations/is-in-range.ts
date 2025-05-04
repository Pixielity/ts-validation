import { isNumber } from "./is-number"

/**
 * Checks if a number is within a specified range.
 *
 * This function determines whether the provided value is a number and falls
 * within the specified range (inclusive of both min and max values).
 *
 * @param value - The value to check
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns True if the number is within the range, false otherwise
 * @category Number Validations
 *
 * @example
 * // Check if a number is between 1 and 10
 * if (isInRange(5, 1, 10)) {
 *   // Number is within range
 * }
 *
 * isInRange(5, 1, 10); // true
 * isInRange(1, 1, 10); // true (min value is included)
 * isInRange(10, 1, 10); // true (max value is included)
 * isInRange(0, 1, 10); // false (too small)
 * isInRange(11, 1, 10); // false (too large)
 * isInRange(NaN, 1, 10); // false (not a number)
 * isInRange("5", 1, 10); // false (string, not number)
 */
export function isInRange(value: any, min: number, max: number): boolean {
  if (!isNumber(value)) {
    return false
  }

  // Check if the value is within the range (inclusive)
  return value >= min && value <= max
}
