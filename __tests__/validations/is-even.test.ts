import { isEven } from "../validations/is-even"

describe("isEven", () => {
  it("should return true for even integers", () => {
    expect(isEven(0)).toBe(true)
    expect(isEven(2)).toBe(true)
    expect(isEven(42)).toBe(true)
    expect(isEven(-2)).toBe(true)
    expect(isEven(-42)).toBe(true)
  })

  it("should return false for odd integers", () => {
    expect(isEven(1)).toBe(false)
    expect(isEven(3)).toBe(false)
    expect(isEven(43)).toBe(false)
    expect(isEven(-1)).toBe(false)
    expect(isEven(-43)).toBe(false)
  })

  it("should return false for floating-point numbers", () => {
    expect(isEven(2.5)).toBe(false)
    expect(isEven(4.0)).toBe(true) // 4.0 is equivalent to integer 4
    expect(isEven(-2.5)).toBe(false)
  })

  it("should return false for NaN, Infinity, and -Infinity", () => {
    expect(isEven(Number.NaN)).toBe(false)
    expect(isEven(Number.POSITIVE_INFINITY)).toBe(false)
    expect(isEven(Number.NEGATIVE_INFINITY)).toBe(false)
  })

  it("should return false for non-number values", () => {
    expect(isEven("2")).toBe(false)
    expect(isEven(true)).toBe(false)
    expect(isEven(false)).toBe(false)
    expect(isEven({})).toBe(false)
    expect(isEven([])).toBe(false)
    expect(isEven(null)).toBe(false)
    expect(isEven(undefined)).toBe(false)
  })
})
