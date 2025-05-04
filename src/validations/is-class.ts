

/**
 * Checks if a value is a class.
 *
 * This function determines whether the provided value is a class constructor.
 * It checks if the value is a function and if its string representation starts
 * with the 'class' keyword.
 *
 * @param value - The value to check
 * @returns True if the value is a class, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a class
 * class MyClass {}
 * if (isClass(MyClass)) {
 *   // Value is a class
 * }
 *
 * isClass(class {}); // true
 * isClass(MyClass); // true
 * isClass(function() {}); // false (regular function)
 * isClass(() => {}); // false (arrow function)
 * isClass({}); // false (object, not class)
 */
export function isClass(value: any): boolean {
  return typeof value === "function" && /^\s*class\s+/.test(value.toString())
}
