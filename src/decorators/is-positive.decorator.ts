import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is a positive number.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @IsPositive()
 *   price: number;
 * }
 */
export function IsPositive(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.POSITIVE, {
    ...options,
    message: options?.message || "Value must be a positive number",
  })
}
