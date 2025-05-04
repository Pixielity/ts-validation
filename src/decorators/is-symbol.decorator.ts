import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a symbol.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Config {
 *   @IsSymbol()
 *   key: symbol;
 * }
 */
export function IsSymbol(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.Symbol, options)
}
