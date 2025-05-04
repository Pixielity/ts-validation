import { isString } from "./is-string"

/**
 * Checks if a string contains only alphanumeric characters.
 *
 * This function determines whether the provided value is a string and contains
 * only alphanumeric characters (letters and numbers). It supports different locales
 * to handle language-specific alphabetic characters.
 *
 * @param value - The value to check
 * @param locale - Optional locale to use for validation
 * @returns True if the string contains only alphanumeric characters, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string contains only alphanumeric characters
 * if (isAlphanumeric("hello123")) {
 *   // String contains only alphanumeric characters
 * }
 *
 * isAlphanumeric("hello123"); // true
 * isAlphanumeric("Hello123"); // true
 * isAlphanumeric("hello world"); // false (contains space)
 * isAlphanumeric("hello_123"); // false (contains underscore)
 * isAlphanumeric(""); // false (empty string)
 * isAlphanumeric(123); // false (not a string)
 *
 * // With locale
 * isAlphanumeric("café123", "fr-FR"); // true (French locale)
 * isAlphanumeric("niño123", "es-ES"); // true (Spanish locale)
 */
export function isAlphanumeric(value: any, locale?: string): boolean {
  // Check if the value is a string
  if (!isString(value)) {
    return false
  }

  // Empty string is not considered alphanumeric
  if (value.length === 0) {
    return false
  }

  // Define regex patterns for different locales
  let regex: RegExp

  switch (locale) {
    case "es-ES":
      // Spanish: includes accented characters, ñ, and numbers
      regex = /^[0-9A-ZÁÉÍÓÚÜÑa-záéíóúüñ]+$/
      break
    case "fr-FR":
      // French: includes accented characters, cedilla, ligatures, and numbers
      regex = /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸA-zàâæçéèêëïîôœùûüÿ]+$/
      break
    case "de-DE":
      // German: includes umlauts, ß, and numbers
      regex = /^[0-9A-ZÄÖÜßa-zäöü]+$/
      break
    default: // en-US and others
      // Basic Latin alphabet and numbers
      regex = /^[0-9A-Za-z]+$/
  }

  // Test the string against the regex pattern
  return regex.test(value)
}
