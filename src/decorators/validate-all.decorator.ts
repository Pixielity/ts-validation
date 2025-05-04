{
  createClassDecorator
}
from
;("./decorator-factory")
import type { ValidationOptions } from "./validation-options"

/**
 * Validates all properties of a class.
 *
 * @param options - Validation options
 * @returns Class decorator
 *
 * @example
 * @ValidateAll()
 * class User {
 *   @IsString()
 *   name: string;
 *
 *   @IsEmail()
 *   email: string;
 * }
 */
export function ValidateAll(options?: ValidationOptions): ClassDecorator {
  return createClassDecorator({ ...options, validateAll: true })
}
