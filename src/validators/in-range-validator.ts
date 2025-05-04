import { BaseValidator } from "./base-validator"

/**
 * Validates that a number is within a specified range.
 *
 * The InRangeValidator checks if a given number is within the specified
 * minimum and maximum values. It extends the BaseValidator class
 * and implements the required validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new InRangeValidator()
 *
 * validator.validate(5, 1, 10)  // Returns true (5 is between 1 and 10)
 * validator.validate(0, 1, 10)  // Returns false (0 is less than 1)
 * validator.validate(11, 1, 10) // Returns false (11 is greater than 10)
 */
export class InRangeValidator extends BaseValidator {
  /**
   * Creates a new InRangeValidator instance.
   *
   * Initializes the validator with the "inRange" validator type.
   */
  constructor() {
    super("inRange")
  }

  /**
   * Validates that a number is within a specified range.
   *
   * @param {any} value - The value to validate
   * @param {number} min - Minimum value (inclusive)
   * @param {number} max - Maximum value (inclusive)
   * @returns {boolean} True if the number is within the specified range, false otherwise
   * @example
   * const validator = new InRangeValidator()
   *
   * validator.validate(5, 1, 10)  // Returns true (5 is between 1 and 10)
   * validator.validate(1, 1, 10)  // Returns true (1 equals min)
   * validator.validate(10, 1, 10) // Returns true (10 equals max)
   * validator.validate(0, 1, 10)  // Returns false (0 is less than 1)
   * validator.validate(11, 1, 10) // Returns false (11 is greater than 10)
   * validator.validate(NaN, 1, 10) // Returns false
   * validator.validate("5", 1, 10) // Returns false (not a number)
   * validator.validate(null, 1, 10) // Returns false
   */
  validate(value: any, min: number, max: number): boolean {
    if (typeof value !== "number" || isNaN(value)) {
      return false
    }

    return value >= min && value <= max
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @param {number} min - Minimum value (inclusive) used in validation
   * @param {number} max - Maximum value (inclusive) used in validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new InRangeValidator()
   *
   * validator.getMessage(0, 1, 10)  // Returns "0 is not in range 1 to 10"
   * validator.getMessage(11, 1, 10) // Returns "11 is not in range 1 to 10"
   * validator.getMessage(NaN, 1, 10) // Returns "Expected a number but got NaN"
   * validator.getMessage("5", 1, 10) // Returns "Expected a number but got string"
   * validator.getMessage(null, 1, 10) // Returns "Expected a number but got null"
   */
  getMessage(value: any, min: number, max: number): string {
    if (typeof value !== "number") {
      return `Expected a number but got ${value === null ? "null" : typeof value}`
    }

    if (isNaN(value)) {
      return "Expected a number but got NaN"
    }

    return `${value} is not in range ${min} to ${max}`
  }
}
