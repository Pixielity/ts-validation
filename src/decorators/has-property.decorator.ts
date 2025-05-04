import { createValidatorDecorator } from "./decorator-factory"
import { ValidatorType } from "../enums"
import type { ValidationOptions } from "./validation-options"

/**
 * Validates if the object has a specific property.
 *
 * @param propertyName - The name of the property to check for
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Config {
 *   @HasProperty('version')
 *   settings: Record<string, any>;
 * }
 */
export function HasProperty(propertyName: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    ValidatorType.HasProperty,
    { ...options, message: options?.message || `Object must have property "${propertyName}"` },
    [propertyName],
  )
}
