import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a postal code.
 *
 * @param locale - The locale to use for validation
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Address {
 *   @IsPostalCode('US')
 *   zipCode: string;
 * }
 */
export function IsPostalCode(locale: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.POSTAL_CODE, options, [locale])
}
