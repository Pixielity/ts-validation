import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is an Error.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class ErrorLog {
 *   @IsError()
 *   error: Error;
 * }
 */
export function IsError(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.ERROR, options)
}
