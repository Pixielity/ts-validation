import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isBase64 } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string is base64 encoded.
 *
 * Base64 is a group of binary-to-text encoding schemes that represent binary data
 * in an ASCII string format by translating it into a radix-64 representation.
 *
 * @example
 * const validator = new Base64Validator();
 *
 * // Valid base64 strings
 * validator.validate('SGVsbG8gV29ybGQ='); // true - "Hello World" in base64
 * validator.validate('YWJjMTIzIT8kKiYoKSctPUB+'); // true
 *
 * // Invalid base64 strings
 * validator.validate('SGVsbG8gV29ybGQ'); // false - missing padding
 * validator.validate('SGVsbG8_V29ybGQ='); // false - invalid character
 * validator.validate(123); // false - not a string
 */
export class Base64Validator extends BaseValidator {
  /**
   * Creates a new Base64Validator instance.
   *
   * @example
   * const validator = new Base64Validator();
   */
  constructor() {
    super(ValidatorType.BASE64)
  }

  /**
   * Creates a new instance of Base64Validator.
   *
   * @returns A new instance of Base64Validator
   *
   * @example
   * const validator = Base64Validator.make();
   * validator.validate('SGVsbG8gV29ybGQ='); // true
   */
  static make(): Base64Validator {
    return new Base64Validator()
  }

  /**
   * Validates that a string is base64 encoded.
   *
   * @param value - The value to validate
   * @returns True if the string is base64 encoded, false otherwise
   *
   * @example
   * const validator = new Base64Validator();
   * validator.validate('SGVsbG8gV29ybGQ='); // true - "Hello World" in base64
   * validator.validate('invalid-base64!'); // false
   */
  validate(value: any): boolean {
    return isBase64(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   *
   * @example
   * const validator = new Base64Validator();
   * validator.getMessage('invalid-base64!'); // '"invalid-base64!" is not a valid base64 encoded string'
   * validator.getMessage(123); // 'Expected a string but got number'
   */
  getMessage(value: any): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }
    return `"${value}" is not a valid base64 encoded string`
  }
}
