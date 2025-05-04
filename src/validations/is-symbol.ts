

/**
 * Checks if a value is a symbol.
 *
 * This function determines whether the provided value is of type symbol.
 * It uses the typeof operator to check the type.
 *
 * @param value - The value to check
 * @returns True if the value is a symbol, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a symbol
 * if (isSymbol(Symbol('example'))) {
 *   // Value is a symbol
 * }
 *
 * isSymbol(Symbol('example')); // true
 * isSymbol(Symbol.iterator); // true
 * isSymbol('symbol'); // false (string, not symbol)
 * isSymbol({}); // false (object, not symbol)
 */
export function isSymbol(value: any): value is symbol {
  return typeof value === "symbol"
}
