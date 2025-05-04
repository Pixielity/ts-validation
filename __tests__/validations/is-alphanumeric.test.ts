import { isAlphanumeric } from "../validations/is-alphanumeric"

describe("isAlphanumeric", () => {
  it("should return true for strings containing only alphanumeric characters", () => {
    expect(isAlphanumeric("hello123")).toBe(true)
    expect(isAlphanumeric("Hello123")).toBe(true)
    expect(isAlphanumeric("HELLO123")).toBe(true)
    expect(isAlphanumeric("123")).toBe(true)
    expect(isAlphanumeric("abc")).toBe(true)
  })

  it("should return false for strings containing non-alphanumeric characters", () => {
    expect(isAlphanumeric("hello world")).toBe(false)
    expect(isAlphanumeric("hello-world")).toBe(false)
    expect(isAlphanumeric("hello_world")).toBe(false)
    expect(isAlphanumeric("hello!")).toBe(false)
    expect(isAlphanumeric("hello@123")).toBe(false)
  })

  it("should return false for empty strings", () => {
    expect(isAlphanumeric("")).toBe(false)
  })

  it("should return true for locale-specific alphanumeric characters", () => {
    expect(isAlphanumeric("café123", "fr-FR")).toBe(true)
    expect(isAlphanumeric("niño123", "es-ES")).toBe(true)
    expect(isAlphanumeric("straße123", "de-DE")).toBe(true)
  })

  it("should return false for non-string values", () => {
    expect(isAlphanumeric(123)).toBe(false)
    expect(isAlphanumeric(true)).toBe(false)
    expect(isAlphanumeric({})).toBe(false)
    expect(isAlphanumeric([])).toBe(false)
    expect(isAlphanumeric(null)).toBe(false)
    expect(isAlphanumeric(undefined)).toBe(false)
  })
})
