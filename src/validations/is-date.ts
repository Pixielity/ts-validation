

/**
 * Checks if a value is a valid Date object.
 *
 * This function determines whether the provided value is a Date object
 * and represents a valid date (not an invalid date like 'new Date("invalid")').
 * It checks if the value is an instance of Date and if its time value is not NaN.
 *
 * @param value - The value to check
 * @returns True if the value is a valid Date object, false otherwise
 * @category Type Checks
 *
 * @example
 * // Check if a value is a valid Date
 * if (isDate(new Date())) {
 *   // Do something with the date
 * }
 *
 * isDate(new Date()); // true
 * isDate(new Date("2023-01-01")); // true
 * isDate(new Date("invalid")); // false (invalid date)
 * isDate("2023-01-01"); // false (string, not Date object)
 */
export function isDate(value: any): value is Date {
  return value instanceof Date && !isNaN(value.getTime())
}
