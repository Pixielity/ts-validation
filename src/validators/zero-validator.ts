import { BaseValidator } from "./base-validator"

/**
 * Validates that a value is zero.
 *
 * The ZeroValidator checks if a given value is the number 0.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new ZeroValidator()
 *
 * validator.validate(0)      // Returns true
 * validator.validate(-0)     // Returns true
 * validator.validate(123)    // Returns false
 * validator.validate("0")    // Returns false
 */
export class ZeroValidator extends BaseValidator {
  /**
   * Creates a new ZeroValidator instance.
   *
   * Initializes the validator with the "zero" validator type.
   */
  constructor() {
    super("zero")
  }

  /**
   * Validates that a value is zero.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is zero, false otherwise
   * @example
   * const validator = new ZeroValidator()
   *
   * validator.validate(0)      // Returns true
   * validator.validate(-0)     // Returns true (in JavaScript, -0 === 0)
   * validator.validate(0.0)    // Returns true
   * validator.validate(123)    // Returns false
   * validator.validate(-123)   // Returns false
   * validator.validate(0.1)    // Returns false
   * validator.validate(NaN)    // Returns false
   * validator.validate("0")    // Returns false
   * validator.validate(null)   // Returns false
   */
  validate(value: any): boolean {
    return typeof value === "number" && !isNaN(value) && value === 0
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new ZeroValidator()
   *
   * validator.getMessage(123)    // Returns "123 is not zero"
   * validator.getMessage(-123)   // Returns "-123 is not zero"
   * validator.getMessage(NaN)    // Returns "Expected a number but got NaN"
   * validator.getMessage("0")    // Returns "Expected a number but got string"
   * validator.getMessage(null)   // Returns "Expected a number but got null"
   */
  getMessage(value: any): string {
    if (typeof value !== "number") {
      return `Expected a number but got ${value === null ? "null" : typeof value}`
    }

    if (isNaN(value)) {
      return "Expected a number but got NaN"
    }

    return `${value} is not zero`
  }
}
