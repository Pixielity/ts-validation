import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is zero.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Balance {
 *   @IsZero()
 *   initialValue: number;
 * }
 */
export function IsZero(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.Zero, {
    ...options,
    message: options?.message || "Value must be zero",
  })
}
