import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is a date in the future.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Event {
 *   @IsFutureDate()
 *   scheduledDate: Date;
 * }
 */
export function IsFutureDate(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.FUTURE_DATE, {
    ...options,
    message: options?.message || "Value must be a date in the future",
  })
}
