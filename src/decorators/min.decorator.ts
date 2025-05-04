import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the number is greater than or equal to the specified minimum value.
 *
 * @param min - The minimum value
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @Min(0)
 *   price: number;
 * }
 */
export function Min(min: number, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "min",
    (value: any, minValue: number) => {
      return typeof value === "number" && value >= minValue
    },
    {
      ...options,
      message: options?.message || `Value must be greater than or equal to ${min}`,
    },
    [min],
  )
}
