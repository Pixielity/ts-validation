import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isURL } from "../validations"

/**
 * Validates that a value is a valid URL.
 *
 * The UrlValidator checks if a given string is a valid URL
 * by attempting to create a URL object. It extends the BaseValidator class
 * and implements the required validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new UrlValidator()
 *
 * validator.validate("https://example.com")  // Returns true
 * validator.validate("invalid-url")          // Returns false
 * validator.validate(null)                   // Returns false
 */
export class UrlValidator extends BaseValidator {
  /**
   * Creates a new UrlValidator instance.
   *
   * Initializes the validator with the URL validator type.
   */
  constructor() {
    super(ValidatorType.URL)
  }

  /**
   * Validates that a value is a valid URL.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is a valid URL, false otherwise
   * @example
   * const validator = new UrlValidator()
   *
   * validator.validate("https://example.com")           // Returns true
   * validator.validate("http://localhost:3000")         // Returns true
   * validator.validate("https://example.com/path?q=123") // Returns true
   * validator.validate("ftp://ftp.example.com")         // Returns true
   * validator.validate("invalid-url")                   // Returns false
   * validator.validate("http://")                       // Returns false
   * validator.validate(null)                            // Returns false
   */
  validate(value: any): boolean {
    return isURL(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new UrlValidator()
   *
   * validator.getMessage("invalid-url") // Returns "\"invalid-url\" is not a valid URL"
   * validator.getMessage(123)           // Returns "Expected a string but got number"
   * validator.getMessage(null)          // Returns "Expected a string but got null"
   */
  getMessage(value: any): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${value === null ? "null" : typeof value}`
    }
    return `"${value}" is not a valid URL`
  }
}
