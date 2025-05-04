import type { ValidationOptions } from "class-validator"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Options for password validation.
 */
export interface PasswordValidationOptions {
  minLength?: number
  maxLength?: number
  requireUppercase?: boolean
  requireLowercase?: boolean
  requireNumbers?: boolean
  requireSpecialChars?: boolean
}

/**
 * Validates if a string is a valid password according to specified rules.
 *
 * @param validationOptions - Password validation options
 * @param options - Decorator validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsValidPassword({
 *     minLength: 8,
 *     requireUppercase: true,
 *     requireNumbers: true,
 *     requireSpecialChars: true
 *   })
 *   password: string;
 * }
 */
export function IsValidPassword(
  validationOptions: PasswordValidationOptions = {},
  options?: ValidationOptions,
): PropertyDecorator {
  const {
    minLength = 8,
    maxLength = 100,
    requireUppercase = false,
    requireLowercase = false,
    requireNumbers = false,
    requireSpecialChars = false,
  } = validationOptions

  return createValidatorDecorator(
    "isValidPassword",
    (value: any, pwdOptions: PasswordValidationOptions) => {
      if (typeof value !== "string") return false

      if (value.length < pwdOptions.minLength! || value.length > pwdOptions.maxLength!) {
        return false
      }

      if (pwdOptions.requireUppercase && !/[A-Z]/.test(value)) {
        return false
      }

      if (pwdOptions.requireLowercase && !/[a-z]/.test(value)) {
        return false
      }

      if (pwdOptions.requireNumbers && !/[0-9]/.test(value)) {
        return false
      }

      if (pwdOptions.requireSpecialChars && !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)) {
        return false
      }

      return true
    },
    {
      ...options,
      message: options?.message || createPasswordValidationMessage(validationOptions),
    },
    [validationOptions],
  )
}

/**
 * Creates a descriptive validation message based on the password requirements.
 */
function createPasswordValidationMessage(options: PasswordValidationOptions): string {
  const requirements: string[] = []

  if (options.minLength) {
    requirements.push(`at least ${options.minLength} characters`)
  }

  if (options.maxLength) {
    requirements.push(`at most ${options.maxLength} characters`)
  }

  if (options.requireUppercase) {
    requirements.push("at least one uppercase letter")
  }

  if (options.requireLowercase) {
    requirements.push("at least one lowercase letter")
  }

  if (options.requireNumbers) {
    requirements.push("at least one number")
  }

  if (options.requireSpecialChars) {
    requirements.push("at least one special character")
  }

  return `Password must contain ${requirements.join(", ")}`
}
