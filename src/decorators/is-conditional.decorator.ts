import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Conditionally applies validation based on a condition function.
 *
 * @param condition - Function that determines if validation should be applied
 * @param validationFn - The validation function to apply if condition is true
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Payment {
 *   @IsString()
 *   paymentMethod: 'credit' | 'debit' | 'paypal';
 *
 *   @IsConditional(
 *     (obj) => obj.paymentMethod === 'credit' || obj.paymentMethod === 'debit',
 *     (value) => typeof value === 'string' && /^\d{16}$/.test(value),
 *     { message: 'Card number must be 16 digits' }
 *   )
 *   cardNumber: string;
 * }
 */
export function IsConditional(
  condition: (object: any) => boolean,
  validationFn: (value: any) => boolean,
  options?: ValidationOptions,
): PropertyDecorator {
  return createValidatorDecorator(
    "isConditional",
    (value: any, _: any, object: any) => {
      // If condition is not met, validation passes regardless of value
      if (!condition(object)) {
        return true
      }

      // Otherwise, apply the validation function
      return validationFn(value)
    },
    {
      ...options,
      message: options?.message || `Value failed conditional validation`,
    },
    [],
  )
}
