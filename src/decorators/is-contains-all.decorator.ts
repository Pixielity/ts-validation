import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if a string contains all specified substrings.
 *
 * @param substrings - Array of substrings that should be contained in the value
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class SecurityPolicy {
 *   @IsContainsAll(['uppercase', 'number', 'special'], {
 *     message: 'Password must contain uppercase letters, numbers, and special characters'
 *   })
 *   passwordRequirements: string;
 * }
 */
export function IsContainsAll(substrings: string[], options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(
    "isContainsAll",
    (value: any, requiredSubstrings: string[]) => {
      if (typeof value !== "string") return false
      return requiredSubstrings.every((substring) => value.includes(substring))
    },
    {
      ...options,
      message: options?.message || `Value must contain all of: ${substrings.join(", ")}`,
    },
    [substrings],
  )
}
