import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is an object.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsObject()
 *   metadata: Record<string, any>;
 * }
 */
export function IsObject(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.OBJECT, options)
}
