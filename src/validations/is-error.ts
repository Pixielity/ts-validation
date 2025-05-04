

/**
 * Checks if a value is an Error.
 *
 * This function determines whether the provided value is an Error object or
 * an instance of a class that extends Error (like TypeError, RangeError, etc.).
 * It uses the instanceof operator to check if the value is an instance of Error.
 *
 * @param value - The value to check
 * @returns True if the value is an Error, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is an Error
 * if (isError(new Error('Something went wrong'))) {
 *   // Value is an Error
 * }
 *
 * isError(new Error('Something went wrong')); // true
 * isError(new TypeError('Invalid type')); // true
 * isError(new RangeError('Value out of range')); // true
 * isError({ message: 'Error-like object' }); // false (plain object)
 * isError('Error message'); // false (string, not Error)
 */
export function isError(value: any): value is Error {
  return value instanceof Error
}
