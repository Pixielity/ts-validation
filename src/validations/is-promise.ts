

/**
 * Checks if a value is a promise.
 *
 * This function determines whether the provided value is a Promise object or
 * a thenable (an object with a then method). It first checks if the value is
 * an instance of Promise, and if not, checks if it's an object with a then method.
 *
 * @param value - The value to check
 * @returns True if the value is a promise, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a promise
 * if (isPromise(fetch('https://example.com'))) {
 *   // Value is a promise
 * }
 *
 * isPromise(Promise.resolve()); // true
 * isPromise(new Promise(() => {})); // true
 * isPromise({ then: function() {} }); // true (thenable)
 * isPromise({}); // false (not a promise or thenable)
 * isPromise(null); // false
 */
export function isPromise(value: any): value is Promise<any> {
  return value instanceof Promise || (value && typeof value.then === "function")
}
