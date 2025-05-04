import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"

/**
 * Validates that a value is undefined.
 *
 * The UndefinedValidator checks if a given value is strictly equal to undefined.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new UndefinedValidator()
 *
 * validator.validate(undefined) // Returns true
 * validator.validate(null)      // Returns false
 * validator.validate(0)         // Returns false
 * validator.validate("")        // Returns false
 */
export class UndefinedValidator extends BaseValidator {
  /**
   * Creates a new UndefinedValidator instance.
   *
   * Initializes the validator with the UNDEFINED validator type.
   */
  constructor() {
    super(ValidatorType.Undefined)
  }

  /**
   * Validates that a value is undefined.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is undefined, false otherwise
   * @example
   * const validator = new UndefinedValidator()
   *
   * validator.validate(undefined) // Returns true
   * validator.validate(void 0)    // Returns true (void 0 is undefined)
   * validator.validate(null)      // Returns false
   * validator.validate(0)         // Returns false
   * validator.validate("")        // Returns false
   */
  validate(value: any): boolean {
    return value === undefined
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new UndefinedValidator()
   *
   * validator.getMessage(null)  // Returns "Expected undefined but got null"
   * validator.getMessage(0)     // Returns "Expected undefined but got number"
   * validator.getMessage("")    // Returns "Expected undefined but got string"
   * validator.getMessage(false) // Returns "Expected undefined but got boolean"
   */
  getMessage(value: any): string {
    return `Expected undefined but got ${value === null ? "null" : typeof value}`
  }
}
