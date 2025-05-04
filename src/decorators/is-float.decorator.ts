import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a float.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @IsFloat()
 *   price: number;
 * }
 */
export function IsFloat(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.FLOAT, options)
}
