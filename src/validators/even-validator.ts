import { BaseValidator } from "./base-validator"

/**
 * Validates that a number is even.
 *
 * The EvenValidator checks if a given number is even (divisible by 2).
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new EvenValidator()
 *
 * validator.validate(2)  // Returns true
 * validator.validate(0)  // Returns true
 * validator.validate(-4) // Returns true
 * validator.validate(3)  // Returns false
 */
export class EvenValidator extends BaseValidator {
  /**
   * Creates a new EvenValidator instance.
   *
   * Initializes the validator with the "even" validator type.
   */
  constructor() {
    super("even")
  }

  /**
   * Validates that a number is even.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the number is even, false otherwise
   * @example
   * const validator = new EvenValidator()
   *
   * validator.validate(2)  // Returns true
   * validator.validate(0)  // Returns true
   * validator.validate(-4) // Returns true
   * validator.validate(3)  // Returns false
   * validator.validate(1)  // Returns false
   * validator.validate(-3) // Returns false
   * validator.validate(2.2) // Returns false (not an integer)
   * validator.validate(NaN) // Returns false
   * validator.validate("2") // Returns false (not a number)
   * validator.validate(null) // Returns false
   */
  validate(value: any): boolean {
    if (typeof value !== "number" || isNaN(value) || !Number.isInteger(value)) {
      return false
    }

    return value % 2 === 0
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new EvenValidator()
   *
   * validator.getMessage(3)  // Returns "3 is not an even number"
   * validator.getMessage(2.2) // Returns "2.2 is not an integer"
   * validator.getMessage(NaN) // Returns "Expected a number but got NaN"
   * validator.getMessage("2") // Returns "Expected a number but got string"
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

    return `${value} is not an even number`
  }
}
