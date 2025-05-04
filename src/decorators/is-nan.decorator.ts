import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is NaN.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Calculation {
 *   @IsNaN()
 *   invalidResult: number;
 * }
 */
export function IsNaN(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.NAN, {
    ...options,
    message: options?.message || "Value must be NaN",
  })
}
