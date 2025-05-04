import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a base64 encoded string.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class File {
 *   @IsBase64()
 *   content: string;
 * }
 */
export function IsBase64(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.BASE64, options)
}
