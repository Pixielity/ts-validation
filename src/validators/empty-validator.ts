import { BaseValidator } from "./base-validator"

/**
 * Validates that a value is empty.
 *
 * The EmptyValidator checks if a given value is considered empty:
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
 * const validator = new EmptyValidator()
 *
 * validator.validate(null)       // Returns true
 * validator.validate(undefined)  // Returns true
 * validator.validate("")         // Returns true
 * validator.validate([])         // Returns true
 * validator.validate({})         // Returns true
 * validator.validate("not empty") // Returns false
 */
export class EmptyValidator extends BaseValidator {
  /**
   * Creates a new EmptyValidator instance.
   *
   * Initializes the validator with the "empty" validator type.
   */
  constructor() {
    super("empty")
  }

  /**
   * Validates that a value is empty.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is empty, false otherwise
   * @example
   * const validator = new EmptyValidator()
   *
   * validator.validate(null)       // Returns true
   * validator.validate(undefined)  // Returns true
   * validator.validate("")         // Returns true
   * validator.validate(" ")        // Returns true (after trimming)
   * validator.validate([])         // Returns true
   * validator.validate({})         // Returns true
   * validator.validate("not empty") // Returns false
   * validator.validate([1, 2, 3])  // Returns false
   * validator.validate({ key: "value" }) // Returns false
   * validator.validate(0)          // Returns false
   * validator.validate(false)      // Returns false
   */
  validate(value: any): boolean {
    if (value === null || value === undefined) {
      return true
    }

    if (typeof value === "string") {
      return value.trim() === ""
    }

    if (Array.isArray(value)) {
      return value.length === 0
    }

    if (typeof value === "object") {
      return Object.keys(value).length === 0
    }

    return false
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new EmptyValidator()
   *
   * validator.getMessage("not empty") // Returns "String \"not empty\" is not empty"
   * validator.getMessage([1, 2, 3])   // Returns "Array with 3 elements is not empty"
   * validator.getMessage({ a: 1 })    // Returns "Object with 1 properties is not empty"
   * validator.getMessage(0)           // Returns "Value of type number cannot be empty"
   */
  getMessage(value: any): string {
    if (value === null || value === undefined) {
      return "Value is not empty (null or undefined is considered empty)"
    }

    if (typeof value === "string") {
      return `String "${value}" is not empty`
    }

    if (Array.isArray(value)) {
      return `Array with ${value.length} elements is not empty`
    }

    if (typeof value === "object") {
      return `Object with ${Object.keys(value).length} properties is not empty`
    }

    return `Value of type ${typeof value} cannot be empty`
  }
}
