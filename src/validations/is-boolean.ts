

/**
 * Checks if a value is a boolean.
 *
 * This function determines whether the provided value is of type boolean.
 * It uses the typeof operator to check the type.
 *
 * @param value - The value to check
 * @returns True if the value is a boolean, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a boolean
 * if (isBoolean(true)) {
 *   // Do something with the boolean
 * }
 *
 * isBoolean(true); // true
 * isBoolean(false); // true
 * isBoolean(1); // false
 * isBoolean("true"); // false
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === "boolean"
}
