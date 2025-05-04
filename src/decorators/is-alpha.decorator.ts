import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value contains only alphabetic characters.
 *
 * @param locale - The locale to use for validation
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsAlpha()
 *   name: string;
 * }
 */
export function IsAlpha(locale?: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.ALPHA, options, locale ? [locale] : [])
}
