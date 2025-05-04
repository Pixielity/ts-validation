import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is a valid hexadecimal color.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Theme {
 *   @IsHexColor()
 *   primaryColor: string;
 * }
 */
export function IsHexColor(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.HEX_COLOR, {
    ...options,
    message: options?.message || "Value must be a valid hexadecimal color",
  })
}
