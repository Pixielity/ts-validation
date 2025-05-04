import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isCreditCard } from "../validations"

/**
 * Validates that a string is a valid credit card number.
 */
export class CreditCardValidator extends BaseValidator {
  /**
   * Creates a new CreditCardValidator.
   */
  constructor() {
    super(ValidatorType.CREDIT_CARD)
  }

  /**
   * Creates a new instance of CreditCardValidator.
   *
   * @returns A new instance of CreditCardValidator
   */
  static make(): CreditCardValidator {
    return new CreditCardValidator()
  }

  /**
   * Validates that a string is a valid credit card number.
   *
   * @param value - The value to validate
   * @returns True if the string is a valid credit card number, false otherwise
   */
  validate(value: any): boolean {
    return isCreditCard(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   */
  getMessage(value: any): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${typeof value}`
    }

    return `"${value}" is not a valid credit card number`
  }
}
