import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is undefined.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsUndefined()
 *   temporaryField: undefined;
 * }
 */
export function IsUndefined(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.Undefined, options)
}
