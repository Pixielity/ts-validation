import { isNaN } from "../validations/is-nan"

describe("isNaN", () => {
  it("should return true for NaN", () => {
    expect(isNaN(Number.NaN)).toBe(true)
    expect(isNaN(Number.NaN)).toBe(true)
    expect(isNaN(0 / 0)).toBe(true)
    expect(isNaN(Number.parseInt("not a number"))).toBe(true)
  })

  it("should return false for numbers", () => {
    expect(isNaN(0)).toBe(false)
    expect(isNaN(42)).toBe(false)
    expect(isNaN(-42)).toBe(false)
    expect(isNaN(3.14)).toBe(false)
    expect(isNaN(Number.POSITIVE_INFINITY)).toBe(false)
    expect(isNaN(Number.NEGATIVE_INFINITY)).toBe(false)
  })

  it("should return false for non-number values", () => {
    expect(isNaN("NaN")).toBe(false)
    expect(isNaN(true)).toBe(false)
    expect(isNaN(false)).toBe(false)
    expect(isNaN({})).toBe(false)
    expect(isNaN([])).toBe(false)
    expect(isNaN(null)).toBe(false)
    expect(isNaN(undefined)).toBe(false)
  })
})
