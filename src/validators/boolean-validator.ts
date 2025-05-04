import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isBoolean } from "../validations"

/**
 * Validates that a value is a boolean.
 *
 * The BooleanValidator checks if a given value is of type boolean.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new BooleanValidator()
 *
 * validator.validate(true)     // Returns true
 * validator.validate(false)    // Returns true
 * validator.validate(0)        // Returns false
 * validator.validate("true")   // Returns false
 */
export class BooleanValidator extends BaseValidator {
  /**
   * Creates a new BooleanValidator instance.
   *
   * Initializes the validator with the BOOLEAN validator type.
   */
  constructor() {
    super(ValidatorType.BOOLEAN)
  }

  /**
   * Validates that a value is a boolean.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is a boolean, false otherwise
   * @example
   * const validator = new BooleanValidator()
   *
   * validator.validate(true)     // Returns true
   * validator.validate(false)    // Returns true
   * validator.validate(0)        // Returns false
   * validator.validate(1)        // Returns false
   * validator.validate("true")   // Returns false
   * validator.validate(null)     // Returns false
   */
  validate(value: any): boolean {
    return isBoolean(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new BooleanValidator()
   *
   * validator.getMessage(0)         // Returns "Expected a boolean but got number"
   * validator.getMessage("true")    // Returns "Expected a boolean but got string"
   * validator.getMessage(null)      // Returns "Expected a boolean but got null"
   * validator.getMessage(undefined) // Returns "Expected a boolean but got undefined"
   */
  getMessage(value: any): string {
    return `Expected a boolean but got ${value === null ? "null" : typeof value}`
  }
}
