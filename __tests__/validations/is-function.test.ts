import { isFunction } from "../validations/is-function"

describe("isFunction", () => {
  it("should return true for function values", () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(Array.isArray)).toBe(true)
    expect(isFunction(class {})).toBe(true)
  })

  it("should return false for non-function values", () => {
    expect(isFunction({})).toBe(false)
    expect(isFunction([])).toBe(false)
    expect(isFunction("function")).toBe(false)
    expect(isFunction(123)).toBe(false)
    expect(isFunction(true)).toBe(false)
    expect(isFunction(null)).toBe(false)
    expect(isFunction(undefined)).toBe(false)
  })
})
