import { isMap } from "../validations/is-map"

describe("isMap", () => {
  it("should return true for Map objects", () => {
    expect(isMap(new Map())).toBe(true)
    expect(isMap(new Map([["key", "value"]]))).toBe(true)
  })

  it("should return false for non-Map values", () => {
    expect(isMap({})).toBe(false) // Plain object
    expect(isMap(new Set())).toBe(false) // Set, not Map
    expect(isMap([])).toBe(false)
    expect(isMap("map")).toBe(false)
    expect(isMap(123)).toBe(false)
    expect(isMap(true)).toBe(false)
    expect(isMap(null)).toBe(false)
    expect(isMap(undefined)).toBe(false)
    expect(isMap(() => {})).toBe(false)
  })
})
