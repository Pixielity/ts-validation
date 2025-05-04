import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if a value is not equal to another property's value.
 *
 * @param property - The property to compare with
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsString()
 *   username: string;
 *
 *   @IsNotEqualTo('username', { message: 'Password cannot be the same as username' })
 *   password: string;
 * }
 */
export function IsNotEqualTo(property: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "isNotEqualTo",
    (value: any, relatedPropertyName: string, object: any) => {
      const relatedValue = (object as any)[relatedPropertyName]
      return value !== relatedValue
    },
    {
      ...options,
      message: options?.message || `Value must not be equal to ${property}`,
    },
    [property],
  )
}
