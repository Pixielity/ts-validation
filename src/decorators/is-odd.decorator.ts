import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is an odd number.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Group {
 *   @IsOdd()
 *   memberCount: number;
 * }
 */
export function IsOdd(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.ODD, {
    ...options,
    message: options?.message || "Value must be an odd number",
  })
}
