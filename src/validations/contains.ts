import { isString } from "./is-string"

/**
 * Checks if a string contains a substring.
 *
 * This function determines whether the provided value is a string and contains
 * the specified substring. It can perform case-sensitive or case-insensitive
 * matching based on the options.
 *
 * @param value - The value to check
 * @param substring - The substring to search for
 * @param options - Optional configuration { ignoreCase: boolean }
 * @returns True if the string contains the substring, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string contains a substring
 * if (contains("Hello World", "world", { ignoreCase: true })) {
 *   // String contains the substring (case-insensitive)
 * }
 *
 * contains("Hello World", "World"); // true
 * contains("Hello World", "world"); // false (case-sensitive by default)
 * contains("Hello World", "world", { ignoreCase: true }); // true
 * contains("Hello World", "Universe"); // false
 * contains("", "World"); // false (empty string)
 * contains(123, "World"); // false (not a string)
 */
export function contains(value: any, substring: string, options: { ignoreCase?: boolean } = {}): boolean {
  if (!isString(value) || !isString(substring)) {
    return false
  }

  // Perform case-insensitive matching if specified
  if (options.ignoreCase) {
    return value.toLowerCase().includes(substring.toLowerCase())
  }

  // Perform case-sensitive matching
  return value.includes(substring)
}
