import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isUUID } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string is a valid UUID (Universally Unique Identifier).
 *
 * A UUID is a 128-bit identifier that is guaranteed to be unique across space and time.
 * UUIDs are typically used to generate unique identifiers for resources or entities.
 *
 * @example
 * const validator = new UUIDValidator();
 *
 * // Valid UUIDs
 * validator.validate('550e8400-e29b-41d4-a716-446655440000'); // true (version 4)
 * validator.validate('6ba7b810-9dad-11d1-80b4-00c04fd430c8'); // true (version 1)
 *
 * // With specific version
 * validator.validate('550e8400-e29b-41d4-a716-446655440000', 4); // true
 * validator.validate('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 1); // true
 *
 * // Invalid UUIDs
 * validator.validate('not-a-uuid'); // false
 * validator.validate('550e8400-e29b-41d4-a716-44665544000'); // false (too short)
 * validator.validate('550e8400-e29b-41d4-a716-446655440000', 1); // false (version mismatch)
 */
export class UUIDValidator extends BaseValidator {
  /**
   * Creates a new UUIDValidator instance.
   *
   * @example
   * const validator = new UUIDValidator();
   */
  constructor() {
    super(ValidatorType.UUID)
  }

  /**
   * Creates a new instance of UUIDValidator.
   *
   * @returns A new instance of UUIDValidator
   *
   * @example
   * const validator = UUIDValidator.make();
   * validator.validate('550e8400-e29b-41d4-a716-446655440000'); // true
   */
  static make(): UUIDValidator {
    return new UUIDValidator()
  }

  /**
   * Validates that a string is a valid UUID.
   *
   * @param value - The value to validate
   * @param version - Optional UUID version (1, 3, 4, 5)
   * @returns True if the string is a valid UUID, false otherwise
   *
   * @example
   * const validator = new UUIDValidator();
   *
   * // Check any UUID version
   * validator.validate('550e8400-e29b-41d4-a716-446655440000'); // true
   *
   * // Check specific UUID version
   * validator.validate('550e8400-e29b-41d4-a716-446655440000', 4); // true
   * validator.validate('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 1); // true
   */
  validate(value: any, version?: number): boolean {
    return isUUID(value, version)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param version - Optional UUID version used in validation
   * @returns Error message string
   *
   * @example
   * const validator = new UUIDValidator();
   * validator.getMessage('not-a-uuid'); // '"not-a-uuid" is not a valid UUID'
   * validator.getMessage('550e8400-e29b-41d4-a716-446655440000', 1); // '"550e8400-e29b-41d4-a716-446655440000" is not a valid UUID (version 1)'
   * validator.getMessage(123); // 'Expected a string but got number'
   */
  getMessage(value: any, version?: number): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }

    const versionText = version ? ` (version ${version})` : ""
    return `"${value}" is not a valid UUID${versionText}`
  }
}
