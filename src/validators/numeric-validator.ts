import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isNumeric } from "../validations"

/**
 * Validates that a string contains only numeric characters.
 *
 * The NumericValidator checks if a given string contains only numeric characters,
 * with options to allow decimal points and negative signs. It extends the BaseValidator class
 * and implements the required validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new NumericValidator()
 *
 * validator.validate("123")                  // Returns true
 * validator.validate("123.45", { allowDecimal: true }) // Returns true
 * validator.validate("-123", { allowNegative: true }) // Returns true
 * validator.validate("abc")                  // Returns false
 */
export class NumericValidator extends BaseValidator {
  /**
   * Creates a new NumericValidator instance.
   *
   * Initializes the validator with the NUMERIC validator type.
   */
  constructor() {
    super(ValidatorType.NUMERIC)
  }

  /**
   * Validates that a string contains only numeric characters.
   *
   * @param {any} value - The value to validate
   * @param {{ allowDecimal?: boolean, allowNegative?: boolean }} [options={}] - Validation options
   * @param {boolean} [options.allowDecimal=false] - Whether to allow decimal points
   * @param {boolean} [options.allowNegative=false] - Whether to allow negative signs
   * @returns {boolean} True if the string contains only numeric characters, false otherwise
   * @example
   * const validator = new NumericValidator()
   *
   * validator.validate("123")                  // Returns true
   * validator.validate("0")                    // Returns true
   * validator.validate(123)                    // Returns true (number is converted to string)
   * validator.validate("123.45")               // Returns false (decimal not allowed by default)
   * validator.validate("123.45", { allowDecimal: true }) // Returns true
   * validator.validate("-123")                 // Returns false (negative not allowed by default)
   * validator.validate("-123", { allowNegative: true }) // Returns true
   * validator.validate("-123.45", { allowDecimal: true, allowNegative: true }) // Returns true
   * validator.validate("abc")                  // Returns false
   * validator.validate("")                     // Returns false (empty string)
   */
  validate(value: any, options: { allowDecimal?: boolean; allowNegative?: boolean } = {}): boolean {
    return isNumeric(value, options)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @param {{ allowDecimal?: boolean, allowNegative?: boolean }} [options={}] - Validation options used
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new NumericValidator()
   *
   * validator.getMessage("abc")                // Returns "\"abc\" is not a valid numeric string"
   * validator.getMessage("123.45")             // Returns "\"123.45\" is not a valid numeric string"
   * validator.getMessage("123.45", { allowDecimal: true }) // Returns "\"123.45\" is not a valid numeric string with decimals allowed"
   * validator.getMessage("-123", { allowNegative: true }) // Returns "\"123.45\" is not a valid numeric string with negative values allowed"
   * validator.getMessage(null)                 // Returns "Expected a string or number but got null"
   */
  getMessage(value: any, options: { allowDecimal?: boolean; allowNegative?: boolean } = {}): string {
    if (typeof value !== "string" && typeof value !== "number") {
      return `Expected a string or number but got ${typeof value}`
    }

    const decimalText = options.allowDecimal ? " with decimals allowed" : ""
    const negativeText = options.allowNegative ? " with negative values allowed" : ""

    return `"${value}" is not a valid numeric string${decimalText}${negativeText}`
  }
}
