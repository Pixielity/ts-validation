import { BaseValidator } from "./base-validator"

/**
 * Validates that a value is NaN (Not a Number).
 *
 * The NaNValidator checks if a given value is NaN.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new NaNValidator()
 *
 * validator.validate(NaN)     // Returns true
 * validator.validate(0/0)     // Returns true (results in NaN)
 * validator.validate(123)     // Returns false
 * validator.validate("NaN")   // Returns false
 */
export class NaNValidator extends BaseValidator {
  /**
   * Creates a new NaNValidator instance.
   *
   * Initializes the validator with the "nan" validator type.
   */
  constructor() {
    super("nan")
  }

  /**
   * Validates that a value is NaN.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is NaN, false otherwise
   * @example
   * const validator = new NaNValidator()
   *
   * validator.validate(NaN)     // Returns true
   * validator.validate(0/0)     // Returns true (results in NaN)
   * validator.validate(parseInt("not a number")) // Returns true (results in NaN)
   * validator.validate(123)     // Returns false
   * validator.validate("NaN")   // Returns false
   * validator.validate(null)    // Returns false
   * validator.validate(undefined) // Returns false
   */
  validate(value: any): boolean {
    return typeof value === "number" && isNaN(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new NaNValidator()
   *
   * validator.getMessage(123)     // Returns "123 is not NaN"
   * validator.getMessage("NaN")   // Returns "Expected a number but got string"
   * validator.getMessage(null)    // Returns "Expected a number but got null"
   */
  getMessage(value: any): string {
    if (typeof value !== "number") {
      return `Expected a number but got ${value === null ? "null" : typeof value}`
    }

    return `${value} is not NaN`
  }
}
