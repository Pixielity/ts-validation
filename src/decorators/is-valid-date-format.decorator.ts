import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if a string is a valid date format.
 *
 * @param format - The expected date format (e.g., 'YYYY-MM-DD')
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Event {
 *   @IsValidDateFormat('YYYY-MM-DD', { message: 'Date must be in YYYY-MM-DD format' })
 *   eventDate: string;
 * }
 */
export function IsValidDateFormat(format: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "isValidDateFormat",
    (value: any, dateFormat: string) => {
      if (typeof value !== "string") return false

      // Simple implementation - can be expanded for more complex formats
      if (dateFormat === "YYYY-MM-DD") {
        return /^\d{4}-\d{2}-\d{2}$/.test(value) && !isNaN(Date.parse(value))
      }

      if (dateFormat === "MM/DD/YYYY") {
        return /^\d{2}\/\d{2}\/\d{4}$/.test(value) && !isNaN(Date.parse(value))
      }

      // Default case - just check if it's a valid date
      return !isNaN(Date.parse(value))
    },
    {
      ...options,
      message: options?.message || `Value must be a valid date in ${format} format`,
    },
    [format],
  )
}
