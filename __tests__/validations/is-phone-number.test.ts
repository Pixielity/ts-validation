import { isPhoneNumber } from "../validations/is-phone-number"

describe("isPhoneNumber", () => {
  it("should return true for valid international phone numbers", () => {
    expect(isPhoneNumber("+1234567890")).toBe(true)
    expect(isPhoneNumber("+12345678901")).toBe(true)
    expect(isPhoneNumber("+441234567890")).toBe(true)
  })

  it("should return true for valid US phone numbers with country code", () => {
    expect(isPhoneNumber("+1 (555) 123-4567", "US")).toBe(true)
    expect(isPhoneNumber("+1 555-123-4567", "US")).toBe(true)
    expect(isPhoneNumber("+1 555.123.4567", "US")).toBe(true)
    expect(isPhoneNumber("+15551234567", "US")).toBe(true)
  })

  it("should return true for valid US phone numbers without country code", () => {
    expect(isPhoneNumber("(555) 123-4567", "US")).toBe(true)
    expect(isPhoneNumber("555-123-4567", "US")).toBe(true)
    expect(isPhoneNumber("555.123.4567", "US")).toBe(true)
    expect(isPhoneNumber("5551234567", "US")).toBe(true)
  })

  it("should return true for valid UK phone numbers", () => {
    expect(isPhoneNumber("+44 7911 123456", "UK")).toBe(true)
    expect(isPhoneNumber("07911 123456", "UK")).toBe(true)
    expect(isPhoneNumber("07911123456", "UK")).toBe(true)
    expect(isPhoneNumber("+447911123456", "UK")).toBe(true)
  })

  it("should return true for valid phone numbers from other countries", () => {
    expect(isPhoneNumber("+33 1 23 45 67 89", "FR")).toBe(true) // France
    expect(isPhoneNumber("01.23.45.67.89", "FR")).toBe(true) // France
    expect(isPhoneNumber("+49 30 12345678", "DE")).toBe(true) // Germany
    expect(isPhoneNumber("030 12345678", "DE")).toBe(true) // Germany
  })

  it("should return false for invalid phone numbers", () => {
    expect(isPhoneNumber("123")).toBe(false) // Too short
    expect(isPhoneNumber("abcdefghij")).toBe(false) // Contains letters
    expect(isPhoneNumber("555-123-45678", "US")).toBe(false) // Invalid format
    expect(isPhoneNumber("(555 123-4567", "US")).toBe(false) // Unbalanced parentheses
  })

  it("should return false for empty strings", () => {
    expect(isPhoneNumber("")).toBe(false)
    expect(isPhoneNumber("", "US")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isPhoneNumber(1234567890)).toBe(false)
    expect(isPhoneNumber(true)).toBe(false)
    expect(isPhoneNumber({})).toBe(false)
    expect(isPhoneNumber([])).toBe(false)
    expect(isPhoneNumber(null)).toBe(false)
    expect(isPhoneNumber(undefined)).toBe(false)
  })
})
