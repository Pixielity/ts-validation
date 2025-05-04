

/**
 * Checks if a value is null.
 *
 * This function determines whether the provided value is null.
 * It uses strict equality (===) to check if the value is null.
 *
 * @param value - The value to check
 * @returns True if the value is null, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is null
 * if (isNull(value)) {
 *   // Handle null value
 * }
 *
 * isNull(null); // true
 * isNull(undefined); // false
 * isNull(0); // false
 * isNull(""); // false
 */
export function isNull(value: any): value is null {
  return value === null
}
