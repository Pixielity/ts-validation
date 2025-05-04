import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isPostalCode } from "../validations"

/**
 * Validates that a string is a valid postal code for a specific country.
 *
 * Postal codes (also known as ZIP codes in the US) are alphanumeric or numeric codes
 * used by postal services to facilitate mail sorting and delivery. The format varies by country.
 *
 * @example
 * const validator = new PostalCodeValidator();
 *
 * // Valid postal codes for different countries
 * validator.validate('10001', 'US'); // true (US ZIP code)
 * validator.validate('SW1A 1AA', 'GB'); // true (UK postal code)
 * validator.validate('75001', 'FR'); // true (French postal code)
 * validator.validate('100-0001', 'JP'); // true (Japanese postal code)
 *
 * // Invalid postal codes
 * validator.validate('1234', 'US'); // false (US ZIP codes must be 5 or 9 digits)
 * validator.validate('ABCDEF', 'GB'); // false (invalid UK format)
 * validator.validate('75001', 'DE'); // false (invalid for Germany)
 */
export class PostalCodeValidator extends BaseValidator {
  /**
   * Creates a new PostalCodeValidator instance.
   *
   * @example
   * const validator = new PostalCodeValidator();
   */
  constructor() {
    super(ValidatorType.POSTAL_CODE)
  }

  /**
   * Creates a new instance of PostalCodeValidator.
   *
   * @returns A new instance of PostalCodeValidator
   *
   * @example
   * const validator = PostalCodeValidator.make();
   * validator.validate('10001', 'US'); // true
   */
  static make(): PostalCodeValidator {
    return new PostalCodeValidator()
  }

  /**
   * Validates that a string is a valid postal code.
   *
   * @param value - The value to validate
   * @param countryCode - ISO 3166-1 alpha-2 country code
   * @returns True if the string is a valid postal code for the specified country, false otherwise
   *
   * @example
   * const validator = new PostalCodeValidator();
   * validator.validate('10001', 'US'); // true (US ZIP code)
   * validator.validate('SW1A 1AA', 'GB'); // true (UK postal code)
   * validator.validate('75001', 'FR'); // true (French postal code)
   */
  validate(value: any, countryCode: string): boolean {
    return isPostalCode(value, countryCode)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param countryCode - Country code used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new PostalCodeValidator();
   * validator.getMessage('1234', 'US'); // '"1234" is not a valid postal code for country US'
   * validator.getMessage(123, 'GB'); // 'Expected a string but got number'
   */
  getMessage(value: any, countryCode: string): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${typeof value}`
    }

    return `"${value}" is not a valid postal code for country ${countryCode}`
  }
}
