

/**
 * Checks if a value is a function.
 *
 * This function determines whether the provided value is a function.
 * It uses the typeof operator to check the type.
 *
 * @param value - The value to check
 * @returns True if the value is a function, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a function
 * if (isFunction(() => console.log("Hello"))) {
 *   // Do something with the function
 * }
 *
 * isFunction(() => {}); // true
 * isFunction(function() {}); // true
 * isFunction(class {}); // true (classes are functions in JavaScript)
 * isFunction({}); // false
 */
export function isFunction(value: any): value is Function {
  return typeof value === "function"
}
