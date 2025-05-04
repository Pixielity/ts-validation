

/**
 * Checks if a value is a regular expression.
 *
 * This function determines whether the provided value is a RegExp object.
 * It uses the instanceof operator to check if the value is an instance of RegExp.
 *
 * @param value - The value to check
 * @returns True if the value is a regular expression, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a regular expression
 * if (isRegExp(/pattern/)) {
 *   // Value is a regular expression
 * }
 *
 * isRegExp(/pattern/); // true
 * isRegExp(new RegExp('pattern')); // true
 * isRegExp('pattern'); // false (string, not RegExp)
 * isRegExp({}); // false (object, not RegExp)
 */
export function isRegExp(value: any): value is RegExp {
  return value instanceof RegExp
}
