{
  ValidatorType
}
from
;("../enums/validator-type.enum")
import { createValidatorDecorator } from "./decorator-factory"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is a date.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsDate()
 *   birthDate: Date;
 * }
 */
export function IsDate(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.DATE, {
    ...options,
    message: options?.message || "Value must be a date",
  })
}
