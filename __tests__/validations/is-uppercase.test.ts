import { isUppercase } from "../validations/is-uppercase"

describe("isUppercase", () => {
  it("should return true for uppercase strings", () => {
    expect(isUppercase("HELLO")).toBe(true)
    expect(isUppercase("HELLO WORLD")).toBe(true)
    expect(isUppercase("HELLO123")).toBe(true)
    expect(isUppercase("HELLO!")).toBe(true)
  })

  it("should return false for strings with lowercase characters", () => {
    expect(isUppercase("Hello")).toBe(false)
    expect(isUppercase("hello")).toBe(false)
    expect(isUppercase("HELLO world")).toBe(false)
    expect(isUppercase("HELLOw")).toBe(false)
  })

  it("should return true for empty strings", () => {
    expect(isUppercase("")).toBe(true)
  })

  it("should return false for non-string values", () => {
    expect(isUppercase(123)).toBe(false)
    expect(isUppercase(true)).toBe(false)
    expect(isUppercase({})).toBe(false)
    expect(isUppercase([])).toBe(false)
    expect(isUppercase(null)).toBe(false)
    expect(isUppercase(undefined)).toBe(false)
  })
})
