

/**
 * Checks if a value is NaN (Not a Number).
 *
 * This function determines whether the provided value is NaN. It uses the
 * Number.isNaN method, which reliably identifies only the actual NaN value,
 * unlike the global isNaN function that returns true for any value that
 * cannot be coerced to a number.
 *
 * @param value - The value to check
 * @returns True if the value is NaN, false otherwise
 * @category Number Validations
 *
 * @example
 * // Check if a value is NaN
 * if (isNaN(NaN)) {
 *   // Value is NaN
 * }
 *
 * isNaN(NaN); // true
 * isNaN(Number.NaN); // true
 * isNaN(0 / 0); // true
 * isNaN(42); // false
 * isNaN(0); // false
 * isNaN("NaN"); // false (string, not NaN)
 * isNaN(undefined); // false (unlike global isNaN)
 * isNaN({}); // false (unlike global isNaN)
 */
export function isNaN(value: any): boolean {
  // Use Number.isNaN to check if the value is NaN
  return Number.isNaN(value)
}
