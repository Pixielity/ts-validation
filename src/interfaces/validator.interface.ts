/**
 * @file Validator interface definition
 * @description Defines the core interface that all validators must implement
 *
import type { Result } from "../result"
import type { ValidatorType } from "../enums/validator-type.enum"

/**
 * @interface IValidator
 * @description Interface that all validators must implement
 * @template T The type of value being validated
 */
export interface IValidator<T = any> {
  /**
   * Validates the provided value
   * @param {T} value - The value to validate
   * @returns {Result<T>} A Result object containing validation status and details
   */
  validate(value: T): Result<T>

  /**
   * Gets the type of validator
   * @returns {ValidatorType} The validator type enum value
   */
  getType(): ValidatorType

  /**
   * Gets the name of the validator
   * @returns {string} The validator name
   */
  getName(): string
}
