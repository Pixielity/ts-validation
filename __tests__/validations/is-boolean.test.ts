import { isBoolean } from "../validations/is-boolean"

describe("isBoolean", () => {
  it("should return true for boolean values", () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(Boolean(1))).toBe(true)
    expect(isBoolean(Boolean(0))).toBe(true)
  })

  it("should return false for non-boolean values", () => {
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean("true")).toBe(false)
    expect(isBoolean("false")).toBe(false)
    expect(isBoolean({})).toBe(false)
    expect(isBoolean([])).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(undefined)).toBe(false)
    expect(isBoolean(() => {})).toBe(false)
  })
})
