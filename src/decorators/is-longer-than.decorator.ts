import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if a string is longer than another property's string value.
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
 *   @IsLongerThan('password', { message: 'Confirmation must be longer than password' })
 *   passwordConfirmation: string;
 * }
 */
export function IsLongerThan(property: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "isLongerThan",
    (value: any, relatedPropertyName: string, object: any) => {
      const relatedValue = (object as any)[relatedPropertyName]
      return typeof value === "string" && typeof relatedValue === "string" && value.length > relatedValue.length
    },
    {
      ...options,
      message: options?.message || `Value must be longer than ${property}`,
    },
    [property],
  )
}
