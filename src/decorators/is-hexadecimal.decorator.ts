import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a hexadecimal number.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Color {
 *   @IsHexadecimal()
 *   hex: string;
 * }
 */
export function IsHexadecimal(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.HEXADECIMAL, options)
}
