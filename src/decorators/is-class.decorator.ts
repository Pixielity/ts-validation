import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a class.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Registry {
 *   @IsClass()
 *   entityClass: any;
 * }
 */
export function IsClass(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.CLASS, options)
}
