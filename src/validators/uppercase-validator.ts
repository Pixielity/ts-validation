import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isUppercase } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string is uppercase.
 *
 * The UppercaseValidator checks if a given string contains only uppercase characters.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new UppercaseValidator()
 *
 * validator.validate("ABC")     // Returns true
 * validator.validate("ABC123")  // Returns true (numbers are allowed)
 * validator.validate("abc")     // Returns false
 */
export class UppercaseValidator extends BaseValidator {
  /**
   * Creates a new UppercaseValidator instance.
   *
   * Initializes the validator with the UPPERCASE validator type.
   */
  constructor() {
    super(ValidatorType.Uppercase)
  }

  /**
   * Validates that a string is uppercase.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the string is uppercase, false otherwise
   * @example
   * const validator = new UppercaseValidator()
   *
   * validator.validate("ABC")     // Returns true
   * validator.validate("ABC123")  // Returns true (numbers are allowed)
   * validator.validate("ABC!")    // Returns true (special characters are allowed)
   * validator.validate("abc")     // Returns false
   * validator.validate("Abc")     // Returns false
   * validator.validate("")        // Returns true (empty string is considered uppercase)
   * validator.validate(123)       // Returns false (not a string)
   */
  validate(value: any): boolean {
    return isUppercase(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new UppercaseValidator()
   *
   * validator.getMessage("abc")     // Returns "\"abc\" is not uppercase"
   * validator.getMessage("Abc")     // Returns "\"Abc\" is not uppercase"
   * validator.getMessage(123)       // Returns "Expected a string but got number"
   * validator.getMessage(null)      // Returns "Expected a string but got null"
   */
  getMessage(value: any): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }
    return `"${value}" is not uppercase`
  }
}
