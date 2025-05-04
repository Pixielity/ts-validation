import { isString } from "./is-string"

/**
 * Checks if a string is a valid IP address.
 *
 * This function determines whether the provided value is a string and represents
 * a valid IP address. It supports both IPv4 and IPv6 formats, and can be restricted
 * to check for a specific version.
 *
 * @param value - The value to check
 * @param version - Optional IP version (4 or 6)
 * @returns True if the string is a valid IP address, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is a valid IP address
 * if (isIP("192.168.1.1")) {
 *   // String is a valid IP address
 * }
 *
 * isIP("192.168.1.1"); // true (IPv4)
 * isIP("192.168.1.1", 4); // true (IPv4)
 * isIP("2001:0db8:85a3:0000:0000:8a2e:0370:7334"); // true (IPv6)
 * isIP("2001:0db8:85a3:0000:0000:8a2e:0370:7334", 6); // true (IPv6)
 * isIP("2001:db8:85a3::8a2e:370:7334", 6); // true (IPv6 shortened)
 * isIP("::1", 6); // true (IPv6 localhost)
 * isIP("192.168.1.1", 6); // false (IPv4 when IPv6 is required)
 * isIP("2001:db8::8a2e:370:7334", 4); // false (IPv6 when IPv4 is required)
 * isIP("256.0.0.1"); // false (invalid IPv4)
 * isIP("not-an-ip"); // false
 * isIP(""); // false (empty string)
 * isIP(123); // false (not a string)
 */
export function isIP(value: any, version?: 4 | 6): boolean {
  if (!isString(value)) {
    return false
  }

  // IPv4 pattern
  const ipv4Pattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/

  // IPv6 pattern (simplified)
  const ipv6Pattern =
    /^([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}$|^([0-9A-Fa-f]{1,4}:){1,7}:|^([0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}$|^([0-9A-Fa-f]{1,4}:){1,5}(:[0-9A-Fa-f]{1,4}){1,2}$|^([0-9A-Fa-f]{1,4}:){1,4}(:[0-9A-Fa-f]{1,4}){1,3}$|^([0-9A-Fa-f]{1,4}:){1,3}(:[0-9A-Fa-f]{1,4}){1,4}$|^([0-9A-Fa-f]{1,4}:){1,2}(:[0-9A-Fa-f]{1,4}){1,5}$|^[0-9A-Fa-f]{1,4}:((:[0-9A-Fa-f]{1,4}){1,6})$|^:((:[0-9A-Fa-f]{1,4}){1,7}|:)$/

  // Check for IPv4
  if (version === 4) {
    if (!ipv4Pattern.test(value)) {
      return false
    }

    // Validate each octet (must be between 0 and 255)
    const octets = value.split(".")
    return octets.every((octet) => Number.parseInt(octet, 10) <= 255)
  }

  // Check for IPv6
  if (version === 6) {
    return ipv6Pattern.test(value)
  }

  // If no version specified, check both
  return isIP(value, 4) || isIP(value, 6)
}
