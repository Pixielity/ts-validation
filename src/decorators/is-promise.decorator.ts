import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a promise.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Task {
 *   @IsPromise()
 *   result: Promise<any>;
 * }
 */
export function IsPromise(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.PROMISE, options)
}
