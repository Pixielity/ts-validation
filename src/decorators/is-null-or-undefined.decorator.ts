import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is null or undefined.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsNullOrUndefined()
 *   optionalField: null | undefined;
 * }
 */
export function IsNullOrUndefined(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.NULL_OR_UNDEFINED, options)
}
