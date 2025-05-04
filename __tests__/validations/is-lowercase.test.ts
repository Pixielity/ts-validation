import { isLowercase } from "../validations/is-lowercase"

describe("isLowercase", () => {
  it("should return true for lowercase strings", () => {
    expect(isLowercase("hello")).toBe(true)
    expect(isLowercase("hello world")).toBe(true)
    expect(isLowercase("hello123")).toBe(true)
    expect(isLowercase("hello!")).toBe(true)
  })

  it("should return false for strings with uppercase characters", () => {
    expect(isLowercase("Hello")).toBe(false)
    expect(isLowercase("HELLO")).toBe(false)
    expect(isLowercase("hello World")).toBe(false)
    expect(isLowercase("helloW")).toBe(false)
  })

  it("should return true for empty strings", () => {
    expect(isLowercase("")).toBe(true)
  })

  it("should return false for non-string values", () => {
    expect(isLowercase(123)).toBe(false)
    expect(isLowercase(true)).toBe(false)
    expect(isLowercase({})).toBe(false)
    expect(isLowercase([])).toBe(false)
    expect(isLowercase(null)).toBe(false)
    expect(isLowercase(undefined)).toBe(false)
  })
})
