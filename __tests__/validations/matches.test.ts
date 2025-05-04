import { matches } from "../validations/matches"

describe("matches", () => {
  it("should return true when a string matches a pattern", () => {
    expect(matches("abc123", /^[a-z]+\d+$/)).toBe(true)
    expect(matches("hello", /^[a-z]+$/)).toBe(true)
    expect(matches("123", /^\d+$/)).toBe(true)
    expect(matches("hello world", /hello/)).toBe(true)
  })

  it("should return false when a string does not match a pattern", () => {
    expect(matches("123abc", /^[a-z]+\d+$/)).toBe(false)
    expect(matches("Hello", /^[a-z]+$/)).toBe(false) // Uppercase H
    expect(matches("abc", /^\d+$/)).toBe(false)
    expect(matches("hello universe", /world/)).toBe(false)
  })

  it("should return false for empty strings", () => {
    expect(matches("", /^[a-z]+$/)).toBe(false)
  })

  it("should return true for empty strings with appropriate patterns", () => {
    expect(matches("", /^$/)).toBe(true)
    expect(matches("", /.*?/)).toBe(true)
  })

  it("should return false for non-string values", () => {
    expect(matches(123, /\d+/)).toBe(false)
    expect(matches(true, /true/)).toBe(false)
    expect(matches({}, /object/)).toBe(false)
    expect(matches([], /array/)).toBe(false)
    expect(matches(null, /null/)).toBe(false)
    expect(matches(undefined, /undefined/)).toBe(false)
  })
})
