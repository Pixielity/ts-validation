import { isString } from "./is-string"

/**
 * Checks if a string is a valid UUID.
 *
 * This function determines whether the provided value is a string and matches
 * the format of a UUID (Universally Unique Identifier). It supports checking
 * for specific UUID versions (1, 3, 4, 5) or any valid UUID format.
 *
 * UUID format: xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
 * Where:
 * - M is the UUID version (1, 3, 4, or 5)
 * - N is a variant (8, 9, A, or B)
 *
 * @param value - The value to check
 * @param version - Optional UUID version (1, 3, 4, 5)
 * @returns True if the string is a valid UUID, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is a valid UUID
 * if (isUUID("550e8400-e29b-41d4-a716-446655440000")) {
 *   // String is a valid UUID
 * }
 *
 * isUUID("550e8400-e29b-41d4-a716-446655440000"); // true
 * isUUID("550e8400-e29b-41d4-a716-446655440000", 4); // true (UUID v4)
 * isUUID("550e8400-e29b-11d4-a716-446655440000", 1); // true (UUID v1)
 * isUUID("550e8400-e29b-31d4-a716-446655440000", 3); // true (UUID v3)
 * isUUID("550e8400-e29b-51d4-a716-446655440000", 5); // true (UUID v5)
 * isUUID("550e8400-e29b-41d4-a716-446655440000", 1); // false (UUID v4, not v1)
 * isUUID("not-a-uuid"); // false
 * isUUID(""); // false (empty string)
 * isUUID(123); // false (not a string)
 */
export function isUUID(value: any, version?: number): boolean {
  if (!isString(value)) {
    return false
  }

  // Define regex patterns for different UUID versions
  const patterns = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  }

  // Select the appropriate pattern based on the version
  const pattern = version ? patterns[version as keyof typeof patterns] : patterns.all

  // If the version is not supported, return false
  if (!pattern) {
    return false
  }

  // Test the string against the pattern
  return pattern.test(value)
}
