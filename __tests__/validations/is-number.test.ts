import { isNumber } from "../validations/is-number"

describe("isNumber", () => {
  it("should return true for number values", () => {
    expect(isNumber(123)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(-123)).toBe(true)
    expect(isNumber(3.14)).toBe(true)
    expect(isNumber(Number("123"))).toBe(true)
    expect(isNumber(Number.POSITIVE_INFINITY)).toBe(true)
  })

  it("should return false for NaN", () => {
    expect(isNumber(Number.NaN)).toBe(false)
  })

  it("should return false for non-number values", () => {
    expect(isNumber("123")).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber(() => {})).toBe(false)
    expect(isNumber(new Date())).toBe(false)
  })
})
