import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isPastDate } from "../validations"

/**
 * Validates that a date is in the past.
 */
export class PastDateValidator extends BaseValidator {
  /**
   * Creates a new PastDateValidator.
   */
  constructor() {
    super(ValidatorType.PAST_DATE)
  }

  /**
   * Creates a new instance of PastDateValidator.
   *
   * @returns A new instance of PastDateValidator
   */
  static make(): PastDateValidator {
    return new PastDateValidator()
  }

  /**
   * Validates that a date is in the past.
   *
   * @param value - The value to validate
   * @param options - Optional configuration { comparisonDate: Date }
   * @returns True if the date is in the past, false otherwise
   */
  validate(value: any, options: { comparisonDate?: Date } = {}): boolean {
    return isPastDate(value, options)
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
    return `Date ${value.toISOString()} is not in the past compared to ${comparisonDate.toISOString()}`
  }
}
