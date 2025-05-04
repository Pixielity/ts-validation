import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"

/**
 * Validates that a value is a valid Date object.
 *
 * The DateValidator checks if a given value is an instance of Date
 * and is not an invalid date (i.e., its time value is not NaN).
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new DateValidator()
 *
 * validator.validate(new Date())           // Returns true
 * validator.validate(new Date("2023-01-01")) // Returns true
 * validator.validate(new Date("invalid"))  // Returns false (invalid date)
 * validator.validate("2023-01-01")         // Returns false (string, not Date object)
 */
export class DateValidator extends BaseValidator {
  /**
   * Creates a new DateValidator instance.
   *
   * Initializes the validator with the DATE validator type.
   */
  constructor() {
    super(ValidatorType.DATE)
  }

  /**
   * Validates that a value is a valid Date object.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is a valid Date object, false otherwise
   * @example
   * const validator = new DateValidator()
   *
   * validator.validate(new Date())           // Returns true
   * validator.validate(new Date("2023-01-01")) // Returns true
   * validator.validate(new Date(1672531200000)) // Returns true
   * validator.validate(new Date("invalid"))  // Returns false (invalid date)
   * validator.validate("2023-01-01")         // Returns false (string, not Date object)
   * validator.validate(null)                 // Returns false
   */
  validate(value: any): boolean {
    return value instanceof Date && !isNaN(value.getTime())
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new DateValidator()
   *
   * validator.getMessage("2023-01-01")        // Returns "Expected a Date but got string"
   * validator.getMessage(new Date("invalid")) // Returns "Expected a valid Date but got an invalid Date"
   * validator.getMessage(null)                // Returns "Expected a Date but got null"
   * validator.getMessage(undefined)           // Returns "Expected a Date but got undefined"
   */
  getMessage(value: any): string {
    if (!(value instanceof Date)) {
      return `Expected a Date but got ${value === null ? "null" : typeof value}`
    }
    if (isNaN(value.getTime())) {
      return "Expected a valid Date but got an invalid Date"
    }
    return "Invalid Date"
  }
}
