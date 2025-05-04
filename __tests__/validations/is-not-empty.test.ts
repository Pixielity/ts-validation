import { isNotEmpty } from "../validations/is-not-empty"

describe("isNotEmpty", () => {
  it("should return false for null and undefined", () => {
    expect(isNotEmpty(null)).toBe(false)
    expect(isNotEmpty(undefined)).toBe(false)
  })

  it("should return false for empty strings", () => {
    expect(isNotEmpty("")).toBe(false)
    expect(isNotEmpty("   ")).toBe(false) // whitespace only
  })

  it("should return false for empty arrays", () => {
    expect(isNotEmpty([])).toBe(false)
  })

  it("should return false for empty objects", () => {
    expect(isNotEmpty({})).toBe(false)
  })

  it("should return true for non-empty strings", () => {
    expect(isNotEmpty("hello")).toBe(true)
    expect(isNotEmpty(" hello ")).toBe(true)
  })

  it("should return true for non-empty arrays", () => {
    expect(isNotEmpty([1, 2, 3])).toBe(true)
    expect(isNotEmpty([null])).toBe(true)
  })

  it("should return true for non-empty objects", () => {
    expect(isNotEmpty({ name: "John" })).toBe(true)
    expect(isNotEmpty({ key: null })).toBe(true)
  })

  it("should return true for numbers and booleans", () => {
    expect(isNotEmpty(0)).toBe(true)
    expect(isNotEmpty(1)).toBe(true)
    expect(isNotEmpty(true)).toBe(true)
    expect(isNotEmpty(false)).toBe(true)
  })
})
