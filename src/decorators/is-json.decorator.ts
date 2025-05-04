import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a valid JSON string.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Config {
 *   @IsJson()
 *   jsonData: string;
 * }
 */
export function IsJson(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.JSON, options)
}
