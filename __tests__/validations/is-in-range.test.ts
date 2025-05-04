import { isInRange } from "../validations/is-in-range"

describe("isInRange", () => {
  it("should return true for numbers within the range", () => {
    expect(isInRange(5, 1, 10)).toBe(true)
    expect(isInRange(1, 1, 10)).toBe(true) // min value
    expect(isInRange(10, 1, 10)).toBe(true) // max value
    expect(isInRange(5.5, 1, 10)).toBe(true) // float within range
  })

  it("should return false for numbers outside the range", () => {
    expect(isInRange(0, 1, 10)).toBe(false) // below min
    expect(isInRange(11, 1, 10)).toBe(false) // above max
    expect(isInRange(-5, 1, 10)).toBe(false) // negative below min
  })

  it("should return false for NaN, Infinity, and -Infinity", () => {
    expect(isInRange(Number.NaN, 1, 10)).toBe(false)
    expect(isInRange(Number.POSITIVE_INFINITY, 1, 10)).toBe(false)
    expect(isInRange(Number.NEGATIVE_INFINITY, 1, 10)).toBe(false)
  })

  it("should return false for non-number values", () => {
    expect(isInRange("5", 1, 10)).toBe(false)
    expect(isInRange(true, 1, 10)).toBe(false)
    expect(isInRange({}, 1, 10)).toBe(false)
    expect(isInRange([], 1, 10)).toBe(false)
    expect(isInRange(null, 1, 10)).toBe(false)
    expect(isInRange(undefined, 1, 10)).toBe(false)
  })
})
