import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isLowercase } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string is lowercase.
 *
 * The LowercaseValidator checks if a given string contains only lowercase characters.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new LowercaseValidator()
 *
 * validator.validate("abc")     // Returns true
 * validator.validate("abc123")  // Returns true (numbers are allowed)
 * validator.validate("ABC")     // Returns false
 */
export class LowercaseValidator extends BaseValidator {
  /**
   * Creates a new LowercaseValidator instance.
   *
   * Initializes the validator with the LOWERCASE validator type.
   */
  constructor() {
    super(ValidatorType.LOWERCASE)
  }

  /**
   * Validates that a string is lowercase.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the string is lowercase, false otherwise
   * @example
   * const validator = new LowercaseValidator()
   *
   * validator.validate("abc")     // Returns true
   * validator.validate("abc123")  // Returns true (numbers are allowed)
   * validator.validate("abc!")    // Returns true (special characters are allowed)
   * validator.validate("ABC")     // Returns false
   * validator.validate("Abc")     // Returns false
   * validator.validate("")        // Returns true (empty string is considered lowercase)
   * validator.validate(123)       // Returns false (not a string)
   */
  validate(value: any): boolean {
    return isLowercase(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new LowercaseValidator()
   *
   * validator.getMessage("ABC")     // Returns "\"ABC\" is not lowercase"
   * validator.getMessage("Abc")     // Returns "\"Abc\" is not lowercase"
   * validator.getMessage(123)       // Returns "Expected a string but got number"
   * validator.getMessage(null)      // Returns "Expected a string but got null"
   */
  getMessage(value: any): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }
    return `"${value}" is not lowercase`
  }
}
