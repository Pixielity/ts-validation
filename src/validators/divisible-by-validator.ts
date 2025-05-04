import { BaseValidator } from "./base-validator"

/**
 * Validates that a number is divisible by another number.
 *
 * The DivisibleByValidator checks if a given number is divisible by a specified divisor.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new DivisibleByValidator()
 *
 * validator.validate(10, 5)  // Returns true (10 is divisible by 5)
 * validator.validate(10, 3)  // Returns false (10 is not divisible by 3)
 */
export class DivisibleByValidator extends BaseValidator {
  /**
   * Creates a new DivisibleByValidator instance.
   *
   * Initializes the validator with the "divisibleBy" validator type.
   */
  constructor() {
    super("divisibleBy")
  }

  /**
   * Validates that a number is divisible by another number.
   *
   * @param {any} value - The value to validate
   * @param {number} divisor - The divisor to check against
   * @returns {boolean} True if the number is divisible by the divisor, false otherwise
   * @example
   * const validator = new DivisibleByValidator()
   *
   * validator.validate(10, 5)  // Returns true (10 is divisible by 5)
   * validator.validate(10, 2)  // Returns true (10 is divisible by 2)
   * validator.validate(0, 5)   // Returns true (0 is divisible by any number except 0)
   * validator.validate(10, 3)  // Returns false (10 is not divisible by 3)
   * validator.validate(10, 0)  // Returns false (division by zero)
   * validator.validate(10.5, 5) // Returns false (not an integer)
   * validator.validate(NaN, 5) // Returns false
   * validator.validate("10", 5) // Returns false (not a number)
   * validator.validate(null, 5) // Returns false
   */
  validate(value: any, divisor: number): boolean {
    if (typeof value !== "number" || isNaN(value) || !Number.isInteger(value)) {
      return false
    }

    if (typeof divisor !== "number" || isNaN(divisor) || divisor === 0) {
      return false
    }

    return value % divisor === 0
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @param {number} divisor - The divisor used in validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new DivisibleByValidator()
   *
   * validator.getMessage(10, 3)  // Returns "10 is not divisible by 3"
   * validator.getMessage(10, 0)  // Returns "Cannot divide by zero"
   * validator.getMessage(10.5, 5) // Returns "10.5 is not an integer"
   * validator.getMessage(NaN, 5) // Returns "Expected a number but got NaN"
   * validator.getMessage("10", 5) // Returns "Expected a number but got string"
   * validator.getMessage(null, 5) // Returns "Expected a number but got null"
   */
  getMessage(value: any, divisor: number): string {
    if (typeof value !== "number") {
      return `Expected a number but got ${value === null ? "null" : typeof value}`
    }

    if (isNaN(value)) {
      return "Expected a number but got NaN"
    }

    if (!Number.isInteger(value)) {
      return `${value} is not an integer`
    }

    if (typeof divisor !== "number" || isNaN(divisor)) {
      return `Expected a divisor that is a number but got ${divisor === null ? "null" : typeof divisor}`
    }

    if (divisor === 0) {
      return "Cannot divide by zero"
    }

    return `${value} is not divisible by ${divisor}`
  }
}
