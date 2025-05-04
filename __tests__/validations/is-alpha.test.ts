import { isAlpha } from "../validations/is-alpha"

describe("isAlpha", () => {
  it("should return true for strings containing only alphabetic characters", () => {
    expect(isAlpha("hello")).toBe(true)
    expect(isAlpha("Hello")).toBe(true)
    expect(isAlpha("HELLO")).toBe(true)
    expect(isAlpha("HelloWorld")).toBe(true)
  })

  it("should return false for strings containing non-alphabetic characters", () => {
    expect(isAlpha("hello123")).toBe(false)
    expect(isAlpha("hello world")).toBe(false)
    expect(isAlpha("hello-world")).toBe(false)
    expect(isAlpha("hello_world")).toBe(false)
    expect(isAlpha("hello!")).toBe(false)
  })

  it("should return false for empty strings", () => {
    expect(isAlpha("")).toBe(false)
  })

  it("should return true for locale-specific alphabetic characters", () => {
    expect(isAlpha("café", "fr-FR")).toBe(true)
    expect(isAlpha("niño", "es-ES")).toBe(true)
    expect(isAlpha("straße", "de-DE")).toBe(true)
  })

  it("should return false for non-string values", () => {
    expect(isAlpha(123)).toBe(false)
    expect(isAlpha(true)).toBe(false)
    expect(isAlpha({})).toBe(false)
    expect(isAlpha([])).toBe(false)
    expect(isAlpha(null)).toBe(false)
    expect(isAlpha(undefined)).toBe(false)
  })
})
