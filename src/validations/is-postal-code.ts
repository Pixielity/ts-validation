import { isString } from "./is-string"

/**
 * Checks if a string is a valid postal code for a specific country.
 *
 * This function determines whether the provided value is a string and represents
 * a valid postal code for the specified country. Different countries have different
 * postal code formats, and this function supports various country-specific patterns.
 *
 * @param value - The value to check
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @returns True if the string is a valid postal code, false otherwise
 * @category String Validations
 * @throws {Error} If the country code is not supported
 *
 * @example
 * // Check if a string is a valid US postal code
 * if (isPostalCode("90210", "US")) {
 *   // String is a valid US postal code
 * }
 *
 * isPostalCode("90210", "US"); // true
 * isPostalCode("90210-1234", "US"); // true (ZIP+4 format)
 * isPostalCode("SW1A 1AA", "UK"); // true
 * isPostalCode("M5V 2N4", "CA"); // true
 * isPostalCode("75001", "FR"); // true
 * isPostalCode("12345", "US"); // true
 * isPostalCode("1234", "US"); // false (too short)
 * isPostalCode("ABCDE", "US"); // false (contains letters)
 * isPostalCode("", "US"); // false (empty string)
 * isPostalCode(12345, "US"); // false (not a string)
 */
export function isPostalCode(value: any, countryCode: string): boolean {
  if (!isString(value)) {
    return false
  }

  // Postal code patterns by country
  const patterns: Record<string, RegExp> = {
    US: /^\d{5}(-\d{4})?$/,
    UK: /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i,
    CA: /^[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]$/i,
    FR: /^\d{5}$/,
    DE: /^\d{5}$/,
    IT: /^\d{5}$/,
    AU: /^\d{4}$/,
    NL: /^\d{4} ?[A-Z]{2}$/i,
    ES: /^\d{5}$/,
    JP: /^\d{3}-\d{4}$/,
    CN: /^\d{6}$/,
    BR: /^\d{5}-\d{3}$/,
    RU: /^\d{6}$/,
    IN: /^\d{6}$/,
    MX: /^\d{5}$/,
  }

  // Get the pattern for the specified country code
  const pattern = patterns[countryCode.toUpperCase()]

  // If the country code is not supported, throw an error
  if (!pattern) {
    throw new Error(`Country code ${countryCode} not supported`)
  }

  // Test the string against the pattern
  return pattern.test(value)
}
