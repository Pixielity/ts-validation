import { isString } from "./is-string"

/**
 * Checks if a string ends with a specified suffix.
 *
 * This function determines whether the provided value is a string and ends
 * with the specified suffix. It can perform case-sensitive or case-insensitive
 * matching based on the options.
 *
 * @param value - The value to check
 * @param suffix - The suffix to check for
 * @param options - Optional configuration { ignoreCase: boolean }
 * @returns True if the string ends with the suffix, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string ends with a suffix
 * if (endsWith("Hello World", "world", { ignoreCase: true })) {
 *   // String ends with the suffix (case-insensitive)
 * }
 *
 * endsWith("Hello World", "World"); // true
 * endsWith("Hello World", "world"); // false (case-sensitive by default)
 * endsWith("Hello World", "world", { ignoreCase: true }); // true
 * endsWith("Hello World", "Hello"); // false
 * endsWith("", "World"); // false (empty string)
 * endsWith(123, "World"); // false (not a string)
 */
export function endsWith(value: any, suffix: string, options: { ignoreCase?: boolean } = {}): boolean {
  if (!isString(value) || !isString(suffix)) {
    return false
  }

  // Perform case-insensitive matching if specified
  if (options.ignoreCase) {
    return value.toLowerCase().endsWith(suffix.toLowerCase())
  }

  // Perform case-sensitive matching
  return value.endsWith(suffix)
}
