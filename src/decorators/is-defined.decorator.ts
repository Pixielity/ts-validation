{
  ValidatorType
}
from
;("../enums/validator-type.enum")
import { createValidatorDecorator } from "./decorator-factory"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is defined (not undefined).
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsDefined()
 *   name: string;
 * }
 */
export function IsDefined(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.NOT_UNDEFINED, {
    ...options,
    message: options?.message || "Value should not be undefined",
  })
}
