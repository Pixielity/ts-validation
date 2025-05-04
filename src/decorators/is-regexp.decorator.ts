import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a regular expression.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Pattern {
 *   @IsRegexp()
 *   pattern: RegExp;
 * }
 */
export function IsRegexp(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.REGEXP, options)
}
