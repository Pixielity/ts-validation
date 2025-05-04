import { isString } from "./is-string"

/**
 * Checks if a string is a strong password.
 *
 * This function determines whether the provided value is a string and meets
 * the criteria for a strong password. By default, a strong password must:
 * - Be at least 8 characters long
 * - Contain at least 1 lowercase letter
 * - Contain at least 1 uppercase letter
 * - Contain at least 1 number
 * - Contain at least 1 symbol (non-alphanumeric character)
 *
 * These requirements can be customized using the options parameter.
 *
 * @param value - The value to check
 * @param options - Optional configuration
 * @returns True if the string is a strong password, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is a strong password
 * if (isStrongPassword("P@ssw0rd123")) {
 *   // String is a strong password
 * }
 *
 * isStrongPassword("P@ssw0rd123"); // true
 * isStrongPassword("password"); // false (no uppercase, numbers, or symbols)
 * isStrongPassword("PASSWORD"); // false (no lowercase or numbers)
 * isStrongPassword("Password"); // false (no numbers or symbols)
 * isStrongPassword("P@ssword"); // false (no numbers)
 * isStrongPassword("Passw0rd"); // false (no symbols)
 * isStrongPassword("P@ss"); // false (too short)
 *
 * // With custom options
 * isStrongPassword("Pass123", {
 *   minLength: 6,
 *   minLowercase: 1,
 *   minUppercase: 1,
 *   minNumbers: 1,
 *   minSymbols: 0
 * }); // true (matches custom requirements)
 */
export function isStrongPassword(
  value: any,
  options: {
    minLength?: number
    minLowercase?: number
    minUppercase?: number
    minNumbers?: number
    minSymbols?: number
  } = {},
): boolean {
  if (!isString(value)) {
    return false
  }

  // Set default requirements if not provided
  const { minLength = 8, minLowercase = 1, minUppercase = 1, minNumbers = 1, minSymbols = 1 } = options

  // Check minimum length
  if (value.length < minLength) {
    return false
  }

  // Count character types
  const lowercaseCount = (value.match(/[a-z]/g) || []).length
  const uppercaseCount = (value.match(/[A-Z]/g) || []).length
  const numberCount = (value.match(/[0-9]/g) || []).length
  const symbolCount = (value.match(/[^a-zA-Z0-9]/g) || []).length

  // Check if all requirements are met
  return (
    lowercaseCount >= minLowercase &&
    uppercaseCount >= minUppercase &&
    numberCount >= minNumbers &&
    symbolCount >= minSymbols
  )
}
