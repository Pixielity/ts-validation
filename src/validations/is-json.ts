import { isString } from "./is-string"

/**
 * Checks if a string is valid JSON.
 *
 * This function determines whether the provided value is a string and can be
 * parsed as valid JSON. It attempts to parse the string using JSON.parse()
 * and returns true if parsing succeeds, false otherwise.
 *
 * @param value - The value to check
 * @returns True if the string is valid JSON, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is valid JSON
 * if (isJSON('{"name":"John","age":30}')) {
 *   // String is valid JSON
 * }
 *
 * isJSON('{"name":"John","age":30}'); // true
 * isJSON('[1, 2, 3]'); // true
 * isJSON('"hello"'); // true (a JSON string)
 * isJSON('123'); // true (a JSON number)
 * isJSON('true'); // true (a JSON boolean)
 * isJSON('null'); // true (JSON null)
 * isJSON('{"name":"John",age:30}'); // false (missing quotes around property)
 * isJSON('Invalid JSON'); // false
 * isJSON(''); // false (empty string)
 * isJSON(123); // false (not a string)
 */
export function isJSON(value: any): boolean {
  if (!isString(value)) {
    return false
  }

  try {
    // Attempt to parse the string as JSON
    JSON.parse(value)
    return true
  } catch (e) {
    // If parsing fails, the string is not valid JSON
    return false
  }
}
