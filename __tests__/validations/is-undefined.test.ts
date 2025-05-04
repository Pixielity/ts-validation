import { isUndefined } from "../validations/is-undefined"

describe("isUndefined", () => {
  it("should return true for undefined", () => {
    expect(isUndefined(undefined)).toBe(true)
    let undefinedVar
    expect(isUndefined(undefinedVar)).toBe(true)
  })

  it("should return false for null", () => {
    expect(isUndefined(null)).toBe(false)
  })

  it("should return false for other values", () => {
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined("")).toBe(false)
    expect(isUndefined(false)).toBe(false)
    expect(isUndefined({})).toBe(false)
    expect(isUndefined([])).toBe(false)
    expect(isUndefined(() => {})).toBe(false)
  })
})
