import { BaseValidator } from './base-validator'
import { ValidatorType } from '../enums'
import { isString } from '../validations'

/**
 * Validates that a value is a string.
 *
 * The StringValidator checks if a given value is of type string.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new StringValidator()
 *
 * validator.validate("hello") // Returns true
 * validator.validate(123)     // Returns false
 * validator.validate(null)    // Returns false
 */
export class StringValidator extends BaseValidator {
  /**
   * Creates a new StringValidator instance.
   *
   * Initializes the validator with the STRING validator type.
   */
  constructor() {
    super(ValidatorType.String)
  }

  /**
   * Validates that a value is a string.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is a string, false otherwise
   * @example
   * const validator = new StringValidator()
   *
   * validator.validate("hello")     // Returns true
   * validator.validate("")          // Returns true (empty string is valid)
   * validator.validate(new String("hello")) // Returns true (String object is valid)
   * validator.validate(123)         // Returns false
   * validator.validate(null)        // Returns false
   * validator.validate(undefined)   // Returns false
   */
  validate(value: any): boolean {
    return isString(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new StringValidator()
   *
   * validator.getMessage(123)       // Returns "Expected a string but got number"
   * validator.getMessage(null)      // Returns "Expected a string but got null"
   * validator.getMessage(undefined) // Returns "Expected a string but got undefined"
   */
  getMessage(value: any): string {
    return `Expected a string but got ${value === null ? 'null' : typeof value}`
  }
}
