import { isString } from "./is-string"

/**
 * Checks if a string matches a regular expression.
 *
 * This function determines whether the provided value is a string and matches
 * the specified regular expression pattern.
 *
 * @param value - The value to check
 * @param pattern - Regular expression pattern
 * @returns True if the string matches the pattern, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string matches a pattern
 * if (matches("abc123", /^[a-z]+\d+$/)) {
 *   // String matches the pattern
 * }
 *
 * matches("abc123", /^[a-z]+\d+$/); // true
 * matches("123abc", /^[a-z]+\d+$/); // false
 * matches("abc", /^[a-z]+\d+$/); // false (missing digits)
 * matches("123", /^[a-z]+\d+$/); // false (missing letters)
 * matches("", /^[a-z]+\d+$/); // false (empty string)
 * matches(123, /^[a-z]+\d+$/); // false (not a string)
 */
export function matches(value: any, pattern: RegExp): boolean {
  if (!isString(value)) {
    return false
  }

  // Test the string against the pattern
  return pattern.test(value)
}
