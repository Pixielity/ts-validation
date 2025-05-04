import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value's length is within a range.
 *
 * @param min - Minimum length
 * @param max - Maximum length
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @Length(3, 20)
 *   username: string;
 * }
 */
export function Length(min: number, max: number, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.Length, options, [min, max])
}
