import { BaseValidator } from "./base-validator"
import { ValidatorType, DataType } from "../enums"
import { isRegExp } from "../validations"
import { getTypeErrorMessage } from "../utils/type-checker"

/**
 * Validates that a value is a regular expression.
 */
export class RegExpValidator extends BaseValidator {
  /**
   * Creates a new RegExpValidator.
   */
  constructor() {
    super(ValidatorType.REGEXP)
  }

  /**
   * Creates a new instance of RegExpValidator.
   *
   * @returns A new instance of RegExpValidator
   */
  static make(): RegExpValidator {
    return new RegExpValidator()
  }

  /**
   * Validates that a value is a regular expression.
   *
   * @param value - The value to validate
   * @returns True if the value is a regular expression, false otherwise
   */
  validate(value: any): boolean {
    return isRegExp(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   */
  getMessage(value: any): string {
    return getTypeErrorMessage(value, DataType.REGEXP)
  }
}
