import { isString } from "./is-string"

/**
 * Checks if a string's length is within a specified range.
 *
 * This function determines whether the provided value is a string and its length
 * falls within the specified range. The range is defined by minimum and maximum
 * length values, where the minimum defaults to 0 if not provided.
 *
 * @param value - The value to check
 * @param options - Configuration { min?: number, max?: number }
 * @returns True if the string's length is within the specified range, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string's length is between 5 and 10 characters
 * if (isLength("hello", { min: 5, max: 10 })) {
 *   // String length is within range
 * }
 *
 * isLength("hello", { min: 5, max: 10 }); // true
 * isLength("hello world", { min: 5, max: 10 }); // false (too long)
 * isLength("hi", { min: 5, max: 10 }); // false (too short)
 * isLength("hello", { min: 5 }); // true (no maximum)
 * isLength("hello", { max: 10 }); // true (no minimum, defaults to 0)
 * isLength("", { min: 0 }); // true (empty string has length 0)
 * isLength(123, { min: 3 }); // false (not a string)
 */
export function isLength(value: any, options: { min?: number; max?: number } = {}): boolean {
  if (!isString(value)) {
    return false
  }

  // Set default minimum if not provided
  const { min = 0, max } = options
  const length = value.length

  // Check minimum length
  if (length < min) {
    return false
  }

  // Check maximum length if provided
  if (max !== undefined && length > max) {
    return false
  }

  return true
}
