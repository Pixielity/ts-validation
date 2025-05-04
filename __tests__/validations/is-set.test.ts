import { isSet } from "../validations/is-set"

describe("isSet", () => {
  it("should return true for Set objects", () => {
    expect(isSet(new Set())).toBe(true)
    expect(isSet(new Set([1, 2, 3]))).toBe(true)
  })

  it("should return false for non-Set values", () => {
    expect(isSet({})).toBe(false) // Plain object
    expect(isSet(new Map())).toBe(false) // Map, not Set
    expect(isSet([])).toBe(false)
    expect(isSet("set")).toBe(false)
    expect(isSet(123)).toBe(false)
    expect(isSet(true)).toBe(false)
    expect(isSet(null)).toBe(false)
    expect(isSet(undefined)).toBe(false)
    expect(isSet(() => {})).toBe(false)
  })
})
