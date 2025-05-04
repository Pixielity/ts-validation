import { isString } from "./is-string"

/**
 * Checks if a string is a valid MAC address.
 *
 * This function determines whether the provided value is a string and represents
 * a valid MAC (Media Access Control) address. A MAC address consists of six groups
 * of two hexadecimal digits, separated by a specified character (default is colon).
 *
 * @param value - The value to check
 * @param options - Optional configuration { separator: string }
 * @returns True if the string is a valid MAC address, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is a valid MAC address
 * if (isMACAddress("00:11:22:33:44:55")) {
 *   // String is a valid MAC address
 * }
 *
 * isMACAddress("00:11:22:33:44:55"); // true (with default separator ":")
 * isMACAddress("00-11-22-33-44-55", { separator: "-" }); // true (with custom separator "-")
 * isMACAddress("0011.2233.4455", { separator: "." }); // true (with custom separator ".")
 * isMACAddress("001122334455"); // false (missing separators)
 * isMACAddress("00:11:22:33:44"); // false (too few groups)
 * isMACAddress("00:11:22:33:44:55:66"); // false (too many groups)
 * isMACAddress("GG:11:22:33:44:55"); // false (invalid hex digits)
 * isMACAddress(""); // false (empty string)
 * isMACAddress(123); // false (not a string)
 */
export function isMACAddress(value: any, options: { separator?: string } = {}): boolean {
  if (!isString(value)) {
    return false
  }

  // Get the separator (default is ":")
  const separator = options.separator || ":"

  // Escape special characters in the separator for use in regex
  const escapedSeparator = separator.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")

  // Create the pattern for a MAC address with the specified separator
  // Format: Six groups of two hexadecimal digits, separated by the specified character
  const pattern = new RegExp(`^([0-9A-Fa-f]{2}${escapedSeparator}){5}([0-9A-Fa-f]{2})$`)

  return pattern.test(value)
}
