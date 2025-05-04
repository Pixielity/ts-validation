import { isEmpty } from "../validations/is-empty"

describe("isEmpty", () => {
  it("should return true for null and undefined", () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
  })

  it("should return true for empty strings", () => {
    expect(isEmpty("")).toBe(true)
    expect(isEmpty("   ")).toBe(true) // whitespace only
  })

  it("should return true for empty arrays", () => {
    expect(isEmpty([])).toBe(true)
  })

  it("should return true for empty objects", () => {
    expect(isEmpty({})).toBe(true)
  })

  it("should return false for non-empty strings", () => {
    expect(isEmpty("hello")).toBe(false)
    expect(isEmpty(" hello ")).toBe(false)
  })

  it("should return false for non-empty arrays", () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
    expect(isEmpty([null])).toBe(false)
  })

  it("should return false for non-empty objects", () => {
    expect(isEmpty({ name: "John" })).toBe(false)
    expect(isEmpty({ key: null })).toBe(false)
  })

  it("should return false for numbers and booleans", () => {
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(1)).toBe(false)
    expect(isEmpty(true)).toBe(false)
    expect(isEmpty(false)).toBe(false)
  })
})
