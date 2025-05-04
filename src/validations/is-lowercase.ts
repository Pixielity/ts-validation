import { isString } from "./is-string"

/**
 * Checks if a string is lowercase.
 *
 * This function determines whether the provided value is a string and
 * contains only lowercase characters. It compares the original string
 * with its lowercase version to make the determination.
 *
 * @param value - The value to check
 * @returns True if the string is lowercase, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is lowercase
 * if (isLowercase("hello")) {
 *   // String is lowercase
 * }
 *
 * isLowercase("hello"); // true
 * isLowercase("hello world"); // true
 * isLowercase("Hello"); // false
 * isLowercase("HELLO"); // false
 * isLowercase("hello123"); // true (numbers don't affect lowercase check)
 * isLowercase("hello!"); // true (special characters don't affect lowercase check)
 * isLowercase(""); // true (empty string is considered lowercase)
 * isLowercase(123); // false (not a string)
 */
export function isLowercase(value: any): boolean {
  // Check if the value is a string
  if (!isString(value)) {
    return false
  }

  // Compare the original string with its lowercase version
  return value === value.toLowerCase()
}
