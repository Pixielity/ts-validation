import { isDivisibleBy } from "../validations/is-divisible-by"

describe("isDivisibleBy", () => {
  it("should return true when a number is divisible by another number", () => {
    expect(isDivisibleBy(10, 2)).toBe(true)
    expect(isDivisibleBy(10, 5)).toBe(true)
    expect(isDivisibleBy(100, 10)).toBe(true)
    expect(isDivisibleBy(0, 5)).toBe(true) // 0 is divisible by any non-zero number
    expect(isDivisibleBy(-10, 2)).toBe(true)
    expect(isDivisibleBy(-10, -2)).toBe(true)
  })

  it("should return false when a number is not divisible by another number", () => {
    expect(isDivisibleBy(10, 3)).toBe(false)
    expect(isDivisibleBy(10, 7)).toBe(false)
    expect(isDivisibleBy(-10, 3)).toBe(false)
  })

  it("should return false for division by zero", () => {
    expect(isDivisibleBy(10, 0)).toBe(false)
    expect(isDivisibleBy(0, 0)).toBe(false)
  })

  it("should return false for NaN, Infinity, and -Infinity", () => {
    expect(isDivisibleBy(Number.NaN, 2)).toBe(false)
    expect(isDivisibleBy(10, Number.NaN)).toBe(false)
    expect(isDivisibleBy(Number.POSITIVE_INFINITY, 2)).toBe(false)
    expect(isDivisibleBy(10, Number.POSITIVE_INFINITY)).toBe(false)
  })

  it("should return false for non-number values", () => {
    expect(isDivisibleBy("10", 2)).toBe(false)
    expect(isDivisibleBy(10, "2")).toBe(false)
    expect(isDivisibleBy(true, 2)).toBe(false)
    expect(isDivisibleBy(10, false)).toBe(false)
    expect(isDivisibleBy({}, 2)).toBe(false)
    expect(isDivisibleBy([], 2)).toBe(false)
    expect(isDivisibleBy(null, 2)).toBe(false)
    expect(isDivisibleBy(undefined, 2)).toBe(false)
  })
})
