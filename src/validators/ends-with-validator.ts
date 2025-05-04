import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { endsWith } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string ends with a specified suffix.
 *
 * This validator checks if a string ends with a specified suffix.
 * It can perform case-sensitive or case-insensitive checks.
 *
 * @example
 * const validator = new EndsWithValidator();
 *
 * // Case-sensitive validation (default)
 * validator.validate('Hello World', 'World'); // true
 * validator.validate('Hello World', 'world'); // false
 *
 * // Case-insensitive validation
 * validator.validate('Hello World', 'world', { ignoreCase: true }); // true
 *
 * // Invalid cases
 * validator.validate('Hello World', 'Hello'); // false (not at end)
 * validator.validate(123, 'World'); // false (not a string)
 */
export class EndsWithValidator extends BaseValidator {
  /**
   * Creates a new EndsWithValidator instance.
   *
   * @example
   * const validator = new EndsWithValidator();
   */
  constructor() {
    super(ValidatorType.ENDS_WITH)
  }

  /**
   * Creates a new instance of EndsWithValidator.
   *
   * @returns A new instance of EndsWithValidator
   *
   * @example
   * const validator = EndsWithValidator.make();
   * validator.validate('Hello World', 'World'); // true
   */
  static make(): EndsWithValidator {
    return new EndsWithValidator()
  }

  /**
   * Validates that a string ends with a specified suffix.
   *
   * @param value - The value to validate
   * @param suffix - The suffix to check for
   * @param options - Optional configuration { ignoreCase: boolean }
   * @returns True if the string ends with the suffix, false otherwise
   *
   * @example
   * const validator = new EndsWithValidator();
   *
   * // Case-sensitive validation (default)
   * validator.validate('Hello World', 'World'); // true
   * validator.validate('Hello World', 'world'); // false
   *
   * // Case-insensitive validation
   * validator.validate('Hello World', 'world', { ignoreCase: true }); // true
   */
  validate(value: any, suffix: string, options: { ignoreCase?: boolean } = {}): boolean {
    return endsWith(value, suffix, options)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param suffix - The suffix used in validation
   * @param options - Optional configuration used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new EndsWithValidator();
   * validator.getMessage('Hello', 'World'); // '"Hello" does not end with "World"'
   * validator.getMessage('Hello', 'hello', { ignoreCase: true }); // '"Hello" does not end with "hello" (case-insensitive)'
   * validator.getMessage(123, 'World'); // 'Expected a string but got number'
   */
  getMessage(value: any, suffix: string, options: { ignoreCase?: boolean } = {}): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }

    const caseText = options.ignoreCase ? " (case-insensitive)" : ""
    return `"${value}" does not end with "${suffix}"${caseText}`
  }
}
