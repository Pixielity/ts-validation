import { isLength } from "../validations/is-length"

describe("isLength", () => {
  it("should return true for strings with length within range", () => {
    expect(isLength("hello", { min: 5, max: 10 })).toBe(true)
    expect(isLength("hello", { min: 1 })).toBe(true) // No max
    expect(isLength("hello", { max: 10 })).toBe(true) // No min (defaults to 0)
    expect(isLength("hello", { min: 5, max: 5 })).toBe(true) // Exact length
  })

  it("should return false for strings with length outside range", () => {
    expect(isLength("hello", { min: 6, max: 10 })).toBe(false) // Too short
    expect(isLength("hello world", { min: 1, max: 10 })).toBe(false) // Too long
    expect(isLength("", { min: 1 })).toBe(false) // Empty string with min > 0
  })

  it("should return true for empty strings when min is 0 or not specified", () => {
    expect(isLength("", { min: 0 })).toBe(true)
    expect(isLength("", { max: 10 })).toBe(true)
    expect(isLength("", { min: 0, max: 10 })).toBe(true)
  })

  it("should return false for non-string values", () => {
    expect(isLength(123, { min: 3 })).toBe(false)
    expect(isLength(true, { min: 1 })).toBe(false)
    expect(isLength({}, { min: 1 })).toBe(false)
    expect(isLength([], { min: 0 })).toBe(false)
    expect(isLength(null, { min: 0 })).toBe(false)
    expect(isLength(undefined, { min: 0 })).toBe(false)
  })
})
