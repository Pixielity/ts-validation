import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if a value matches a specific pattern.
 *
 * @param pattern - The regular expression pattern
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @MatchesPattern(/^[A-Z][a-z]+$/, { message: 'Name must start with uppercase letter' })
 *   name: string;
 * }
 */
export function MatchesPattern(pattern: RegExp, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "matchesPattern",
    (value: any, regex: RegExp) => {
      return typeof value === "string" && regex.test(value)
    },
    {
      ...options,
      message: options?.message || `Value must match pattern ${pattern}`,
    },
    [pattern],
  )
}
