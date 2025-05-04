import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isNumber } from "../validations"

/**
 * Validates that a value is a number.
 *
 * The NumberValidator checks if a given value is of type number and is not NaN.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new NumberValidator()
 *
 * validator.validate(123)      // Returns true
 * validator.validate(0)        // Returns true
 * validator.validate(-45.67)   // Returns true
 * validator.validate("123")    // Returns false
 * validator.validate(NaN)      // Returns false
 */
export class NumberValidator extends BaseValidator {
  /**
   * Creates a new NumberValidator instance.
   *
   * Initializes the validator with the NUMBER validator type.
   */
  constructor() {
    super(ValidatorType.NUMBER)
  }

  /**
   * Validates that a value is a number.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is a number (and not NaN), false otherwise
   * @example
   * const validator = new NumberValidator()
   *
   * validator.validate(123)      // Returns true
   * validator.validate(0)        // Returns true
   * validator.validate(-45.67)   // Returns true
   * validator.validate(Infinity) // Returns true
   * validator.validate(NaN)      // Returns false
   * validator.validate("123")    // Returns false
   * validator.validate(null)     // Returns false
   */
  validate(value: any): boolean {
    return isNumber(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new NumberValidator()
   *
   * validator.getMessage("123")     // Returns "Expected a number but got string"
   * validator.getMessage(NaN)       // Returns "Expected a number but got NaN"
   * validator.getMessage(null)      // Returns "Expected a number but got null"
   * validator.getMessage(undefined) // Returns "Expected a number but got undefined"
   */
  getMessage(value: any): string {
    if (typeof value === "number" && isNaN(value)) {
      return "Expected a number but got NaN"
    }
    return `Expected a number but got ${value === null ? "null" : typeof value}`
  }
}
