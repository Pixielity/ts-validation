import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isInstanceOf } from "../validations"

/**
 * Validates that a value is an instance of a specific class.
 */
export class InstanceOfValidator extends BaseValidator {
  /**
   * Creates a new InstanceOfValidator.
   */
  constructor() {
    super(ValidatorType.INSTANCE_OF)
  }

  /**
   * Creates a new instance of InstanceOfValidator.
   *
   * @returns A new instance of InstanceOfValidator
   */
  static make(): InstanceOfValidator {
    return new InstanceOfValidator()
  }

  /**
   * Validates that a value is an instance of a specific class.
   *
   * @param value - The value to validate
   * @param classConstructor - The class constructor to check against
   * @returns True if the value is an instance of the class, false otherwise
   */
  validate(value: any, classConstructor: new (...args: any[]) => any): boolean {
    return isInstanceOf(value, classConstructor)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @param classConstructor - The class constructor used in validation
   * @returns Error message string
   */
  getMessage(value: any, classConstructor: new (...args: any[]) => any): string {
    const className = classConstructor.name || "specified class"
    return `Value is not an instance of ${className}`
  }
}
