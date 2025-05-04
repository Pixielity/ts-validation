import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is a date in the past.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Person {
 *   @IsPastDate()
 *   birthDate: Date;
 * }
 */
export function IsPastDate(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.PAST_DATE, {
    ...options,
    message: options?.message || "Value must be a date in the past",
  })
}
