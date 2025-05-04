import { isString } from "./is-string"

/**
 * Checks if a string is a valid ISBN (International Standard Book Number).
 *
 * This function determines whether the provided value is a string and represents
 * a valid ISBN. It supports both ISBN-10 and ISBN-13 formats, and can be restricted
 * to check for a specific version. The function handles ISBNs with or without hyphens.
 *
 * @param value - The value to check
 * @param version - Optional ISBN version (10 or 13)
 * @returns True if the string is a valid ISBN, false otherwise
 * @category String Validations
 *
 * @example
 * // Check if a string is a valid ISBN
 * if (isISBN("9780306406157")) {
 *   // String is a valid ISBN
 * }
 *
 * isISBN("9780306406157"); // true (ISBN-13)
 * isISBN("0306406152"); // true (ISBN-10)
 * isISBN("978-0-306-40615-7"); // true (ISBN-13 with hyphens)
 * isISBN("0-306-40615-2"); // true (ISBN-10 with hyphens)
 * isISBN("0306406152", 10); // true (ISBN-10)
 * isISBN("9780306406157", 13); // true (ISBN-13)
 * isISBN("0306406152", 13); // false (ISBN-10 when ISBN-13 is required)
 * isISBN("9780306406157", 10); // false (ISBN-13 when ISBN-10 is required)
 * isISBN("0306406153"); // false (invalid check digit)
 * isISBN("not-an-isbn"); // false
 * isISBN(""); // false (empty string)
 * isISBN(123); // false (not a string)
 */
export function isISBN(value: any, version?: 10 | 13): boolean {
  if (!isString(value)) {
    return false
  }

  // Remove hyphens
  const sanitized = value.replace(/-/g, "")

  // ISBN-10 validation
  const isISBN10 = (isbn: string): boolean => {
    // Check format: 9 digits followed by a digit or 'X'
    if (!/^[0-9]{9}[0-9X]$/.test(isbn)) {
      return false
    }

    // Calculate checksum
    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += Number.parseInt(isbn[i], 10) * (10 - i)
    }

    // Check digit can be 'X' (representing 10)
    const last = isbn[9]
    const checkDigit = last === "X" ? 10 : Number.parseInt(last, 10)

    sum += checkDigit

    // Valid ISBN-10 if sum is divisible by 11
    return sum % 11 === 0
  }

  // ISBN-13 validation
  const isISBN13 = (isbn: string): boolean => {
    // Check format: 13 digits
    if (!/^[0-9]{13}$/.test(isbn)) {
      return false
    }

    // Calculate checksum using ISBN-13 algorithm
    // Alternate weights of 1 and 3 for each digit
    let sum = 0
    for (let i = 0; i < 12; i++) {
      sum += Number.parseInt(isbn[i], 10) * (i % 2 === 0 ? 1 : 3)
    }

    // Calculate check digit: (10 - (sum mod 10)) mod 10
    const checkDigit = (10 - (sum % 10)) % 10

    // Valid ISBN-13 if calculated check digit matches the last digit
    return Number.parseInt(isbn[12], 10) === checkDigit
  }

  // Check specific version if provided
  if (version === 10) {
    return isISBN10(sanitized)
  }

  if (version === 13) {
    return isISBN13(sanitized)
  }

  // If no version specified, check both
  return isISBN10(sanitized) || isISBN13(sanitized)
}
