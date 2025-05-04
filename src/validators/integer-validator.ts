import { BaseValidator } from "./base-validator"

/**
 * Validates that a value is an integer.
 *
 * The IntegerValidator checks if a given value is a number and an integer.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new IntegerValidator()
 *
 * validator.validate(123)    // Returns true
 * validator.validate(-456)   // Returns true
 * validator.validate(0)      // Returns true
 * validator.validate(123.45) // Returns false
 * validator.validate("123")  // Returns false
 */
export class IntegerValidator extends BaseValidator {
  /**
   * Creates a new IntegerValidator instance.
   *
   * Initializes the validator with the "integer" validator type.
   */
  constructor() {
    super("integer")
  }

  /**
   * Validates that a value is an integer.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is an integer, false otherwise
   * @example
   * const validator = new IntegerValidator()
   *
   * validator.validate(123)    // Returns true
   * validator.validate(-456)   // Returns true
   * validator.validate(0)      // Returns true
   * validator.validate(123.45) // Returns false
   * validator.validate(NaN)    // Returns false
   * validator.validate(Infinity) // Returns false
   * validator.validate("123")  // Returns false
   * validator.validate(null)   // Returns false
   */
  validate(value: any): boolean {
    return typeof value === "number" && !isNaN(value) && Number.isInteger(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new IntegerValidator()
   *
   * validator.getMessage(123.45) // Returns "123.45 is not an integer"
   * validator.getMessage(NaN)    // Returns "Expected an integer but got NaN"
   * validator.getMessage("123")  // Returns "Expected a number but got string"
   * validator.getMessage(null)   // Returns "Expected a number but got null"
   */
  getMessage(value: any): string {
    if (typeof value !== "number") {
      return `Expected a number but got ${typeof value}`
    }

    if (isNaN(value)) {
      return "Expected an integer but got NaN"
    }

    if (!Number.isInteger(value)) {
      return `${value} is not an integer`
    }

    return "Invalid integer"
  }
}
