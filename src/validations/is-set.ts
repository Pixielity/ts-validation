

/**
 * Checks if a value is a Set.
 *
 * This function determines whether the provided value is a Set object.
 * It uses the instanceof operator to check if the value is an instance of Set.
 *
 * @param value - The value to check
 * @returns True if the value is a Set, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a Set
 * if (isSet(new Set())) {
 *   // Value is a Set
 * }
 *
 * isSet(new Set()); // true
 * isSet(new Set([1, 2, 3])); // true
 * isSet({}); // false (object, not Set)
 * isSet(new Map()); // false (Map, not Set)
 * isSet([]); // false (array, not Set)
 */
export function isSet(value: any): value is Set<any> {
  return value instanceof Set
}
