import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is uppercase.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @IsUppercase()
 *   code: string;
 * }
 */
export function IsUppercase(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.Uppercase, options)
}
