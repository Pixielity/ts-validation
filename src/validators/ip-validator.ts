import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isIP } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string is a valid IP address.
 *
 * An IP address is a numerical label assigned to each device connected to a computer network
 * that uses the Internet Protocol for communication. IP addresses come in two versions:
 * IPv4 (e.g., 192.168.1.1) and IPv6 (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
 *
 * @example
 * const validator = new IPValidator();
 *
 * // Valid IP addresses
 * validator.validate('192.168.1.1'); // true (IPv4)
 * validator.validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // true (IPv6)
 * validator.validate('::1'); // true (IPv6 localhost)
 *
 * // With specific version
 * validator.validate('192.168.1.1', 4); // true
 * validator.validate('2001:0db8:85a3::8a2e:0370:7334', 6); // true
 *
 * // Invalid IP addresses
 * validator.validate('256.0.0.1'); // false (IPv4 segments must be 0-255)
 * validator.validate('192.168.1'); // false (IPv4 must have 4 segments)
 * validator.validate('2001:xyz:85a3::8a2e:0370:7334'); // false (invalid IPv6 format)
 * validator.validate('192.168.1.1', 6); // false (IPv4 being validated as IPv6)
 */
export class IPValidator extends BaseValidator {
  /**
   * Creates a new IPValidator instance.
   *
   * @example
   * const validator = new IPValidator();
   */
  constructor() {
    super(ValidatorType.IP)
  }

  /**
   * Creates a new instance of IPValidator.
   *
   * @returns A new instance of IPValidator
   *
   * @example
   * const validator = IPValidator.make();
   * validator.validate('192.168.1.1'); // true
   */
  static make(): IPValidator {
    return new IPValidator()
  }

  /**
   * Validates that a string is a valid IP address.
   *
   * @param value - The value to validate
   * @param version - Optional IP version (4 or 6)
   * @returns True if the string is a valid IP address, false otherwise
   *
   * @example
   * const validator = new IPValidator();
   *
   * // Check any IP version
   * validator.validate('192.168.1.1'); // true
   * validator.validate('2001:0db8:85a3::8a2e:0370:7334'); // true
   *
   * // Check specific IP version
   * validator.validate('192.168.1.1', 4); // true
   * validator.validate('2001:0db8:85a3::8a2e:0370:7334', 6); // true
   */
  validate(value: any, version?: 4 | 6): boolean {
    return isIP(value, version)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param version - Optional IP version used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new IPValidator();
   * validator.getMessage('256.0.0.1'); // '"256.0.0.1" is not a valid IP address'
   * validator.getMessage('192.168.1.1', 6); // '"192.168.1.1" is not a valid IP address (IPv6)'
   * validator.getMessage(123); // 'Expected a string but got number'
   */
  getMessage(value: any, version?: 4 | 6): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }

    const versionText = version ? ` (IPv${version})` : ""
    return `"${value}" is not a valid IP address${versionText}`
  }
}
