import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value contains a substring.
 *
 * @param seed - The substring to search for
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Email {
 *   @Contains('@')
 *   email: string;
 * }
 */
export function Contains(seed: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.Contains, options, [seed])
}
