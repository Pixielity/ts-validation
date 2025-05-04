import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if a value is unique within an array property.
 *
 * @param property - The array property to check for uniqueness
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsUniqueInArray('existingUsernames', { message: 'Username already taken' })
 *   username: string;
 *
 *   @IsArray()
 *   existingUsernames: string[];
 * }
 */
export function IsUniqueInArray(property: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "isUniqueInArray",
    (value: any, arrayPropertyName: string, object: any) => {
      const array = (object as any)[arrayPropertyName]

      if (!Array.isArray(array)) {
        return false
      }

      return !array.includes(value)
    },
    {
      ...options,
      message: options?.message || `Value must not exist in ${property}`,
    },
    [property],
  )
}
