import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isEmail } from "../validations"

/**
 * Validates that a value is a valid email address.
 *
 * The EmailValidator checks if a given string is a valid email address
 * using a regular expression pattern. It extends the BaseValidator class
 * and implements the required validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new EmailValidator()
 *
 * validator.validate("user@example.com")  // Returns true
 * validator.validate("invalid-email")     // Returns false
 * validator.validate(null)                // Returns false
 */
export class EmailValidator extends BaseValidator {
  /**
   * Creates a new EmailValidator instance.
   *
   * Initializes the validator with the EMAIL validator type.
   */
  constructor() {
    super(ValidatorType.EMAIL)
  }

  /**
   * Validates that a value is a valid email address.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is a valid email address, false otherwise
   * @example
   * const validator = new EmailValidator()
   *
   * validator.validate("user@example.com")     // Returns true
   * validator.validate("user.name@example.co.uk") // Returns true
   * validator.validate("user+tag@example.com") // Returns true
   * validator.validate("invalid-email")        // Returns false
   * validator.validate("user@")                // Returns false
   * validator.validate("@example.com")         // Returns false
   * validator.validate(null)                   // Returns false
   */
  validate(value: any): boolean {
    return isEmail(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new EmailValidator()
   *
   * validator.getMessage("invalid-email") // Returns "\"invalid-email\" is not a valid email address"
   * validator.getMessage(123)             // Returns "Expected a string but got number"
   * validator.getMessage(null)            // Returns "Expected a string but got null"
   */
  getMessage(value: any): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${value === null ? "null" : typeof value}`
    }
    return `"${value}" is not a valid email address`
  }
}
