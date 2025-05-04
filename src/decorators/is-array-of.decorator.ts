import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"
import type { BaseValidator } from "../validators/base-validator"

/**
 * Validates if the value is an array containing elements of a specific type.
 *
 * @param validator - The validator to apply to each element
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Course {
 *   @IsArrayOf(new StringValidator())
 *   tags: string[];
 * }
 */
export function IsArrayOf(validator: BaseValidator, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    ValidatorType.ARRAY_OF,
    { ...options, message: options?.message || "Array must contain elements of the specified type" },
    [validator],
  )
}
