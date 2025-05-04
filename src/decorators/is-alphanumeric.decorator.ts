import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value contains only alphanumeric characters.
 *
 * @param locale - The locale to use for validation
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsAlphanumeric()
 *   username: string;
 * }
 */
export function IsAlphanumeric(locale?: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.ALPHANUMERIC, options, locale ? [locale] : [])
}
