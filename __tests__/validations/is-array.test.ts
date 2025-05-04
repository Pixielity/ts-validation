import { isArray } from "../validations/is-array"

describe("isArray", () => {
  it("should return true for array values", () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray(new Array())).toBe(true)
    expect(isArray(Array.from("abc"))).toBe(true)
  })

  it("should return false for non-array values", () => {
    expect(isArray({})).toBe(false)
    expect(isArray("array")).toBe(false)
    expect(isArray(123)).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray(() => {})).toBe(false)
    expect(isArray(new Set())).toBe(false)
    expect(isArray(new Map())).toBe(false)
  })
})
