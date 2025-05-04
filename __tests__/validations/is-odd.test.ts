import { isOdd } from "../validations/is-odd"

describe("isOdd", () => {
  it("should return true for odd integers", () => {
    expect(isOdd(1)).toBe(true)
    expect(isOdd(3)).toBe(true)
    expect(isOdd(43)).toBe(true)
    expect(isOdd(-1)).toBe(true)
    expect(isOdd(-43)).toBe(true)
  })

  it("should return false for even integers", () => {
    expect(isOdd(0)).toBe(false)
    expect(isOdd(2)).toBe(false)
    expect(isOdd(42)).toBe(false)
    expect(isOdd(-2)).toBe(false)
    expect(isOdd(-42)).toBe(false)
  })

  it("should return false for floating-point numbers", () => {
    expect(isOdd(1.5)).toBe(false)
    expect(isOdd(3.0)).toBe(true) // 3.0 is equivalent to integer 3
    expect(isOdd(-1.5)).toBe(false)
  })

  it("should return false for NaN, Infinity, and -Infinity", () => {
    expect(isOdd(Number.NaN)).toBe(false)
    expect(isOdd(Number.POSITIVE_INFINITY)).toBe(false)
    expect(isOdd(Number.NEGATIVE_INFINITY)).toBe(false)
  })

  it("should return false for non-number values", () => {
    expect(isOdd("1")).toBe(false)
    expect(isOdd(true)).toBe(false)
    expect(isOdd(false)).toBe(false)
    expect(isOdd({})).toBe(false)
    expect(isOdd([])).toBe(false)
    expect(isOdd(null)).toBe(false)
    expect(isOdd(undefined)).toBe(false)
  })
})
