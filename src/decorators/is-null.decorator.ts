import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is null.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsNull()
 *   deletedAt: null;
 * }
 */
export function IsNull(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.NULL, options)
}
