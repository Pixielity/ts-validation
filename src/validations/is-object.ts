

/**
 * Checks if a value is an object.
 *
 * This function determines whether the provided value is an object,
 * excluding null and arrays. It uses the typeof operator to check the type,
 * explicitly checks for null, and uses Array.isArray to exclude arrays.
 *
 * @param value - The value to check
 * @returns True if the value is an object (not null and not an array), false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is an object
 * if (isObject({ name: "John" })) {
 *   // Do something with the object
 * }
 *
 * isObject({}); // true
 * isObject({ name: "John" }); // true
 * isObject(null); // false
 * isObject([]); // false
 * isObject(42); // false
 */
export function isObject(value: any): value is object {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}
