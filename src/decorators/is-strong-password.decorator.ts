import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Options for strong password validation.
 */
export interface StrongPasswordOptions {
  minLength?: number
  minLowercase?: number
  minUppercase?: number
  minNumbers?: number
  minSymbols?: number
}

/**
 * Validates if the value is a strong password.
 *
 * @param options - Strong password options
 * @param validationOptions - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsStrongPassword({ minLength: 8, minUppercase: 1, minNumbers: 1 })
 *   password: string;
 * }
 */
export function IsStrongPassword(
  options?: StrongPasswordOptions,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.STRONG_PASSWORD, validationOptions, [options])
}
