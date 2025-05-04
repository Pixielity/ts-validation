import { BaseValidator } from "./base-validator"
import { ValidatorType, DataType } from "../enums"
import { isError } from "../validations"
import { getTypeErrorMessage } from "../utils/type-checker"

/**
 * Validates that a value is an Error.
 */
export class ErrorValidator extends BaseValidator {
  /**
   * Creates a new ErrorValidator.
   */
  constructor() {
    super(ValidatorType.ERROR)
  }

  /**
   * Creates a new instance of ErrorValidator.
   *
   * @returns A new instance of ErrorValidator
   */
  static make(): ErrorValidator {
    return new ErrorValidator()
  }

  /**
   * Validates that a value is an Error.
   *
   * @param value - The value to validate
   * @returns True if the value is an Error, false otherwise
   */
  validate(value: any): boolean {
    return isError(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   */
  getMessage(value: any): string {
    return getTypeErrorMessage(value, DataType.ERROR)
  }
}
