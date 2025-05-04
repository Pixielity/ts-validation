
import type { IBaseValidator } from "../interfaces/validation.interface"

/**
 * Abstract base class for all validators.
 *
 * The BaseValidator provides a common foundation for all validator implementations,
 * ensuring they follow a consistent pattern and interface. It defines the core
 * functionality that all validators must implement.
 *
 * @abstract
 * @implements {IBaseValidator}
 * @example
 * // Extending BaseValidator to create a custom validator
 * class CustomValidator extends BaseValidator {
 *   constructor() {
 *     super("custom")
 *   }
 *
 *   validate(value: any): boolean {
 *     // Custom validation logic
 *     return true
 *   }
 *
 *   getMessage(value: any): string {
 *     return "Custom validation failed"
 *   }
 * }
 */
export abstract class BaseValidator implements IBaseValidator {
  /**
   * The name of the validator.
   *
   * This property stores the unique identifier for the validator type,
   * which is used for error messages and identification purposes.
   *
   * @private
   * @readonly
   * @type {string}
   */
  private readonly _name: string

  /**
   * Creates a new BaseValidator instance.
   *
   * @param {string} name - The name of the validator
   * @throws {Error} If name is empty or not a string
   */
  constructor(name: string) {
    if (!name || typeof name !== "string") {
      throw new Error("Validator name must be a non-empty string")
    }
    this._name = name
  }

  /**
   * Gets the name of the validator.
   *
   * @returns {string} The validator name
   */
  name(): string {
    return this._name
  }

  /**
   * Validates a value according to the validator's rules.
   *
   * This method must be implemented by all concrete validator classes.
   *
   * @abstract
   * @param {any} value - The value to validate
   * @param {...any[]} args - Additional arguments required for validation
   * @returns {boolean} True if validation passes, false otherwise
   */
  abstract validate(value: any, ...args: any[]): boolean

  /**
   * Gets an error message for a failed validation.
   *
   * This method must be implemented by all concrete validator classes.
   *
   * @abstract
   * @param {any} value - The value that failed validation
   * @param {...any[]} args - Additional arguments used in validation
   * @returns {string} Error message describing why validation failed
   */
  abstract getMessage(value: any, ...args: any[]): string
}
