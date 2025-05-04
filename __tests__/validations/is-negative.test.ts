import { isNegative } from "../validations/is-negative"

describe("isNegative", () => {
  it("should return true for negative numbers", () => {
    expect(isNegative(-42)).toBe(true)
    expect(isNegative(-1)).toBe(true)
    expect(isNegative(-0.1)).toBe(true)
  })

  it("should return false for zero by default", () => {
    expect(isNegative(0)).toBe(false)
  })

  it("should return true for zero when allowZero is true", () => {
    expect(isNegative(0, { allowZero: true })).toBe(true)
  })

  it("should return false for positive numbers", () => {
    expect(isNegative(42)).toBe(false)
    expect(isNegative(0.1)).toBe(false)
  })

  it("should return false for NaN, Infinity, and -Infinity", () => {
    expect(isNegative(Number.NaN)).toBe(false)
    expect(isNegative(Number.POSITIVE_INFINITY)).toBe(false)
    expect(isNegative(Number.NEGATIVE_INFINITY)).toBe(true) // -Infinity is negative
  })

  it("should return false for non-number values", () => {
    expect(isNegative("-42")).toBe(false)
    expect(isNegative(true)).toBe(false)
    expect(isNegative({})).toBe(false)
    expect(isNegative([])).toBe(false)
    expect(isNegative(null)).toBe(false)
    expect(isNegative(undefined)).toBe(false)
  })
})
