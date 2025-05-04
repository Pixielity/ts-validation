

/**
 * Checks if a value is null or undefined.
 *
 * This function determines whether the provided value is either null or undefined.
 * It uses strict equality (===) to check if the value is null or undefined.
 *
 * @param value - The value to check
 * @returns True if the value is null or undefined, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is null or undefined
 * if (isNullOrUndefined(value)) {
 *   // Handle null or undefined value
 * }
 *
 * isNullOrUndefined(null); // true
 * isNullOrUndefined(undefined); // true
 * isNullOrUndefined(0); // false
 * isNullOrUndefined(""); // false
 */
export function isNullOrUndefined(value: any): value is null | undefined {
  return value === null || value === undefined
}
