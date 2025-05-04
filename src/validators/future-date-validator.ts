import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isFutureDate } from "../validations"

/**
 * Validates that a date is in the future.
 */
export class FutureDateValidator extends BaseValidator {
  /**
   * Creates a new FutureDateValidator.
   */
  constructor() {
    super(ValidatorType.FUTURE_DATE)
  }

  /**
   * Creates a new instance of FutureDateValidator.
   *
   * @returns A new instance of FutureDateValidator
   */
  static make(): FutureDateValidator {
    return new FutureDateValidator()
  }

  /**
   * Validates that a date is in the future.
   *
   * @param value - The value to validate
   * @param options - Optional configuration { comparisonDate: Date }
   * @returns True if the date is in the future, false otherwise
   */
  validate(value: any, options: { comparisonDate?: Date } = {}): boolean {
    return isFutureDate(value, options)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param options - Optional configuration used in validation
   * @returns Error message string
   */
  getMessage(value: any, options: { comparisonDate?: Date } = {}): string {
    if (!(value instanceof Date)) {
      return `Expected a Date but got ${typeof value}`
    }

    const comparisonDate = options.comparisonDate || new Date()
    return `Date ${value.toISOString()} is not in the future compared to ${comparisonDate.toISOString()}`
  }
}
