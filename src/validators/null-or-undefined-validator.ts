import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"

/**
 * Validates that a value is null or undefined.
 *
 * The NullOrUndefinedValidator checks if a given value is either null or undefined.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new NullOrUndefinedValidator()
 *
 * validator.validate(null)      // Returns true
 * validator.validate(undefined) // Returns true
 * validator.validate(0)         // Returns false
 * validator.validate("")        // Returns false
 */
export class NullOrUndefinedValidator extends BaseValidator {
  /**
   * Creates a new NullOrUndefinedValidator instance.
   *
   * Initializes the validator with the NULL_OR_UNDEFINED validator type.
   */
  constructor() {
    super(ValidatorType.NULL_OR_UNDEFINED)
  }

  /**
   * Validates that a value is null or undefined.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is null or undefined, false otherwise
   * @example
   * const validator = new NullOrUndefinedValidator()
   *
   * validator.validate(null)      // Returns true
   * validator.validate(undefined) // Returns true
   * validator.validate(void 0)    // Returns true (void 0 is undefined)
   * validator.validate(0)         // Returns false
   * validator.validate("")        // Returns false
   * validator.validate(false)     // Returns false
   */
  validate(value: any): boolean {
    return value === null || value === undefined
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new NullOrUndefinedValidator()
   *
   * validator.getMessage(0)     // Returns "Expected null or undefined but got number"
   * validator.getMessage("")    // Returns "Expected null or undefined but got string"
   * validator.getMessage(false) // Returns "Expected null or undefined but got boolean"
   * validator.getMessage({})    // Returns "Expected null or undefined but got object"
   */
  getMessage(value: any): string {
    return `Expected null or undefined but got ${typeof value}`
  }
}
