import { isEmail } from "../validations/is-email"

describe("isEmail", () => {
  it("should return true for valid email addresses", () => {
    expect(isEmail("user@example.com")).toBe(true)
    expect(isEmail("user.name@example.com")).toBe(true)
    expect(isEmail("user+tag@example.com")).toBe(true)
    expect(isEmail("user@subdomain.example.com")).toBe(true)
    expect(isEmail("user@example.co.uk")).toBe(true)
  })

  it("should return false for invalid email addresses", () => {
    expect(isEmail("user@")).toBe(false)
    expect(isEmail("@example.com")).toBe(false)
    expect(isEmail("user@.com")).toBe(false)
    expect(isEmail("user@example")).toBe(false)
    expect(isEmail("userexample.com")).toBe(false)
    expect(isEmail("user@example..com")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isEmail(123)).toBe(false)
    expect(isEmail({})).toBe(false)
    expect(isEmail([])).toBe(false)
    expect(isEmail(null)).toBe(false)
    expect(isEmail(undefined)).toBe(false)
  })
})
