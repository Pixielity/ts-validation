import { isPostalCode } from "../validations/is-postal-code"

describe("isPostalCode", () => {
  it("should return true for valid US postal codes", () => {
    expect(isPostalCode("90210", "US")).toBe(true)
    expect(isPostalCode("12345", "US")).toBe(true)
    expect(isPostalCode("12345-6789", "US")).toBe(true) // ZIP+4 format
  })

  it("should return true for valid UK postal codes", () => {
    expect(isPostalCode("SW1A 1AA", "UK")).toBe(true)
    expect(isPostalCode("M1 1AA", "UK")).toBe(true)
    expect(isPostalCode("B33 8TH", "UK")).toBe(true)
    expect(isPostalCode("CR2 6XH", "UK")).toBe(true)
    expect(isPostalCode("DN55 1PT", "UK")).toBe(true)
  })

  it("should return true for valid Canadian postal codes", () => {
    expect(isPostalCode("K1A 0B1", "CA")).toBe(true)
    expect(isPostalCode("V6B 4Y8", "CA")).toBe(true)
    expect(isPostalCode("M5V 2N4", "CA")).toBe(true)
  })

  it("should return true for valid postal codes from other countries", () => {
    expect(isPostalCode("75001", "FR")).toBe(true) // France
    expect(isPostalCode("10115", "DE")).toBe(true) // Germany
    expect(isPostalCode("00144", "IT")).toBe(true) // Italy
    expect(isPostalCode("2000", "AU")).toBe(true) // Australia
    expect(isPostalCode("1000 AA", "NL")).toBe(true) // Netherlands
  })

  it("should return false for invalid US postal codes", () => {
    expect(isPostalCode("1234", "US")).toBe(false) // Too short
    expect(isPostalCode("123456", "US")).toBe(false) // Too long
    expect(isPostalCode("ABCDE", "US")).toBe(false) // Contains letters
    expect(isPostalCode("12345-", "US")).toBe(false) // Incomplete ZIP+4
  })

  it("should return false for invalid UK postal codes", () => {
    expect(isPostalCode("SW1A", "UK")).toBe(false) // Too short
    expect(isPostalCode("SWIA 1AA", "UK")).toBe(false) // Invalid format
    expect(isPostalCode("SW1A 1A", "UK")).toBe(false) // Too short second part
  })

  it("should throw an error for unsupported country codes", () => {
    expect(() => isPostalCode("12345", "XX")).toThrow()
  })

  it("should return false for empty strings", () => {
    expect(isPostalCode("", "US")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isPostalCode(12345, "US")).toBe(false)
    expect(isPostalCode(true, "US")).toBe(false)
    expect(isPostalCode({}, "US")).toBe(false)
    expect(isPostalCode([], "US")).toBe(false)
    expect(isPostalCode(null, "US")).toBe(false)
    expect(isPostalCode(undefined, "US")).toBe(false)
  })
})
