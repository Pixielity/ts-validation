import { BaseValidator } from "./base-validator"
import { ValidatorType, DataType } from "../enums"
import { isMap } from "../validations"
import { getTypeErrorMessage } from "../utils/type-checker"

/**
 * Validates that a value is a Map.
 */
export class MapValidator extends BaseValidator {
  /**
   * Creates a new MapValidator.
   */
  constructor() {
    super(ValidatorType.MAP)
  }

  /**
   * Creates a new instance of MapValidator.
   *
   * @returns A new instance of MapValidator
   */
  static make(): MapValidator {
    return new MapValidator()
  }

  /**
   * Validates that a value is a Map.
   *
   * @param value - The value to validate
   * @returns True if the value is a Map, false otherwise
   */
  validate(value: any): boolean {
    return isMap(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   */
  getMessage(value: any): string {
    return getTypeErrorMessage(value, DataType.MAP)
  }
}
