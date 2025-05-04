import { isHexadecimal } from "../validations/is-hexadecimal"

describe("isHexadecimal", () => {
  it("should return true for valid hexadecimal strings", () => {
    expect(isHexadecimal("123")).toBe(true)
    expect(isHexadecimal("ABC")).toBe(true)
    expect(isHexadecimal("abc")).toBe(true)
    expect(isHexadecimal("123ABC")).toBe(true)
    expect(isHexadecimal("123abc")).toBe(true)
    expect(isHexadecimal("DEADBEEF")).toBe(true)
    expect(isHexadecimal("deadbeef")).toBe(true)
    expect(isHexadecimal("0123456789ABCDEF")).toBe(true)
  })

  it("should return false for strings with non-hexadecimal characters", () => {
    expect(isHexadecimal("123G")).toBe(false)
    expect(isHexadecimal("ABCZ")).toBe(false)
    expect(isHexadecimal("0x123")).toBe(false) // contains 'x'
    expect(isHexadecimal("123 ABC")).toBe(false) // contains space
    expect(isHexadecimal("123-ABC")).toBe(false) // contains hyphen
  })

  it("should return false for empty strings", () => {
    expect(isHexadecimal("")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isHexadecimal(123)).toBe(false)
    expect(isHexadecimal(true)).toBe(false)
    expect(isHexadecimal({})).toBe(false)
    expect(isHexadecimal([])).toBe(false)
    expect(isHexadecimal(null)).toBe(false)
    expect(isHexadecimal(undefined)).toBe(false)
  })
})
