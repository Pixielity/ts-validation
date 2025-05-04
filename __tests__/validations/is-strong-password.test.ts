import { isStrongPassword } from "../validations/is-strong-password"

describe("isStrongPassword", () => {
  it("should return true for strong passwords with default requirements", () => {
    expect(isStrongPassword("P@ssw0rd")).toBe(true) // 8 chars, upper, lower, number, symbol
    expect(isStrongPassword("Str0ng!P@ss")).toBe(true)
    expect(isStrongPassword("C0mpl3x#P@ssw0rd")).toBe(true)
  })

  it("should return false for passwords missing uppercase letters", () => {
    expect(isStrongPassword("p@ssw0rd")).toBe(false)
  })

  it("should return false for passwords missing lowercase letters", () => {
    expect(isStrongPassword("P@SSW0RD")).toBe(false)
  })

  it("should return false for passwords missing numbers", () => {
    expect(isStrongPassword("P@ssword")).toBe(false)
  })

  it("should return false for passwords missing symbols", () => {
    expect(isStrongPassword("Passw0rd")).toBe(false)
  })

  it("should return false for passwords that are too short", () => {
    expect(isStrongPassword("P@ss0")).toBe(false) // Only 5 chars
  })

  it("should return true for passwords that meet custom requirements", () => {
    expect(
      isStrongPassword("Pass123", {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      }),
    ).toBe(true)

    expect(
      isStrongPassword("pass123", {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      }),
    ).toBe(true)
  })

  it("should return false for passwords that don't meet custom requirements", () => {
    expect(
      isStrongPassword("Pass123", {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      }),
    ).toBe(false) // Too short for custom requirement

    expect(
      isStrongPassword("Password", {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      }),
    ).toBe(false) // No numbers
  })

  it("should return false for empty strings", () => {
    expect(isStrongPassword("")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isStrongPassword(123456)).toBe(false)
    expect(isStrongPassword(true)).toBe(false)
    expect(isStrongPassword({})).toBe(false)
    expect(isStrongPassword([])).toBe(false)
    expect(isStrongPassword(null)).toBe(false)
    expect(isStrongPassword(undefined)).toBe(false)
  })
})
