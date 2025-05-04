import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a Map.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Cache {
 *   @IsMap()
 *   data: Map<string, any>;
 * }
 */
export function IsMap(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.MAP, options)
}
