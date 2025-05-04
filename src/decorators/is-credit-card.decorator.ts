import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is a valid credit card number.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Payment {
 *   @IsCreditCard()
 *   cardNumber: string;
 * }
 */
export function IsCreditCard(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.CREDIT_CARD, {
    ...options,
    message: options?.message || "Value must be a valid credit card number",
  })
}
