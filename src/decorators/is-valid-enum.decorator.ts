import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if a value is a valid enum value.
 *
 * @param enumType - The enum type to validate against
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * enum UserRole {
 *   ADMIN = 'admin',
 *   USER = 'user',
 *   GUEST = 'guest'
 * }
 *
 * class User {
 *   @IsValidEnum(UserRole, { message: 'Invalid user role' })
 *   role: UserRole;
 * }
 */
export function IsValidEnum(enumType: object, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "isValidEnum",
    (value: any, enumObj: object) => {
      const enumValues = Object.values(enumObj)
      return enumValues.includes(value)
    },
    {
      ...options,
      message: options?.message || `Value must be a valid enum value`,
    },
    [enumType],
  )
}
