import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is an instance of a specific class.
 *
 * @param classConstructor - The class constructor to check against
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {}
 *
 * class UserRepository {
 *   @IsInstanceOf(User)
 *   currentUser: User;
 * }
 */
export function IsInstanceOf(classConstructor: Function, options?: ValidationOptions): PropertyDecorator {
  const className = classConstructor.name || "specified class"
  return createValidatorDecorator(
    ValidatorType.INSTANCE_OF,
    { ...options, message: options?.message || `Value must be an instance of ${className}` },
    [classConstructor],
  )
}
