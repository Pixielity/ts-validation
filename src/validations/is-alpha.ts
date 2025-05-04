import { isString } from "./is-string"

/**
 * Checks if a string contains only alphabetic characters.
 *
 * This function determines whether the provided value is a string and contains
 * only alphabetic characters (letters). It supports different locales to handle
 * language-specific alphabetic characters.
 *
 * @param value - The value to check
 * @param locale - Optional locale to use for validation (e.g., 'en-US', 'fr-FR')
 * @returns True if the string contains only alphabetic characters, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string contains only alphabetic characters
 * if (isAlpha("hello")) {
 *   // String contains only alphabetic characters
 * }
 *
 * isAlpha("hello"); // true
 * isAlpha("Hello"); // true
 * isAlpha("hello123"); // false (contains numbers)
 * isAlpha("hello world"); // false (contains space)
 * isAlpha(""); // false (empty string)
 * isAlpha(123); // false (not a string)
 *
 * // With locale
 * isAlpha("café", "fr-FR"); // true (French locale)
 * isAlpha("niño", "es-ES"); // true (Spanish locale)
 */
export function isAlpha(value: any, locale?: string): boolean {
  // Check if the value is a string
  if (!isString(value)) {
    return false
  }

  // Empty string is not considered alpha
  if (value.length === 0) {
    return false
  }

  // Define regex patterns for different locales
  let regex: RegExp

  switch (locale) {
    case "es-ES":
      // Spanish: includes accented characters and ñ
      regex = /^[A-ZÁÉÍÓÚÜÑa-záéíóúüñ]+$/
      break
    case "fr-FR":
      // French: includes accented characters, cedilla, ligatures
      regex = /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸA-zàâæçéèêëïîôœùûüÿ]+$/
      break
    case "de-DE":
      // German: includes umlauts and ß
      regex = /^[A-ZÄÖÜßa-zäöü]+$/
      break
    default: // en-US and others
      // Basic Latin alphabet
      regex = /^[A-Za-z]+$/
  }

  // Test the string against the regex pattern
  return regex.test(value)
}
