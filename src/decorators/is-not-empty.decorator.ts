import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is not empty.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsNotEmpty()
 *   name: string;
 * }
 */
export function IsNotEmpty(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.NOT_EMPTY, options)
}
