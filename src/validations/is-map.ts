

/**
 * Checks if a value is a Map.
 *
 * This function determines whether the provided value is a Map object.
 * It uses the instanceof operator to check if the value is an instance of Map.
 *
 * @param value - The value to check
 * @returns True if the value is a Map, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a Map
 * if (isMap(new Map())) {
 *   // Value is a Map
 * }
 *
 * isMap(new Map()); // true
 * isMap(new Map([['key', 'value']])); // true
 * isMap({}); // false (object, not Map)
 * isMap(new Set()); // false (Set, not Map)
 */
export function isMap(value: any): value is Map<any, any> {
  return value instanceof Map
}
