import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isPhoneNumber } from "../validations"

/**
 * Validates that a string is a valid phone number.
 *
 * Phone numbers can be validated against specific country formats or using
 * a general international format. Different countries have different phone number formats.
 *
 * @example
 * const validator = new PhoneNumberValidator();
 *
 * // Valid phone numbers
 * validator.validate('+1 212-555-1234'); // true (general format)
 * validator.validate('212-555-1234', 'US'); // true (US format)
 * validator.validate('07700 900123', 'GB'); // true (UK format)
 * validator.validate('01 23 45 67 89', 'FR'); // true (French format)
 *
 * // Invalid phone numbers
 * validator.validate('555-1234'); // false (too short)
 * validator.validate('212-555-1234', 'GB'); // false (US format being validated as UK)
 * validator.validate('not-a-number'); // false
 */
export class PhoneNumberValidator extends BaseValidator {
  /**
   * Creates a new PhoneNumberValidator instance.
   *
   * @example
   * const validator = new PhoneNumberValidator();
   */
  constructor() {
    super(ValidatorType.PHONE_NUMBER)
  }

  /**
   * Creates a new instance of PhoneNumberValidator.
   *
   * @returns A new instance of PhoneNumberValidator
   *
   * @example
   * const validator = PhoneNumberValidator.make();
   * validator.validate('+1 212-555-1234'); // true
   */
  static make(): PhoneNumberValidator {
    return new PhoneNumberValidator()
  }

  /**
   * Validates that a string is a valid phone number.
   *
   * @param value - The value to validate
   * @param countryCode - Optional ISO 3166-1 alpha-2 country code
   * @returns True if the string is a valid phone number, false otherwise
   *
   * @example
   * const validator = new PhoneNumberValidator();
   *
   * // General validation (international format)
   * validator.validate('+1 212-555-1234'); // true
   *
   * // Country-specific validation
   * validator.validate('212-555-1234', 'US'); // true
   * validator.validate('07700 900123', 'GB'); // true
   */
  validate(value: any, countryCode?: string): boolean {
    return isPhoneNumber(value, countryCode)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param countryCode - Optional country code used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new PhoneNumberValidator();
   * validator.getMessage('555-1234'); // '"555-1234" is not a valid phone number'
   * validator.getMessage('212-555-1234', 'GB'); // '"212-555-1234" is not a valid phone number for country GB'
   * validator.getMessage(123); // 'Expected a string but got number'
   */
  getMessage(value: any, countryCode?: string): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${typeof value}`
    }

    const countryText = countryCode ? ` for country ${countryCode}` : ""
    return `"${value}" is not a valid phone number${countryText}`
  }
}
