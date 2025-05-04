import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isMACAddress } from "../validations"

/**
 * Validates that a string is a valid MAC address.
 *
 * A MAC (Media Access Control) address is a unique identifier assigned to a network interface controller (NIC).
 * MAC addresses are used as a network address for most IEEE 802 network technologies, including Ethernet and Wi-Fi.
 *
 * @example
 * const validator = new MACAddressValidator();
 *
 * // Valid MAC addresses
 * validator.validate('00:1A:2B:3C:4D:5E'); // true (with colons)
 * validator.validate('00-1A-2B-3C-4D-5E'); // true (with hyphens)
 * validator.validate('001A2B3C4D5E'); // true (without separators)
 *
 * // With specific separator
 * validator.validate('00:1A:2B:3C:4D:5E', { separator: ':' }); // true
 * validator.validate('00-1A-2B-3C-4D-5E', { separator: '-' }); // true
 *
 * // Invalid MAC addresses
 * validator.validate('00:1A:2B:3C:4D'); // false (too short)
 * validator.validate('00:1A:2B:3C:4D:5E:6F'); // false (too long)
 * validator.validate('00:1A:2B:3C:4D:ZZ'); // false (invalid characters)
 * validator.validate('00:1A:2B:3C:4D:5E', { separator: '-' }); // false (wrong separator)
 */
export class MACAddressValidator extends BaseValidator {
  /**
   * Creates a new MACAddressValidator instance.
   *
   * @example
   * const validator = new MACAddressValidator();
   */
  constructor() {
    super(ValidatorType.MAC_ADDRESS)
  }

  /**
   * Creates a new instance of MACAddressValidator.
   *
   * @returns A new instance of MACAddressValidator
   *
   * @example
   * const validator = MACAddressValidator.make();
   * validator.validate('00:1A:2B:3C:4D:5E'); // true
   */
  static make(): MACAddressValidator {
    return new MACAddressValidator()
  }

  /**
   * Validates that a string is a valid MAC address.
   *
   * @param value - The value to validate
   * @param options - Optional configuration { separator: string }
   * @returns True if the string is a valid MAC address, false otherwise
   *
   * @example
   * const validator = new MACAddressValidator();
   *
   * // Default validation (accepts any standard format)
   * validator.validate('00:1A:2B:3C:4D:5E'); // true
   * validator.validate('00-1A-2B-3C-4D-5E'); // true
   *
   * // With specific separator
   * validator.validate('00:1A:2B:3C:4D:5E', { separator: ':' }); // true
   * validator.validate('00-1A-2B-3C-4D-5E', { separator: '-' }); // true
   * validator.validate('00:1A:2B:3C:4D:5E', { separator: '-' }); // false (wrong separator)
   */
  validate(value: any, options: { separator?: string } = {}): boolean {
    return isMACAddress(value, options)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param options - Optional configuration used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new MACAddressValidator();
   * validator.getMessage('00:1A:2B:3C:4D'); // '"00:1A:2B:3C:4D" is not a valid MAC address'
   * validator.getMessage('00:1A:2B:3C:4D:5E', { separator: '-' }); // '"00:1A:2B:3C:4D:5E" is not a valid MAC address with separator "-"'
   * validator.getMessage(123); // 'Expected a string but got number'
   */
  getMessage(value: any, options: { separator?: string } = {}): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${typeof value}`
    }

    const separatorText = options.separator ? ` with separator '${options.separator}'` : ""
    return `"${value}" is not a valid MAC address${separatorText}`
  }
}
