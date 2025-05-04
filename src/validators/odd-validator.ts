import { BaseValidator } from "./base-validator"

/**
 * Validates that a number is odd.
 *
 * The OddValidator checks if a given number is odd (not divisible by 2).
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new OddValidator()
 *
 * validator.validate(3)  // Returns true
 * validator.validate(1)  // Returns true
 * validator.validate(-3) // Returns true
 * validator.validate(2)  // Returns false
 */
export class OddValidator extends BaseValidator {
  /**
   * Creates a new OddValidator instance.
   *
   * Initializes the validator with the "odd" validator type.
   */
  constructor() {
    super("odd")
  }

  /**
   * Validates that a number is odd.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the number is odd, false otherwise
   * @example
   * const validator = new OddValidator()
   *
   * validator.validate(3)  // Returns true
   * validator.validate(1)  // Returns true
   * validator.validate(-3) // Returns true
   * validator.validate(2)  // Returns false
   * validator.validate(0)  // Returns false
   * validator.validate(-4) // Returns false
   * validator.validate(3.3) // Returns false (not an integer)
   * validator.validate(NaN) // Returns false
   * validator.validate("3") // Returns false (not a number)
   * validator.validate(null) // Returns false
   */
  validate(value: any): boolean {
    if (typeof value !== "number" || isNaN(value) || !Number.isInteger(value)) {
      return false
    }

    return value % 2 !== 0
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new OddValidator()
   *
   * validator.getMessage(2)  // Returns "2 is not an odd number"
   * validator.getMessage(3.3) // Returns "3.3 is not an integer"
   * validator.getMessage(NaN) // Returns "Expected a number but got NaN"
   * validator.getMessage("3") // Returns "Expected a number but got string"
   * validator.getMessage(null) // Returns "Expected a number but got null"
   */
  getMessage(value: any): string {
    if (typeof value !== "number") {
      return `Expected a number but got ${value === null ? "null" : typeof value}`
    }

    if (isNaN(value)) {
      return "Expected a number but got NaN"
    }

    if (!Number.isInteger(value)) {
      return `${value} is not an integer`
    }

    return `${value} is not an odd number`
  }
}
