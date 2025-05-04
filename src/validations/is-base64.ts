import { isString } from "./is-string"

/**
 * Checks if a string is base64 encoded.
 *
 * This function determines whether the provided value is a string and follows
 * the base64 encoding format. It checks for the standard base64 pattern which
 * consists of groups of 4 characters from the base64 alphabet (A-Z, a-z, 0-9, +, /)
 * with optional padding ('=') at the end.
 *
 * @param value - The value to check
 * @returns True if the string is base64 encoded, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is base64 encoded
 * if (isBase64("SGVsbG8gV29ybGQ=")) {
 *   // String is base64 encoded
 * }
 *
 * isBase64("SGVsbG8gV29ybGQ="); // true (encodes to "Hello World")
 * isBase64("YWJjMTIz"); // true (encodes to "abc123")
 * isBase64("Invalid-Base64!"); // false (contains invalid characters)
 * isBase64(""); // false (empty string)
 * isBase64(123); // false (not a string)
 */
export function isBase64(value: any): boolean {
  if (!isString(value)) {
    return false
  }

  // Base64 regex pattern
  // This checks for the standard base64 format:
  // - Groups of 4 characters from the base64 alphabet
  // - Optional padding at the end (one or two '=' characters)
  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
  return base64Regex.test(value)
}
