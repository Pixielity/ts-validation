import { isFloat } from "../validations/is-float"

describe("isFloat", () => {
  it("should return true for floating-point numbers", () => {
    expect(isFloat(3.14)).toBe(true)
    expect(isFloat(0.1)).toBe(true)
    expect(isFloat(-2.5)).toBe(true)
    expect(isFloat(1.0000000000001)).toBe(true)
  })

  it("should return false for integer values", () => {
    expect(isFloat(42)).toBe(false)
    expect(isFloat(0)).toBe(false)
    expect(isFloat(-42)).toBe(false)
    expect(isFloat(1.0)).toBe(false) // This is equivalent to integer 1
  })

  it("should return false for NaN, Infinity, and -Infinity", () => {
    expect(isFloat(Number.NaN)).toBe(false)
    expect(isFloat(Number.POSITIVE_INFINITY)).toBe(false)
    expect(isFloat(Number.NEGATIVE_INFINITY)).toBe(false)
  })

  it("should return false for non-number values", () => {
    expect(isFloat("3.14")).toBe(false)
    expect(isFloat(true)).toBe(false)
    expect(isFloat({})).toBe(false)
    expect(isFloat([])).toBe(false)
    expect(isFloat(null)).toBe(false)
    expect(isFloat(undefined)).toBe(false)
  })
})
