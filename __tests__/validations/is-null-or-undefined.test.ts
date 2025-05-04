import { isNullOrUndefined } from "../validations/is-null-or-undefined"

describe("isNullOrUndefined", () => {
  it("should return true for null", () => {
    expect(isNullOrUndefined(null)).toBe(true)
  })

  it("should return true for undefined", () => {
    expect(isNullOrUndefined(undefined)).toBe(true)
    let undefinedVar
    expect(isNullOrUndefined(undefinedVar)).toBe(true)
  })

  it("should return false for other values", () => {
    expect(isNullOrUndefined(0)).toBe(false)
    expect(isNullOrUndefined("")).toBe(false)
    expect(isNullOrUndefined(false)).toBe(false)
    expect(isNullOrUndefined({})).toBe(false)
    expect(isNullOrUndefined([])).toBe(false)
    expect(isNullOrUndefined(() => {})).toBe(false)
  })
})
