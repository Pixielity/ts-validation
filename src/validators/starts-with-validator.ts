import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { startsWith } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string starts with a specified prefix.
 *
 * This validator checks if a string begins with a specified prefix.
 * It can perform case-sensitive or case-insensitive checks.
 *
 * @example
 * const validator = new StartsWithValidator();
 *
 * // Case-sensitive validation (default)
 * validator.validate('Hello World', 'Hello'); // true
 * validator.validate('Hello World', 'hello'); // false
 *
 * // Case-insensitive validation
 * validator.validate('Hello World', 'hello', { ignoreCase: true }); // true
 *
 * // Invalid cases
 * validator.validate('Hello World', 'World'); // false (not at start)
 * validator.validate(123, 'Hello'); // false (not a string)
 */
export class StartsWithValidator extends BaseValidator {
  /**
   * Creates a new StartsWithValidator instance.
   *
   * @example
   * const validator = new StartsWithValidator();
   */
  constructor() {
    super(ValidatorType.StartsWith)
  }

  /**
   * Creates a new instance of StartsWithValidator.
   *
   * @returns A new instance of StartsWithValidator
   *
   * @example
   * const validator = StartsWithValidator.make();
   * validator.validate('Hello World', 'Hello'); // true
   */
  static make(): StartsWithValidator {
    return new StartsWithValidator()
  }

  /**
   * Validates that a string starts with a specified prefix.
   *
   * @param value - The value to validate
   * @param prefix - The prefix to check for
   * @param options - Optional configuration { ignoreCase: boolean }
   * @returns True if the string starts with the prefix, false otherwise
   *
   * @example
   * const validator = new StartsWithValidator();
   *
   * // Case-sensitive validation (default)
   * validator.validate('Hello World', 'Hello'); // true
   * validator.validate('Hello World', 'hello'); // false
   *
   * // Case-insensitive validation
   * validator.validate('Hello World', 'hello', { ignoreCase: true }); // true
   */
  validate(value: any, prefix: string, options: { ignoreCase?: boolean } = {}): boolean {
    return startsWith(value, prefix, options)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param prefix - The prefix used in validation
   * @param options - Optional configuration used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new StartsWithValidator();
   * validator.getMessage('Hello', 'World'); // '"Hello" does not start with "World"'
   * validator.getMessage('Hello', 'hello', { ignoreCase: true }); // '"Hello" does not start with "hello" (case-insensitive)'
   * validator.getMessage(123, 'Hello'); // 'Expected a string but got number'
   */
  getMessage(value: any, prefix: string, options: { ignoreCase?: boolean } = {}): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }

    const caseText = options.ignoreCase ? " (case-insensitive)" : ""
    return `"${value}" does not start with "${prefix}"${caseText}`
  }
}
