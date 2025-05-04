

/**
 * Checks if a value is undefined.
 *
 * This function determines whether the provided value is undefined.
 * It uses strict equality (===) to check if the value is undefined.
 *
 * @param value - The value to check
 * @returns True if the value is undefined, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is undefined
 * if (isUndefined(value)) {
 *   // Handle undefined value
 * }
 *
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 * isUndefined(0); // false
 * isUndefined(""); // false
 */
export function isUndefined(value: any): value is undefined {
  return value === undefined
}
