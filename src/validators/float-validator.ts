import { BaseValidator } from "./base-validator"

/**
 * Validates that a value is a floating-point number.
 *
 * The FloatValidator checks if a given value is a number and not an integer.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new FloatValidator()
 *
 * validator.validate(123.45) // Returns true
 * validator.validate(-456.78) // Returns true
 * validator.validate(123)    // Returns false (integer, not float)
 * validator.validate("123.45") // Returns false
 */
export class FloatValidator extends BaseValidator {
  /**
   * Creates a new FloatValidator instance.
   *
   * Initializes the validator with the "float" validator type.
   */
  constructor() {
    super("float")
  }

  /**
   * Validates that a value is a floating-point number.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is a floating-point number, false otherwise
   * @example
   * const validator = new FloatValidator()
   *
   * validator.validate(123.45)  // Returns true
   * validator.validate(-456.78) // Returns true
   * validator.validate(0.0)     // Returns false (0.0 is considered an integer in JavaScript)
   * validator.validate(123)     // Returns false (integer, not float)
   * validator.validate(NaN)     // Returns false
   * validator.validate(Infinity) // Returns false
   * validator.validate("123.45") // Returns false
   * validator.validate(null)    // Returns false
   */
  validate(value: any): boolean {
    return typeof value === "number" && !isNaN(value) && !Number.isInteger(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new FloatValidator()
   *
   * validator.getMessage(123)    // Returns "123 is an integer, not a float"
   * validator.getMessage(NaN)    // Returns "Expected a float but got NaN"
   * validator.getMessage("123.45") // Returns "Expected a number but got string"
   * validator.getMessage(null)   // Returns "Expected a number but got null"
   */
  getMessage(value: any): string {
    if (typeof value !== "number") {
      return `Expected a number but got ${typeof value}`
    }

    if (isNaN(value)) {
      return "Expected a float but got NaN"
    }

    if (Number.isInteger(value)) {
      return `${value} is an integer, not a float`
    }

    return "Invalid float"
  }
}
