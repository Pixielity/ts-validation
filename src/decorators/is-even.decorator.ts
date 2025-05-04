import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is an even number.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @IsEven()
 *   quantity: number;
 * }
 */
export function IsEven(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.EVEN, {
    ...options,
    message: options?.message || "Value must be an even number",
  })
}
