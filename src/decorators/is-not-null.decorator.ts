{
  ValidatorType
}
from
;("../enums/validator-type.enum")
import { createValidatorDecorator } from "./decorator-factory"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is not null.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsNotNull()
 *   name: string;
 * }
 */
export function IsNotNull(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.NOT_NULL, {
    ...options,
    message: options?.message || "Value should not be null",
  })
}
