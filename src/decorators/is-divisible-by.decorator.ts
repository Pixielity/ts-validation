import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is divisible by another number.
 *
 * @param divisor - The divisor to check against
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Package {
 *   @IsDivisibleBy(6)
 *   itemCount: number;
 * }
 */
export function IsDivisibleBy(divisor: number, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    ValidatorType.DIVISIBLE_BY,
    { ...options, message: options?.message || `Value must be divisible by ${divisor}` },
    [divisor],
  )
}
