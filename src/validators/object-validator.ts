import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isObject } from "../validations"

/**
 * Validates that a value is an object.
 *
 * The ObjectValidator checks if a given value is an object (but not null or an array).
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new ObjectValidator()
 *
 * validator.validate({})             // Returns true
 * validator.validate({ key: "value" }) // Returns true
 * validator.validate(new Date())     // Returns true (Date is an object)
 * validator.validate(null)           // Returns false (null is not considered an object)
 * validator.validate([])             // Returns false (arrays are not considered objects)
 */
export class ObjectValidator extends BaseValidator {
  /**
   * Creates a new ObjectValidator instance.
   *
   * Initializes the validator with the OBJECT validator type.
   */
  constructor() {
    super(ValidatorType.OBJECT)
  }

  /**
   * Validates that a value is an object.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is an object (but not null or an array), false otherwise
   * @example
   * const validator = new ObjectValidator()
   *
   * validator.validate({})             // Returns true
   * validator.validate({ key: "value" }) // Returns true
   * validator.validate(new Date())     // Returns true (Date is an object)
   * validator.validate(/regex/)        // Returns true (RegExp is an object)
   * validator.validate(null)           // Returns false (null is not considered an object)
   * validator.validate([])             // Returns false (arrays are not considered objects)
   * validator.validate("string")       // Returns false
   */
  validate(value: any): boolean {
    return isObject(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new ObjectValidator()
   *
   * validator.getMessage("not object") // Returns "Expected an object but got string"
   * validator.getMessage(null)         // Returns "Expected an object but got null"
   * validator.getMessage([])           // Returns "Expected an object but got array"
   * validator.getMessage(123)          // Returns "Expected an object but got number"
   */
  getMessage(value: any): string {
    if (value === null) {
      return "Expected an object but got null"
    }

    if (Array.isArray(value)) {
      return "Expected an object but got array"
    }

    return `Expected an object but got ${typeof value}`
  }
}
