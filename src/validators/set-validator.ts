import { BaseValidator } from "./base-validator"
import { ValidatorType, DataType } from "../enums"
import { isSet } from "../validations"
import { getTypeErrorMessage } from "../utils/type-checker"

/**
 * Validates that a value is a Set.
 */
export class SetValidator extends BaseValidator {
  /**
   * Creates a new SetValidator.
   */
  constructor() {
    super(ValidatorType.SET)
  }

  /**
   * Creates a new instance of SetValidator.
   *
   * @returns A new instance of SetValidator
   */
  static make(): SetValidator {
    return new SetValidator()
  }

  /**
   * Validates that a value is a Set.
   *
   * @param value - The value to validate
   * @returns True if the value is a Set, false otherwise
   */
  validate(value: any): boolean {
    return isSet(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   */
  getMessage(value: any): string {
    return getTypeErrorMessage(value, DataType.SET)
  }
}
