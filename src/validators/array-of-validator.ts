import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isArrayOf } from "../validations"

/**
 * Validates that an array contains elements of a specific type.
 */
export class ArrayOfValidator extends BaseValidator {
  /**
   * Creates a new ArrayOfValidator.
   */
  constructor() {
    super(ValidatorType.ARRAY_OF)
  }

  /**
   * Creates a new instance of ArrayOfValidator.
   *
   * @returns A new instance of ArrayOfValidator
   */
  static make(): ArrayOfValidator {
    return new ArrayOfValidator()
  }

  /**
   * Validates that an array contains elements of a specific type.
   *
   * @param value - The value to validate
   * @param typeValidator - Function to validate each element's type
   * @returns True if the array contains elements of the specified type, false otherwise
   */
  validate(value: any, typeValidator: (item: any) => boolean): boolean {
    return isArrayOf(value, typeValidator)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   */
  getMessage(value: any): string {
    if (!Array.isArray(value)) {
      return `Expected an array but got ${typeof value}`
    }

    return `Array contains elements of incorrect type`
  }
}
