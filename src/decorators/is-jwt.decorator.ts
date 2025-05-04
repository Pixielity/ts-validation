import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is a valid JWT token.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Auth {
 *   @IsJWT()
 *   token: string;
 * }
 */
export function IsJWT(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.JWT, {
    ...options,
    message: options?.message || "Value must be a valid JWT token",
  })
}
