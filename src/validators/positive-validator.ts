import { BaseValidator } from "./base-validator"

/**
 * Validates that a value is a positive number.
 *
 * The PositiveValidator checks if a given value is a number greater than 0,
 * or optionally greater than or equal to 0 if allowZero is true.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new PositiveValidator()
 *
 * validator.validate(123)    // Returns true
 * validator.validate(0)      // Returns false
 * validator.validate(0, { allowZero: true }) // Returns true
 * validator.validate(-123)   // Returns false
 */
export class PositiveValidator extends BaseValidator {
  /**
   * Creates a new PositiveValidator instance.
   *
   * Initializes the validator with the "positive" validator type.
   */
  constructor() {
    super("positive")
  }

  /**
   * Validates that a value is a positive number.
   *
   * @param {any} value - The value to validate
   * @param {{ allowZero?: boolean }} [options={}] - Validation options
   * @param {boolean} [options.allowZero=false] - Whether to consider zero as positive
   * @returns {boolean} True if the value is a positive number, false otherwise
   * @example
   * const validator = new PositiveValidator()
   *
   * validator.validate(123)    // Returns true
   * validator.validate(0.1)    // Returns true
   * validator.validate(0)      // Returns false
   * validator.validate(0, { allowZero: true }) // Returns true
   * validator.validate(-123)   // Returns false
   * validator.validate(NaN)    // Returns false
   * validator.validate("123")  // Returns false
   * validator.validate(null)   // Returns false
   */
  validate(value: any, options: { allowZero?: boolean } = {}): boolean {
    if (typeof value !== "number" || isNaN(value)) {
      return false
    }

    return options.allowZero ? value >= 0 : value > 0
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @param {{ allowZero?: boolean }} [options={}] - Validation options used
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new PositiveValidator()
   *
   * validator.getMessage(-123)   // Returns "-123 is not a positive number"
   * validator.getMessage(0)      // Returns "0 is not a positive number"
   * validator.getMessage(0, { allowZero: true }) // Returns "0 is not a positive number or zero"
   * validator.getMessage(NaN)    // Returns "Expected a positive number but got NaN"
   * validator.getMessage("123")  // Returns "Expected a number but got string"
   * validator.getMessage(null)   // Returns "Expected a number but got null"
   */
  getMessage(value: any, options: { allowZero?: boolean } = {}): string {
    if (typeof value !== "number") {
      return `Expected a number but got ${value === null ? "null" : typeof value}`
    }

    if (isNaN(value)) {
      return "Expected a positive number but got NaN"
    }

    if (options.allowZero) {
      return `${value} is not a positive number or zero`
    } else {
      return `${value} is not a positive number`
    }
  }
}
