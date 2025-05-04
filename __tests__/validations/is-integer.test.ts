import { isInteger } from "../validations/is-integer"

describe("isInteger", () => {
  it("should return true for integer values", () => {
    expect(isInteger(42)).toBe(true)
    expect(isInteger(0)).toBe(true)
    expect(isInteger(-42)).toBe(true)
    expect(isInteger(Number.MAX_SAFE_INTEGER)).toBe(true)
    expect(isInteger(Number.MIN_SAFE_INTEGER)).toBe(true)
  })

  it("should return false for floating-point numbers", () => {
    expect(isInteger(3.14)).toBe(false)
    expect(isInteger(0.1)).toBe(false)
    expect(isInteger(-2.5)).toBe(false)
  })

  it("should return false for NaN, Infinity, and -Infinity", () => {
    expect(isInteger(Number.NaN)).toBe(false)
    expect(isInteger(Number.POSITIVE_INFINITY)).toBe(false)
    expect(isInteger(Number.NEGATIVE_INFINITY)).toBe(false)
  })

  it("should return false for non-number values", () => {
    expect(isInteger("42")).toBe(false)
    expect(isInteger(true)).toBe(false)
    expect(isInteger({})).toBe(false)
    expect(isInteger([])).toBe(false)
    expect(isInteger(null)).toBe(false)
    expect(isInteger(undefined)).toBe(false)
  })
})
