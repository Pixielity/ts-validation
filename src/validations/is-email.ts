import { isString } from "./is-string"

/**
 * Checks if a value is a valid email address.
 *
 * This function determines whether the provided value is a string and matches
 * a basic email format. It first checks if the value is a string using the
 * isString function, then applies a simple email validation regex.
 *
 * Note: This is a basic validation and may not catch all edge cases.
 * For production use, consider using a more comprehensive email validation
 * or email verification service.
 *
 * @param value - The value to check
 * @returns True if the value is a valid email address, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a value is a valid email address
 * if (isEmail("user@example.com")) {
 *   // Do something with the email
 * }
 *
 * isEmail("user@example.com"); // true
 * isEmail("invalid-email"); // false
 * isEmail(123); // false (not a string)
 */
export function isEmail(value: any): boolean {
  if (!isString(value)) {
    return false
  }

  // Simple email validation regex
  // This checks for a non-empty string before @, a non-empty string after @,
  // and at least one dot after the @ symbol
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}
