import { isString } from "./is-string"

/**
 * Checks if a string contains only numeric characters.
 *
 * This function determines whether the provided value is a string or number and
 * contains only numeric characters. It can optionally allow decimal points and
 * negative signs based on the provided options.
 *
 * @param value - The value to check
 * @param options - Optional configuration { allowDecimal: boolean; allowNegative: boolean }
 * @returns True if the string contains only numeric characters, false otherwise
 * @category String Validations
 *
 * @example
 * ```typescript
 * // Check if a string contains only numeric characters
 * if (isNumeric("123")) {
 *   // String contains only numeric characters
 * }
 *
 * isNumeric("123"); // true
 * isNumeric(123); // true (numbers are converted to strings)
 * isNumeric("123.45", { allowDecimal: true }); // true
 * isNumeric("-123", { allowNegative: true }); // true
 * isNumeric("-123.45", { allowDecimal: true, allowNegative: true }); // true
 * isNumeric("hello"); // false
 * isNumeric("123.45"); // false (decimal not allowed by default)
 * isNumeric("-123"); // false (negative not allowed by default)
 * isNumeric(""); // false (empty string)
 * ```
 */
export function isNumeric(value: any, options: { allowDecimal?: boolean; allowNegative?: boolean } = {}): boolean {
  // Check if the value is a string or number
  if (!isString(value) && typeof value !== "number") {
    return false
  }

  // Convert to string if it's a number
  const stringValue = String(value)

  // Empty string is not considered numeric
  if (stringValue.length === 0) {
    return false
  }

  // Build the regex pattern based on options
  let pattern = "^"

  // Add optional negative sign if allowed
  if (options.allowNegative) {
    pattern += "-?"
  }

  // Add digits
  pattern += "\\d+"

  // Add optional decimal part if allowed
  if (options.allowDecimal) {
    pattern += "(\\.\\d+)?"
  }

  pattern += "$"

  // Create the regex and test the string
  const regex = new RegExp(pattern)
  return regex.test(stringValue)
}
