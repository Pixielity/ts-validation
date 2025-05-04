import { BaseValidator } from "./base-validator"
import { EmptyValidator } from "./empty-validator"

/**
 * Validates that a value is not empty.
 *
 * The NotEmptyValidator is the inverse of EmptyValidator and checks if a given value
 * is not considered empty:
 * - null or undefined are considered empty
 * - Empty strings (after trimming) are considered empty
 * - Empty arrays are considered empty
 * - Objects with no own properties are considered empty
 *
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new NotEmptyValidator()
 *
 * validator.validate("not empty") // Returns true
 * validator.validate([1, 2, 3])   // Returns true
 * validator.validate({ a: 1 })    // Returns true
 * validator.validate(null)        // Returns false
 * validator.validate("")          // Returns false
 * validator.validate([])          // Returns false
 */
export class NotEmptyValidator extends BaseValidator {
  /**
   * The EmptyValidator instance used to check if values are empty.
   *
   * @private
   * @readonly
   * @type {EmptyValidator}
   */
  private readonly emptyValidator = new EmptyValidator()

  /**
   * Creates a new NotEmptyValidator instance.
   *
   * Initializes the validator with the "notEmpty" validator type.
   */
  constructor() {
    super("notEmpty")
  }

  /**
   * Validates that a value is not empty.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is not empty, false otherwise
   * @example
   * const validator = new NotEmptyValidator()
   *
   * validator.validate("not empty") // Returns true
   * validator.validate([1, 2, 3])   // Returns true
   * validator.validate({ a: 1 })    // Returns true
   * validator.validate(0)           // Returns true
   * validator.validate(false)       // Returns true
   * validator.validate(null)        // Returns false
   * validator.validate(undefined)   // Returns false
   * validator.validate("")          // Returns false
   * validator.validate(" ")         // Returns false (after trimming)
   * validator.validate([])          // Returns false
   * validator.validate({})          // Returns false
   */
  validate(value: any): boolean {
    return !this.emptyValidator.validate(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new NotEmptyValidator()
   *
   * validator.getMessage(null)      // Returns "Value is empty (null)"
   * validator.getMessage(undefined) // Returns "Value is empty (undefined)"
   * validator.getMessage("")        // Returns "String is empty"
   * validator.getMessage([])        // Returns "Array is empty"
   * validator.getMessage({})        // Returns "Object is empty"
   */
  getMessage(value: any): string {
    if (value === null) {
      return "Value is empty (null)"
    }

    if (value === undefined) {
      return "Value is empty (undefined)"
    }

    if (typeof value === "string" && value.trim() === "") {
      return "String is empty"
    }

    if (Array.isArray(value) && value.length === 0) {
      return "Array is empty"
    }

    if (typeof value === "object" && Object.keys(value).length === 0) {
      return "Object is empty"
    }

    return "Value is empty"
  }
}
