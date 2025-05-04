import { isNull } from "../validations/is-null"

describe("isNull", () => {
  it("should return true for null", () => {
    expect(isNull(null)).toBe(true)
  })

  it("should return false for undefined", () => {
    expect(isNull(undefined)).toBe(false)
  })

  it("should return false for other values", () => {
    expect(isNull(0)).toBe(false)
    expect(isNull("")).toBe(false)
    expect(isNull(false)).toBe(false)
    expect(isNull({})).toBe(false)
    expect(isNull([])).toBe(false)
    expect(isNull(() => {})).toBe(false)
  })
})
