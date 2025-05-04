

/**
 * Checks if a value is a string.
 *
 * This function determines whether the provided value is of type string.
 * It uses the typeof operator to check the type.
 *
 * @param value - The value to check
 * @returns True if the value is a string, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a string
 * if (isString("hello")) {
 *   // Do something with the string
 * }
 *
 * isString("hello"); // true
 * isString(123); // false
 * isString(null); // false
 */
export function isString(value: any): value is string {
  return typeof value === "string"
}
