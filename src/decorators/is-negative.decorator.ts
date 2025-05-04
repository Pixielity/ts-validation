import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is a negative number.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Account {
 *   @IsNegative()
 *   debt: number;
 * }
 */
export function IsNegative(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.NEGATIVE, {
    ...options,
    message: options?.message || "Value must be a negative number",
  })
}
