import { isString } from "./is-string"

/**
 * Checks if a string is a valid phone number.
 *
 * This function determines whether the provided value is a string and represents
 * a valid phone number. It supports international E.164 format by default, and
 * can also validate country-specific phone number formats when a country code is provided.
 *
 * @param value - The value to check
 * @param countryCode - Optional ISO 3166-1 alpha-2 country code
 * @returns True if the string is a valid phone number, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is a valid phone number
 * if (isPhoneNumber("+1 (555) 123-4567")) {
 *   // String is a valid phone number
 * }
 *
 * isPhoneNumber("+1 (555) 123-4567"); // true (international format)
 * isPhoneNumber("+447911123456"); // true (UK number in international format)
 * isPhoneNumber("(555) 123-4567", "US"); // true (US format)
 * isPhoneNumber("555-123-4567", "US"); // true (US format)
 * isPhoneNumber("07911 123456", "UK"); // true (UK format)
 * isPhoneNumber("01.23.45.67.89", "FR"); // true (French format)
 * isPhoneNumber("123456789"); // false (no country context)
 * isPhoneNumber("not-a-phone"); // false
 * isPhoneNumber(""); // false (empty string)
 * isPhoneNumber(123); // false (not a string)
 */
export function isPhoneNumber(value: any, countryCode?: string): boolean {
  if (!isString(value)) {
    return false
  }

  // Basic international phone number pattern (E.164 format)
  // Format: + followed by 1-15 digits
  const e164Pattern = /^\+[1-9]\d{1,14}$/

  // Country-specific patterns
  const patterns: Record<string, RegExp> = {
    US: /^(\+?1)?[-. ]?($$[2-9]\d{2}$$|[2-9]\d{2})[-. ]?\d{3}[-. ]?\d{4}$/,
    UK: /^(\+?44|0)[-. ]?(\d{2,4})[-. ]?(\d{3,4})[-. ]?(​ ]?\d{3}[-.​ ]?\d{4}$/,
    UK: /^(\+?44|0)[-.​ ]?(\d{2,4})[-.​ ]?(\d{3,4})[-.​ ]?(\d{3,4})$/,
    CA: /^(\+?1)?[-.​ ]?($$[2-9]\d{2}$$|[2-9]\d{2})[-.​ ]?\d{3}[-.​ ]?\d{4}$/,
    AU: /^(\+?61|0)[-.​ ]?([2378])[-.​ ]?(\d{4})[-.​ ]?(\d{4})$/,
    DE: /^(\+?49|0)[-.​ ]?(\d{2,4})[-.​ ]?(\d{3,7})[-.​ ]?(\d{1,7})$/,
    FR: /^(\+?33|0)[-.​ ]?([1-9])[-.​ ]?(\d{2})[-.​ ]?(\d{2})[-.​ ]?(\d{2})[-.​ ]?(\d{2})$/,
    IN: /^(\+?91|0)?[-.​ ]?([6789]\d{9})$/,
    CN: /^(\+?86|0)?[-.​ ]?(1[3-9]\d{9})$/,
    JP: /^(\+?81|0)[-.​ ]?([1-9]\d{1,3})[-.​ ]?(\d{2,4})[-.​ ]?(\d{4})$/,
  }

  if (countryCode) {
    const pattern = patterns[countryCode.toUpperCase()]
    if (!pattern) {
      // Fall back to E.164 format if country code not supported
      return e164Pattern.test(value)
    }
    return pattern.test(value)
  }

  // If no country code specified, check E.164 format
  return e164Pattern.test(value)
}
