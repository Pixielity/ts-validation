import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a string.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsString()
 *   name: string;
 * }
 */
export function IsString(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.String, options)
}
