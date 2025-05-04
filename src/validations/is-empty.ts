import { isNullOrUndefined } from "./is-null-or-undefined"
import { isString } from "./is-string"
import { isArray } from "./is-array"
import { isObject } from "./is-object"

/**
 * Checks if a value is empty (null, undefined, empty string, empty array, or empty object).
 *
 * This function determines whether the provided value is considered "empty" based on its type:
 * - null or undefined: considered empty
 * - string: considered empty if it's an empty string or contains only whitespace
 * - array: considered empty if it has no elements
 * - object: considered empty if it has no own enumerable properties
 * - other types: not considered empty
 *
 * @param value - The value to check
 * @returns True if the value is empty, false otherwise
 * @category General Validations
 *
 * @example
 * // Check if a value is empty
 * if (isEmpty(value)) {
 *   // Handle empty value
 * }
 *
 * isEmpty(null); // true
 * isEmpty(undefined); // true
 * isEmpty(""); // true
 * isEmpty("   "); // true (whitespace is considered empty)
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty("hello"); // false
 * isEmpty([1, 2, 3]); // false
 * isEmpty({ name: "John" }); // false
 * isEmpty(0); // false (numbers are never considered empty)
 * isEmpty(false); // false (booleans are never considered empty)
 */
export function isEmpty(value: any): boolean {
  // Check for null or undefined
  if (isNullOrUndefined(value)) {
    return true
  }

  // Check for empty string or string with only whitespace
  if (isString(value)) {
    return value.trim() === ""
  }

  // Check for empty array
  if (isArray(value)) {
    return value.length === 0
  }

  // Check for empty object (no own enumerable properties)
  if (isObject(value)) {
    return Object.keys(value).length === 0
  }

  // Other types (number, boolean, function, etc.) are never considered empty
  return false
}
