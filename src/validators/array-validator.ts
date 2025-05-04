import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isArray } from "../validations"

/**
 * Validates that a value is an array.
 *
 * The ArrayValidator checks if a given value is an array using Array.isArray().
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new ArrayValidator()
 *
 * validator.validate([1, 2, 3])     // Returns true
 * validator.validate([])            // Returns true (empty array is valid)
 * validator.validate("not array")   // Returns false
 * validator.validate({})            // Returns false
 */
export class ArrayValidator extends BaseValidator {
  /**
   * Creates a new ArrayValidator instance.
   *
   * Initializes the validator with the ARRAY validator type.
   */
  constructor() {
    super(ValidatorType.ARRAY)
  }

  /**
   * Validates that a value is an array.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is an array, false otherwise
   * @example
   * const validator = new ArrayValidator()
   *
   * validator.validate([1, 2, 3])     // Returns true
   * validator.validate([])            // Returns true (empty array is valid)
   * validator.validate(new Array(3))  // Returns true
   * validator.validate("not array")   // Returns false
   * validator.validate({})            // Returns false
   * validator.validate(null)          // Returns false
   */
  validate(value: any): boolean {
    return isArray(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new ArrayValidator()
   *
   * validator.getMessage("not array") // Returns "Expected an array but got string"
   * validator.getMessage({})          // Returns "Expected an array but got object"
   * validator.getMessage(null)        // Returns "Expected an array but got null"
   * validator.getMessage(undefined)   // Returns "Expected an array but got undefined"
   */
  getMessage(value: any): string {
    return `Expected an array but got ${value === null ? "null" : typeof value}`
  }
}
