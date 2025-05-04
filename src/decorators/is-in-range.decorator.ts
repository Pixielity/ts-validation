import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the number is within the specified range (inclusive).
 *
 * @param min - The minimum value
 * @param max - The maximum value
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @IsInRange(0, 1000)
 *   price: number;
 * }
 */
export function IsInRange(min: number, max: number, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.IN_RANGE, options, [min, max])
}
