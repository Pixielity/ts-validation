import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value matches a regular expression.
 *
 * @param pattern - Regular expression pattern
 * @param flags - Regular expression flags
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @Matches(/^[a-z0-9_-]{3,16}$/)
 *   username: string;
 * }
 */
export function Matches(pattern: RegExp | string, flags?: string, options?: ValidationOptions): PropertyDecorator {
  const regexp = typeof pattern === "string" ? new RegExp(pattern, flags) : pattern
  return createValidatorDecorator(ValidatorType.Matches, options, [regexp])
}
