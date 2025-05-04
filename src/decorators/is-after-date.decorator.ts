import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if a date is after another date property.
 *
 * @param property - The date property to compare with
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Event {
 *   @IsDate()
 *   startDate: Date;
 *
 *   @IsAfterDate('startDate', { message: 'End date must be after start date' })
 *   endDate: Date;
 * }
 */
export function IsAfterDate(property: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "isAfterDate",
    (value: any, relatedPropertyName: string, object: any) => {
      const relatedValue = (object as any)[relatedPropertyName]

      if (!(value instanceof Date) || !(relatedValue instanceof Date)) {
        return false
      }

      return value.getTime() > relatedValue.getTime()
    },
    {
      ...options,
      message: options?.message || `Date must be after ${property}`,
    },
    [property],
  )
}
