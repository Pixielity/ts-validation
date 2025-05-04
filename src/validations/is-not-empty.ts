import { isEmpty } from "./is-empty"

/**
 * Checks if a value is not empty.
 *
 * This function is the logical negation of the isEmpty function.
 * It determines whether the provided value is not considered "empty".
 * See the isEmpty function for the definition of "empty" for different types.
 *
 * @param value - The value to check
 * @returns True if the value is not empty, false otherwise
 * @category General Validations
 *
 * @example
 * // Check if a value is not empty
 * if (isNotEmpty(value)) {
 *   // Do something with the non-empty value
 * }
 *
 * isNotEmpty("hello"); // true
 * isNotEmpty([1, 2, 3]); // true
 * isNotEmpty({ name: "John" }); // true
 * isNotEmpty(0); // true (numbers are never considered empty)
 * isNotEmpty(false); // true (booleans are never considered empty)
 * isNotEmpty(null); // false
 * isNotEmpty(undefined); // false
 * isNotEmpty(""); // false
 * isNotEmpty("   "); // false (whitespace is considered empty)
 * isNotEmpty([]); // false
 * isNotEmpty({}); // false
 */
export function isNotEmpty(value: any): boolean {
  return !isEmpty(value)
}
