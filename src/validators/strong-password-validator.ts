import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isStrongPassword } from "../validations"

/**
 * Validates that a string is a strong password.
 *
 * A strong password typically includes a mix of uppercase and lowercase letters,
 * numbers, and symbols, with a minimum length requirement. This validator allows
 * customizing the requirements for what constitutes a strong password.
 *
 * @example
 * const validator = new StrongPasswordValidator();
 *
 * // Default validation (min length 8, min 1 lowercase, min 1 uppercase, min 1 number, min 1 symbol)
 * validator.validate('Password123!'); // true
 * validator.validate('weakpassword'); // false (no uppercase, numbers, or symbols)
 * validator.validate('SHORT1!'); // false (too short)
 *
 * // Custom validation
 * validator.validate('password123', {
 *   minLength: 6,
 *   minLowercase: 1,
 *   minUppercase: 0,
 *   minNumbers: 1,
 *   minSymbols: 0
 * }); // true (meets custom requirements)
 */
export class StrongPasswordValidator extends BaseValidator {
  /**
   * Creates a new StrongPasswordValidator instance.
   *
   * @example
   * const validator = new StrongPasswordValidator();
   */
  constructor() {
    super(ValidatorType.STRONG_PASSWORD)
  }

  /**
   * Creates a new instance of StrongPasswordValidator.
   *
   * @returns A new instance of StrongPasswordValidator
   *
   * @example
   * const validator = StrongPasswordValidator.make();
   * validator.validate('Password123!'); // true
   */
  static make(): StrongPasswordValidator {
    return new StrongPasswordValidator()
  }

  /**
   * Validates that a string is a strong password.
   *
   * @param value - The value to validate
   * @param options - Optional configuration for password requirements
   * @param options.minLength - Minimum password length (default: 8)
   * @param options.minLowercase - Minimum lowercase letters (default: 1)
   * @param options.minUppercase - Minimum uppercase letters (default: 1)
   * @param options.minNumbers - Minimum numbers (default: 1)
   * @param options.minSymbols - Minimum symbols (default: 1)
   * @returns True if the string is a strong password, false otherwise
   *
   * @example
   * const validator = new StrongPasswordValidator();
   *
   * // Default validation
   * validator.validate('Password123!'); // true
   *
   * // Custom validation
   * validator.validate('password123', {
   *   minLength: 6,
   *   minLowercase: 1,
   *   minUppercase: 0,
   *   minNumbers: 1,
   *   minSymbols: 0
   * }); // true
   */
  validate(
    value: any,
    options: {
      minLength?: number
      minLowercase?: number
      minUppercase?: number
      minNumbers?: number
      minSymbols?: number
    } = {},
  ): boolean {
    return isStrongPassword(value, options)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param options - Optional configuration used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new StrongPasswordValidator();
   * validator.getMessage('weak'); // '"weak" is not a strong password (requires: min length 8, min lowercase 1, min uppercase 1, min numbers 1, min symbols 1)'
   * validator.getMessage(123); // 'Expected a string but got number'
   */
  getMessage(
    value: any,
    options: {
      minLength?: number
      minLowercase?: number
      minUppercase?: number
      minNumbers?: number
      minSymbols?: number
    } = {},
  ): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${typeof value}`
    }

    const { minLength = 8, minLowercase = 1, minUppercase = 1, minNumbers = 1, minSymbols = 1 } = options

    return `"${value}" is not a strong password (requires: min length ${minLength}, min lowercase ${minLowercase}, min uppercase ${minUppercase}, min numbers ${minNumbers}, min symbols ${minSymbols})`
  }
}
