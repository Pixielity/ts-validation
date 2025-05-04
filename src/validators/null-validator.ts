import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"

/**
 * Validates that a value is null.
 *
 * The NullValidator checks if a given value is strictly equal to null.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new NullValidator()
 *
 * validator.validate(null)      // Returns true
 * validator.validate(undefined) // Returns false
 * validator.validate(0)         // Returns false
 * validator.validate("")        // Returns false
 */
export class NullValidator extends BaseValidator {
  /**
   * Creates a new NullValidator instance.
   *
   * Initializes the validator with the NULL validator type.
   */
  constructor() {
    super(ValidatorType.NULL)
  }

  /**
   * Validates that a value is null.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is null, false otherwise
   * @example
   * const validator = new NullValidator()
   *
   * validator.validate(null)      // Returns true
   * validator.validate(undefined) // Returns false
   * validator.validate(0)         // Returns false
   * validator.validate("")        // Returns false
   * validator.validate(false)     // Returns false
   */
  validate(value: any): boolean {
    return value === null
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new NullValidator()
   *
   * validator.getMessage(undefined) // Returns "Expected null but got undefined"
   * validator.getMessage(0)         // Returns "Expected null but got number"
   * validator.getMessage("")        // Returns "Expected null but got string"
   * validator.getMessage(false)     // Returns "Expected null but got boolean"
   */
  getMessage(value: any): string {
    return `Expected null but got ${value === undefined ? "undefined" : typeof value}`
  }
}
