import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is an integer.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @IsInt()
 *   quantity: number;
 * }
 */
export function IsInt(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.INTEGER, options)
}
