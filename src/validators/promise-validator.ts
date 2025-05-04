import { BaseValidator } from "./base-validator"
import { ValidatorType, DataType } from "../enums"
import { isPromise } from "../validations"
import { getTypeErrorMessage } from "../utils/type-checker"

/**
 * Validates that a value is a promise.
 */
export class PromiseValidator extends BaseValidator {
  /**
   * Creates a new PromiseValidator.
   */
  constructor() {
    super(ValidatorType.PROMISE)
  }

  /**
   * Creates a new instance of PromiseValidator.
   *
   * @returns A new instance of PromiseValidator
   */
  static make(): PromiseValidator {
    return new PromiseValidator()
  }

  /**
   * Validates that a value is a promise.
   *
   * @param value - The value to validate
   * @returns True if the value is a promise, false otherwise
   */
  validate(value: any): boolean {
    return isPromise(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   */
  getMessage(value: any): string {
    return getTypeErrorMessage(value, DataType.PROMISE)
  }
}
