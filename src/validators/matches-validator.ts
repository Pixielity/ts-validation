import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { matches } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string matches a regular expression.
 *
 * This validator checks if a string matches a given regular expression pattern.
 * It's useful for validating strings against custom formats or patterns.
 *
 * @example
 * const validator = new MatchesValidator();
 *
 * // Valid matches
 * validator.validate('abc123', /^[a-z0-9]+$/); // true
 * validator.validate('2023-05-15', /^\d{4}-\d{2}-\d{2}$/); // true
 *
 * // Invalid matches
 * validator.validate('abc123!', /^[a-z0-9]+$/); // false (contains special character)
 * validator.validate('05/15/2023', /^\d{4}-\d{2}-\d{2}$/); // false (wrong date format)
 * validator.validate(123, /^\d+$/); // false (not a string)
 */
export class MatchesValidator extends BaseValidator {
  /**
   * Creates a new MatchesValidator instance.
   *
   * @example
   * const validator = new MatchesValidator();
   */
  constructor() {
    super(ValidatorType.Matches)
  }

  /**
   * Creates a new instance of MatchesValidator.
   *
   * @returns A new instance of MatchesValidator
   *
   * @example
   * const validator = MatchesValidator.make();
   * validator.validate('abc123', /^[a-z0-9]+$/); // true
   */
  static make(): MatchesValidator {
    return new MatchesValidator()
  }

  /**
   * Validates that a string matches a regular expression.
   *
   * @param value - The value to validate
   * @param pattern - Regular expression pattern
   * @returns True if the string matches the pattern, false otherwise
   *
   * @example
   * const validator = new MatchesValidator();
   * validator.validate('abc123', /^[a-z0-9]+$/); // true
   * validator.validate('abc123!', /^[a-z0-9]+$/); // false
   */
  validate(value: any, pattern: RegExp): boolean {
    return matches(value, pattern)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param pattern - Regular expression pattern used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new MatchesValidator();
   * validator.getMessage('abc123!', /^[a-z0-9]+$/); // '"abc123!" does not match pattern /^[a-z0-9]+$/'
   * validator.getMessage(123, /^\d+$/); // 'Expected a string but got number'
   */
  getMessage(value: any, pattern: RegExp): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }
    return `"${value}" does not match pattern ${pattern}`
  }
}
