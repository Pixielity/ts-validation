import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { contains } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string contains a substring.
 *
 * This validator checks if a string contains a specified substring.
 * It can perform case-sensitive or case-insensitive checks.
 *
 * @example
 * const validator = new ContainsValidator();
 *
 * // Case-sensitive validation (default)
 * validator.validate('Hello World', 'World'); // true
 * validator.validate('Hello World', 'world'); // false
 *
 * // Case-insensitive validation
 * validator.validate('Hello World', 'world', { ignoreCase: true }); // true
 *
 * // Invalid cases
 * validator.validate('Hello', 'Universe'); // false (substring not found)
 * validator.validate(123, 'World'); // false (not a string)
 */
export class ContainsValidator extends BaseValidator {
  /**
   * Creates a new ContainsValidator instance.
   *
   * @example
   * const validator = new ContainsValidator();
   */
  constructor() {
    super(ValidatorType.CONTAINS)
  }

  /**
   * Creates a new instance of ContainsValidator.
   *
   * @returns A new instance of ContainsValidator
   *
   * @example
   * const validator = ContainsValidator.make();
   * validator.validate('Hello World', 'World'); // true
   */
  static make(): ContainsValidator {
    return new ContainsValidator()
  }

  /**
   * Validates that a string contains a substring.
   *
   * @param value - The value to validate
   * @param substring - The substring to search for
   * @param options - Optional configuration { ignoreCase: boolean }
   * @returns True if the string contains the substring, false otherwise
   *
   * @example
   * const validator = new ContainsValidator();
   *
   * // Case-sensitive validation (default)
   * validator.validate('Hello World', 'World'); // true
   * validator.validate('Hello World', 'world'); // false
   *
   * // Case-insensitive validation
   * validator.validate('Hello World', 'world', { ignoreCase: true }); // true
   */
  validate(value: any, substring: string, options: { ignoreCase?: boolean } = {}): boolean {
    return contains(value, substring, options)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param substring - The substring used in validation
   * @param options - Optional configuration used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new ContainsValidator();
   * validator.getMessage('Hello', 'World'); // '"Hello" does not contain "World"'
   * validator.getMessage('Hello', 'world', { ignoreCase: true }); // '"Hello" does not contain "world" (case-insensitive)'
   * validator.getMessage(123, 'World'); // 'Expected a string but got number'
   */
  getMessage(value: any, substring: string, options: { ignoreCase?: boolean } = {}): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }

    const caseText = options.ignoreCase ? " (case-insensitive)" : ""
    return `"${value}" does not contain "${substring}"${caseText}`
  }
}
