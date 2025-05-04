import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a number.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @IsNumber()
 *   price: number;
 * }
 */
export function IsNumber(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.NUMBER, options)
}
