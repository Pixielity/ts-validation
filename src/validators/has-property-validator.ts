import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { hasProperty } from "../validations"

/**
 * Validates that an object has a specific property.
 */
export class HasPropertyValidator extends BaseValidator {
  /**
   * Creates a new HasPropertyValidator.
   */
  constructor() {
    super(ValidatorType.HasProperty)
  }

  /**
   * Creates a new instance of HasPropertyValidator.
   *
   * @returns A new instance of HasPropertyValidator
   */
  static make(): HasPropertyValidator {
    return new HasPropertyValidator()
  }

  /**
   * Validates that an object has a specific property.
   *
   * @param value - The value to validate
   * @param property - The property to check for
   * @returns True if the object has the property, false otherwise
   */
  validate(value: any, property: string): boolean {
    return hasProperty(value, property)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param property - The property used in validation
   * @returns Error message string
   */
  getMessage(value: any, property: string): string {
    if (typeof value !== "object" || value === null) {
      return `Expected an object but got ${value === null ? "null" : typeof value}`
    }

    return `Object does not have property "${property}"`
  }
}
