import { isString } from "./is-string"

/**
 * Checks if a string starts with a specified prefix.
 *
 * This function determines whether the provided value is a string and starts
 * with the specified prefix. It can perform case-sensitive or case-insensitive
 * matching based on the options.
 *
 * @param value - The value to check
 * @param prefix - The prefix to check for
 * @param options - Optional configuration { ignoreCase: boolean }
 * @returns True if the string starts with the prefix, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string starts with a prefix
 * if (startsWith("Hello World", "hello", { ignoreCase: true })) {
 *   // String starts with the prefix (case-insensitive)
 * }
 *
 * startsWith("Hello World", "Hello"); // true
 * startsWith("Hello World", "hello"); // false (case-sensitive by default)
 * startsWith("Hello World", "hello", { ignoreCase: true }); // true
 * startsWith("Hello World", "World"); // false
 * startsWith("", "Hello"); // false (empty string)
 * startsWith(123, "Hello"); // false (not a string)
 */
export function startsWith(value: any, prefix: string, options: { ignoreCase?: boolean } = {}): boolean {
  if (!isString(value) || !isString(prefix)) {
    return false
  }

  // Perform case-insensitive matching if specified
  if (options.ignoreCase) {
    return value.toLowerCase().startsWith(prefix.toLowerCase())
  }

  // Perform case-sensitive matching
  return value.startsWith(prefix)
}
