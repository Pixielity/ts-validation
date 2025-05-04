import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value ends with a substring.
 *
 * @param suffix - The suffix to check for
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class File {
 *   @EndsWith('.pdf')
 *   filename: string;
 * }
 */
export function EndsWith(suffix: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.EndsWith, options, [suffix])
}
