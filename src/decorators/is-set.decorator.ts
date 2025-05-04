import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a Set.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class UniqueCollection {
 *   @IsSet()
 *   items: Set<any>;
 * }
 */
export function IsSet(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.SET, options)
}
