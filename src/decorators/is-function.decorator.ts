import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a function.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Handler {
 *   @IsFunction()
 *   callback: Function;
 * }
 */
export function IsFunction(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.FUNCTION, options)
}
