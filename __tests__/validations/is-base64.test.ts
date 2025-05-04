import { isBase64 } from "../validations/is-base64"

describe("isBase64", () => {
  it("should return true for valid base64 strings", () => {
    expect(isBase64("SGVsbG8gV29ybGQ=")).toBe(true) // "Hello World"
    expect(isBase64("YWJjMTIz")).toBe(true) // "abc123"
    expect(isBase64("")).toBe(false) // Empty string is not valid base64
    expect(isBase64("YQ==")).toBe(true) // "a"
    expect(isBase64("YWI=")).toBe(true) // "ab"
    expect(isBase64("YWJj")).toBe(true) // "abc"
  })

  it("should return false for invalid base64 strings", () => {
    expect(isBase64("SGVsbG8gV29ybGQ")).toBe(false) // Missing padding
    expect(isBase64("SGVsbG8gV29ybGQ==")).toBe(false) // Incorrect padding
    expect(isBase64("Hello World")).toBe(false) // Not encoded
    expect(isBase64("SGVsbG8_V29ybGQ=")).toBe(false) // Contains invalid character '_'
    expect(isBase64("SGVsbG8!V29ybGQ=")).toBe(false) // Contains invalid character '!'
  })

  it("should return false for non-string values", () => {
    expect(isBase64(123)).toBe(false)
    expect(isBase64(true)).toBe(false)
    expect(isBase64({})).toBe(false)
    expect(isBase64([])).toBe(false)
    expect(isBase64(null)).toBe(false)
    expect(isBase64(undefined)).toBe(false)
  })
})
