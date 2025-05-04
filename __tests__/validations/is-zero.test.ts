import { isZero } from "../validations/is-zero"

describe("isZero", () => {
  it("should return true for zero", () => {
    expect(isZero(0)).toBe(true)
    expect(isZero(0.0)).toBe(true)
    expect(isZero(-0)).toBe(true)
  })

  it("should return false for non-zero numbers", () => {
    expect(isZero(42)).toBe(false)
    expect(isZero(-42)).toBe(false)
    expect(isZero(0.1)).toBe(false)
    expect(isZero(-0.1)).toBe(false)
  })

  it("should return false for NaN, Infinity, and -Infinity", () => {
    expect(isZero(Number.NaN)).toBe(false)
    expect(isZero(Number.POSITIVE_INFINITY)).toBe(false)
    expect(isZero(Number.NEGATIVE_INFINITY)).toBe(false)
  })

  it("should return false for non-number values", () => {
    expect(isZero("0")).toBe(false)
    expect(isZero(true)).toBe(false)
    expect(isZero(false)).toBe(false)
    expect(isZero({})).toBe(false)
    expect(isZero([])).toBe(false)
    expect(isZero(null)).toBe(false)
    expect(isZero(undefined)).toBe(false)
  })
})
