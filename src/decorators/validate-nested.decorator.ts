import {
  createValidatorDecorator
}
from ("./decorator-factory")
import type { ValidationOptions } from "./validation-options"

/**
 * Validates nested objects.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Address {
 *   @IsString()
 *   street: string;
 * }
 *
 * class User {
 *   @IsString()
 *   name: string;
 *
 *   @ValidateNested()
 *   address: Address;
 * }
 */
export function ValidateNested(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator("validateNested", { ...options, validateNested: true })
}
