import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is lowercase.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsLowercase()
 *   username: string;
 * }
 */
export function IsLowercase(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.LOWERCASE, options)
}
