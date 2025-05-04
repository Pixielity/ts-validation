import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the number is less than or equal to the specified maximum value.
 *
 * @param max - The maximum value
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @Max(1000)
 *   price: number;
 * }
 */
export function Max(max: number, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "max",
    (value: any, maxValue: number) => {
      return typeof value === "number" && value <= maxValue
    },
    {
      ...options,
      message: options?.message || `Value must be less than or equal to ${max}`,
    },
    [max],
  )
}
