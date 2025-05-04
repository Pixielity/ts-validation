import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is an email.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsEmail()
 *   email: string;
 * }
 */
export function IsEmail(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.EMAIL, options)
}
