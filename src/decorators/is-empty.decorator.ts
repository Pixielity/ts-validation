import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is empty.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsEmpty()
 *   temporaryData: string;
 * }
 */
export function IsEmpty(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.EMPTY, options)
}
