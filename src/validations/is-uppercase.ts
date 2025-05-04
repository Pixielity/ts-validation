import { isString } from "./is-string"

/**
 * Checks if a string is uppercase.
 *
 * This function determines whether the provided value is a string and
 * contains only uppercase characters. It compares the original string
 * with its uppercase version to make the determination.
 *
 * @param value - The value to check
 * @returns True if the string is uppercase, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is uppercase
 * if (isUppercase("HELLO")) {
 *   // String is uppercase
 * }
 *
 * isUppercase("HELLO"); // true
 * isUppercase("HELLO WORLD"); // true
 * isUppercase("Hello"); // false
 * isUppercase("hello"); // false
 * isUppercase("HELLO123"); // true (numbers don't affect uppercase check)
 * isUppercase("HELLO!"); // true (special characters don't affect uppercase check)
 * isUppercase(""); // true (empty string is considered uppercase)
 * isUppercase(123); // false (not a string)
 */
export function isUppercase(value: any): boolean {
  // Check if the value is a string
  if (!isString(value)) {
    return false
  }

  // Compare the original string with its uppercase version
  return value === value.toUpperCase()
}
