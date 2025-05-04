import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a boolean.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsBoolean()
 *   isActive: boolean;
 * }
 */
export function IsBoolean(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.BOOLEAN, options)
}
