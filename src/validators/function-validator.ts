import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"

/**
 * Validates that a value is a function.
 *
 * The FunctionValidator checks if a given value is of type function.
 * It extends the BaseValidator class and implements the required
 * validate and getMessage methods.
 *
 * @extends {BaseValidator}
 * @example
 * const validator = new FunctionValidator()
 *
 * validator.validate(() => {})        // Returns true
 * validator.validate(function() {})   // Returns true
 * validator.validate(String)          // Returns true (String constructor is a function)
 * validator.validate("not a function") // Returns false
 */
export class FunctionValidator extends BaseValidator {
  /**
   * Creates a new FunctionValidator instance.
   *
   * Initializes the validator with the FUNCTION validator type.
   */
  constructor() {
    super(ValidatorType.FUNCTION)
  }

  /**
   * Validates that a value is a function.
   *
   * @param {any} value - The value to validate
   * @returns {boolean} True if the value is a function, false otherwise
   * @example
   * const validator = new FunctionValidator()
   *
   * validator.validate(() => {})        // Returns true
   * validator.validate(function() {})   // Returns true
   * validator.validate(async () => {})  // Returns true (async functions are functions)
   * validator.validate(String)          // Returns true (String constructor is a function)
   * validator.validate(Math.max)        // Returns true (built-in methods are functions)
   * validator.validate("not a function") // Returns false
   * validator.validate(null)            // Returns false
   */
  validate(value: any): boolean {
    return typeof value === "function"
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param {any} value - The value that failed validation
   * @returns {string} Error message describing why validation failed
   * @example
   * const validator = new FunctionValidator()
   *
   * validator.getMessage("not a function") // Returns "Expected a function but got string"
   * validator.getMessage(null)            // Returns "Expected a function but got null"
   * validator.getMessage(undefined)       // Returns "Expected a function but got undefined"
   * validator.getMessage({})              // Returns "Expected a function but got object"
   */
  getMessage(value: any): string {
    return `Expected a function but got ${value === null ? "null" : typeof value}`
  }
}
