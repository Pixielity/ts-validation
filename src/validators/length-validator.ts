import { BaseValidator } from "./base-validator"

/**
 * Validates that a string's length is within a specified range.
 *
 * The LengthValidator checks if a given string's length is within the specified
 * minimum and maximum values (inclusive). It extends the BaseValidator class
 * and implements the required validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new LengthValidator()
 *
 * validator.validate("abc", 2, 5)  // Returns true (length 3 is between 2 and 5)
 * validator.validate("abc", 4)     // Returns false (length 3 is less than 4)
 * validator.validate("abcdef", 2, 5) // Returns false (length 6 is greater than 5)
 */
export class LengthValidator extends BaseValidator {
  /**
   * Creates a new LengthValidator instance.
   *
   * Initializes the validator with the "length" validator type.
   */
  constructor() {
    super("length")
  }

  /**
   * Validates that a string's length is within a specified range.
   *
   * @param {any} value - The value to validate
   * @param {number} [min=0] - Minimum length (inclusive)
   * @param {number} [max] - Maximum length (inclusive), if undefined, only min is checked
   * @returns {boolean} True if the string's length is within the specified range, false otherwise
   * @example
   * const validator = new LengthValidator()
   *
   * validator.validate("abc", 2, 5)  // Returns true (length 3 is between 2 and 5)
   * validator.validate("abc", 3, 3)  // Returns true (length 3 equals both min and max)
   * validator.validate("abc", 0)     // Returns true (length 3 is greater than 0)
   * validator.validate("", 0)        // Returns true (length 0 equals min 0)
   * validator.validate("abc", 4)     // Returns false (length 3 is less than 4)
   * validator.validate("abcdef", 2, 5) // Returns false (length 6 is greater than 5)
   * validator.validate(123)          // Returns false (not a string)
   */
  validate(value: any, min = 0, max?: number): boolean {
    if (typeof value !== "string") {
      return false
    }

    const length = value.length

    if (length < min) {
      return false
    }

    if (max !== undefined && length > max) {
      return false
    }

    return true
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @param {number} [min=0] - Minimum length (inclusive) used in validation
   * @param {number} [max] - Maximum length (inclusive) used in validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new LengthValidator()
   *
   * validator.getMessage("abc", 4)     // Returns "String length (3) is less than minimum length (4)"
   * validator.getMessage("abcdef", 2, 5) // Returns "String length (6) is greater than maximum length (5)"
   * validator.getMessage(123)          // Returns "Expected a string but got number"
   */
  getMessage(value: any, min = 0, max?: number): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${typeof value}`
    }

    const length = value.length

    if (length < min) {
      return `String length (${length}) is less than minimum length (${min})`
    }

    if (max !== undefined && length > max) {
      return `String length (${length}) is greater than maximum length (${max})`
    }

    return "Invalid string length"
  }
}
