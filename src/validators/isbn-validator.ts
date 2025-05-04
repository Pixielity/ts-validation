import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isISBN } from "../validations"

/**
 * Validates that a string is a valid ISBN (International Standard Book Number).
 *
 * ISBN is a unique numeric commercial book identifier. There are two formats:
 * - ISBN-10: 10 digits (older format)
 * - ISBN-13: 13 digits (current standard since 2007)
 *
 * @example
 * const validator = new ISBNValidator();
 *
 * // Valid ISBNs
 * validator.validate('0-306-40615-2'); // true (ISBN-10)
 * validator.validate('978-3-16-148410-0'); // true (ISBN-13)
 * validator.validate('0306406152'); // true (ISBN-10 without separators)
 * validator.validate('9783161484100'); // true (ISBN-13 without separators)
 *
 * // With specific version
 * validator.validate('0-306-40615-2', 10); // true
 * validator.validate('978-3-16-148410-0', 13); // true
 *
 * // Invalid ISBNs
 * validator.validate('0-306-40615-3'); // false (invalid check digit)
 * validator.validate('978-3-16-148410-1'); // false (invalid check digit)
 * validator.validate('0-306-40615-2', 13); // false (ISBN-10 being validated as ISBN-13)
 */
export class ISBNValidator extends BaseValidator {
  /**
   * Creates a new ISBNValidator instance.
   *
   * @example
   * const validator = new ISBNValidator();
   */
  constructor() {
    super(ValidatorType.ISBN)
  }

  /**
   * Creates a new instance of ISBNValidator.
   *
   * @returns A new instance of ISBNValidator
   *
   * @example
   * const validator = ISBNValidator.make();
   * validator.validate('978-3-16-148410-0'); // true
   */
  static make(): ISBNValidator {
    return new ISBNValidator()
  }

  /**
   * Validates that a string is a valid ISBN.
   *
   * @param value - The value to validate
   * @param version - Optional ISBN version (10 or 13)
   * @returns True if the string is a valid ISBN, false otherwise
   *
   * @example
   * const validator = new ISBNValidator();
   *
   * // Check any ISBN version
   * validator.validate('0-306-40615-2'); // true (ISBN-10)
   * validator.validate('978-3-16-148410-0'); // true (ISBN-13)
   *
   * // Check specific ISBN version
   * validator.validate('0-306-40615-2', 10); // true
   * validator.validate('978-3-16-148410-0', 13); // true
   */
  validate(value: any, version?: 10 | 13): boolean {
    return isISBN(value, version)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param version - Optional ISBN version used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new ISBNValidator();
   * validator.getMessage('0-306-40615-3'); // '"0-306-40615-3" is not a valid ISBN'
   * validator.getMessage('0-306-40615-2', 13); // '"0-306-40615-2" is not a valid ISBN-13'
   * validator.getMessage(123); // 'Expected a string but got number'
   */
  getMessage(value: any, version?: 10 | 13): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${typeof value}`
    }

    const versionText = version ? `-${version}` : ""
    return `"${value}" is not a valid ISBN${versionText}`
  }
}
