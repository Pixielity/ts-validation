import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a phone number.
 *
 * @param region - The region code (e.g., 'US', 'GB')
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Contact {
 *   @IsPhoneNumber('US')
 *   phoneNumber: string;
 * }
 */
export function IsPhoneNumber(region: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.PHONE_NUMBER, options, [region])
}
