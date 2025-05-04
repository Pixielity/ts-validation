import { isRegExp } from "../validations/is-regexp"

describe("isRegExp", () => {
  it("should return true for regular expression literals", () => {
    expect(isRegExp(/test/)).toBe(true)
    expect(isRegExp(/test/g)).toBe(true)
    expect(isRegExp(/^test$/i)).toBe(true)
  })

  it("should return true for RegExp objects", () => {
    expect(isRegExp(/test/)).toBe(true)
    expect(isRegExp(/test/g)).toBe(true)
    expect(isRegExp(/test/)).toBe(true)
  })

  it("should return false for non-RegExp values", () => {
    expect(isRegExp("test")).toBe(false)
    expect(isRegExp("/test/")).toBe(false) // String that looks like regex
    expect(isRegExp(123)).toBe(false)
    expect(isRegExp(true)).toBe(false)
    expect(isRegExp({})).toBe(false)
    expect(isRegExp([])).toBe(false)
    expect(isRegExp(null)).toBe(false)
    expect(isRegExp(undefined)).toBe(false)
    expect(isRegExp(() => {})).toBe(false)
  })
})
