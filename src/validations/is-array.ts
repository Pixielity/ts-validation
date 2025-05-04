

/**
 * Checks if a value is an array.
 *
 * This function determines whether the provided value is an array.
 * It uses the Array.isArray method which reliably identifies arrays
 * across different contexts and frames.
 *
 * @param value - The value to check
 * @returns True if the value is an array, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is an array
 * if (isArray([1, 2, 3])) {
 *   // Do something with the array
 * }
 *
 * isArray([1, 2, 3]); // true
 * isArray([]); // true
 * isArray({}); // false
 * isArray("array"); // false
 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value)
}
