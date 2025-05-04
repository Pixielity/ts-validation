import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isHexadecimal } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string is a hexadecimal number.
 *
 * The HexadecimalValidator checks if a given string contains only hexadecimal characters
 * (0-9, a-f, A-F). It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new HexadecimalValidator()
 *
 * validator.validate("123abc")  // Returns true
 * validator.validate("DEADBEEF") // Returns true
 * validator.validate("123g")    // Returns false (g is not a hex character)
 */
export class HexadecimalValidator extends BaseValidator {
  /**
   * Creates a new HexadecimalValidator instance.
   *
   * Initializes the validator with the HEXADECIMAL validator type.
   */
  constructor() {
    super(ValidatorType.HEXADECIMAL)
  }

  /**
   * Validates that a string is a hexadecimal number.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the string is a hexadecimal number, false otherwise
   * @example
   * const validator = new HexadecimalValidator()
   *
   * validator.validate("123abc")  // Returns true
   * validator.validate("DEADBEEF") // Returns true
   * validator.validate("0x123abc") // Returns false (0x prefix is not allowed)
   * validator.validate("123g")    // Returns false (g is not a hex character)
   * validator.validate("")        // Returns false (empty string)
   * validator.validate(123)       // Returns false (not a string)
   * validator.validate(null)      // Returns false
   */
  validate(value: any): boolean {
    return isHexadecimal(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new HexadecimalValidator()
   *
   * validator.getMessage("123g")   // Returns "\"123g\" is not a valid hexadecimal string"
   * validator.getMessage("")       // Returns "\"\" is not a valid hexadecimal string"
   * validator.getMessage(123)      // Returns "Expected a string but got number"
   * validator.getMessage(null)     // Returns "Expected a string but got null"
   */
  getMessage(value: any): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }
    return `"${value}" is not a valid hexadecimal string`
  }
}
