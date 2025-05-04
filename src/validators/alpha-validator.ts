import { BaseValidator } from "./base-validator"

/**
 * Validates that a string contains only alphabetic characters.
 *
 * The AlphaValidator checks if a given string contains only alphabetic characters,
 * with support for different locales. It extends the BaseValidator class
 * and implements the required validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new AlphaValidator()
 *
 * validator.validate("abc")     // Returns true
 * validator.validate("ABC")     // Returns true
 * validator.validate("abc123")  // Returns false
 * validator.validate("abc!")    // Returns false
 */
export class AlphaValidator extends BaseValidator {
  /**
   * Creates a new AlphaValidator instance.
   *
   * Initializes the validator with the "alpha" validator type.
   */
  constructor() {
    super("alpha")
  }

  /**
   * Validates that a string contains only alphabetic characters.
   *
   * @param {any} value - The value to validate
   * @param {string} [locale] - Optional locale to use for validation
   * @returns {boolean} True if the string contains only alphabetic characters, false otherwise
   * @example
   * const validator = new AlphaValidator()
   *
   * validator.validate("abc")                // Returns true
   * validator.validate("ABC")                // Returns true
   * validator.validate("ñáéíóú", "es-ES")    // Returns true (with Spanish locale)
   * validator.validate("äöüß", "de-DE")      // Returns true (with German locale)
   * validator.validate("abc123")             // Returns false
   * validator.validate("abc!")               // Returns false
   * validator.validate("")                   // Returns false (empty string)
   * validator.validate(123)                  // Returns false (not a string)
   */
  validate(value: any, locale?: string): boolean {
    if (typeof value !== "string") {
      return false
    }

    if (value.length === 0) {
      return false
    }

    // Simple implementation for common locales
    let regex: RegExp

    switch (locale) {
      case "es-ES":
        regex = /^[A-ZÁÉÍÓÚÜÑa-záéíóúüñ]+$/
        break
      case "fr-FR":
        regex = /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸA-zàâæçéèêëïîôœùûüÿ]+$/
        break
      case "de-DE":
        regex = /^[A-ZÄÖÜßa-zäöü]+$/
        break
      default: // en-US and others
        regex = /^[A-Za-z]+$/
    }

    return regex.test(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @param {string} [locale] - Optional locale used in validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new AlphaValidator()
   *
   * validator.getMessage("abc123")           // Returns "\"abc123\" contains non-alphabetic characters"
   * validator.getMessage("abc!", "es-ES")    // Returns "\"abc!\" contains non-alphabetic characters for locale es-ES"
   * validator.getMessage(123)                // Returns "Expected a string but got number"
   * validator.getMessage("")                 // Returns "String is empty"
   */
  getMessage(value: any, locale?: string): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${typeof value}`
    }

    if (value.length === 0) {
      return "String is empty"
    }

    const localeText = locale ? ` for locale ${locale}` : ""
    return `"${value}" contains non-alphabetic characters${localeText}`
  }
}
