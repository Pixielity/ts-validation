import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if a date is before another date property.
 *
 * @param property - The date property to compare with
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Event {
 *   @IsBeforeDate('endDate', { message: 'Start date must be before end date' })
 *   startDate: Date;
 *
 *   @IsDate()
 *   endDate: Date;
 * }
 */
export function IsBeforeDate(property: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "isBeforeDate",
    (value: any, relatedPropertyName: string, object: any) => {
      const relatedValue = (object as any)[relatedPropertyName]

      if (!(value instanceof Date) || !(relatedValue instanceof Date)) {
        return false
      }

      return value.getTime() < relatedValue.getTime()
    },
    {
      ...options,
      message: options?.message || `Date must be before ${property}`,
    },
    [property],
  )
}
