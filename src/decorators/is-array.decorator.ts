import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is an array.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsArray()
 *   roles: string[];
 * }
 */
export function IsArray(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.ARRAY, options)
}
