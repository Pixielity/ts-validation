import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if a value is equal to another property's value.
 *
 * @param property - The property to compare with
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsString()
 *   password: string;
 *
 *   @IsEqualTo('password', { message: 'Passwords do not match' })
 *   passwordConfirmation: string;
 * }
 */
export function IsEqualTo(property: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "isEqualTo",
    (value: any, relatedPropertyName: string, object: any) => {
      const relatedValue = (object as any)[relatedPropertyName]
      return value === relatedValue
    },
    {
      ...options,
      message: options?.message || `Value must be equal to ${property}`,
    },
    [property],
  )
}
