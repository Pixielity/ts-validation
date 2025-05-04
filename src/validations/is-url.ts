import { isString } from "./is-string"

/**
 * Checks if a value is a valid URL.
 *
 * This function determines whether the provided value is a string and represents
 * a valid URL. It first checks if the value is a string using the isString function,
 * then attempts to create a URL object with it, which will throw an error if the
 * URL is invalid.
 *
 * This validation uses the built-in URL constructor, which follows the WHATWG URL Standard.
 * It requires a protocol (http:, https:, etc.) to be present.
 *
 * @param value - The value to check
 * @returns True if the value is a valid URL, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a value is a valid URL
 * if (isUrl("https://example.com")) {
 *   // Do something with the URL
 * }
 *
 * isUrl("https://example.com"); // true
 * isUrl("http://localhost:3000"); // true
 * isUrl("example.com"); // false (missing protocol)
 * isUrl("invalid-url"); // false
 * isUrl(123); // false (not a string)
 */
export function isUrl(value: any): boolean {
  if (!isString(value)) {
    return false
  }

  try {
    // Attempt to create a URL object
    // This will throw an error if the URL is invalid
    new URL(value)
    return true
  } catch {
    return false
  }
}
