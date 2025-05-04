

/**
 * Checks if a value is a number.
 *
 * This function determines whether the provided value is of type number and is not NaN.
 * It uses the typeof operator to check the type and the isNaN function to ensure it's not NaN.
 *
 * @param value - The value to check
 * @returns True if the value is a number (and not NaN), false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a number
 * if (isNumber(42)) {
 *   // Do something with the number
 * }
 *
 * isNumber(42); // true
 * isNumber(3.14); // true
 * isNumber(NaN); // false
 * isNumber("42"); // false
 */
export function isNumber(value: any): value is number {
  return typeof value === "number" && !isNaN(value)
}
