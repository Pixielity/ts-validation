import {ValidatorType} from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the value is a URL.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Website {
 *   @IsUrl()
 *   homepage: string;
 * }
 */
export function IsUrl(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.URL, {
    ...options,
    message: options?.message || "Value must be a valid URL",
  })
}
