import { isPositive } from "../validations/is-positive"

describe("isPositive", () => {
  it("should return true for positive numbers", () => {
    expect(isPositive(42)).toBe(true)
    expect(isPositive(1)).toBe(true)
    expect(isPositive(0.1)).toBe(true)
  })

  it("should return false for zero by default", () => {
    expect(isPositive(0)).toBe(false)
  })

  it("should return true for zero when allowZero is true", () => {
    expect(isPositive(0, { allowZero: true })).toBe(true)
  })

  it("should return false for negative numbers", () => {
    expect(isPositive(-42)).toBe(false)
    expect(isPositive(-0.1)).toBe(false)
  })

  it("should return false for NaN, Infinity, and -Infinity", () => {
    expect(isPositive(Number.NaN)).toBe(false)
    expect(isPositive(Number.POSITIVE_INFINITY)).toBe(true) // Infinity is positive
    expect(isPositive(Number.NEGATIVE_INFINITY)).toBe(false)
  })

  it("should return false for non-number values", () => {
    expect(isPositive("42")).toBe(false)
    expect(isPositive(true)).toBe(false)
    expect(isPositive({})).toBe(false)
    expect(isPositive([])).toBe(false)
    expect(isPositive(null)).toBe(false)
    expect(isPositive(undefined)).toBe(false)
  })
})
