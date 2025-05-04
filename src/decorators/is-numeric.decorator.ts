import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value contains only numeric characters.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @IsNumeric()
 *   code: string;
 * }
 */
export function IsNumeric(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.NUMERIC, options)
}
