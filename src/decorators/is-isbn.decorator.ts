import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is an ISBN.
 *
 * @param version - ISBN version (10 or 13)
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Book {
 *   @IsIsbn(13)
 *   isbn: string;
 * }
 */
export function IsIsbn(version?: "10" | "13", options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.ISBN, options, version ? [version] : [])
}
