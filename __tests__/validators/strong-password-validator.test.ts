import { StrongPasswordValidator } from "../../validators/strong-password-validator"

describe("StrongPasswordValidator", () => {
  const validator = new StrongPasswordValidator()

  describe("validate", () => {
    it("should return true for strong passwords with default options", () => {
      expect(validator.validate("Password123!")).toBe(true)
      expect(validator.validate("Str0ng_P@ssw0rd")).toBe(true)
      expect(validator.validate("P@55w0rd!")).toBe(true)
    })

    it("should return false for passwords that don't meet default requirements", () => {
      expect(validator.validate("password")).toBe(false) // No uppercase, numbers, or symbols
      expect(validator.validate("Password")).toBe(false) // No numbers or symbols
      expect(validator.validate("password123")).toBe(false) // No uppercase or symbols
      expect(validator.validate("Password!")).toBe(false) // No numbers
      expect(validator.validate("SHORT1!")).toBe(false) // Too short
    })

    it("should validate with custom length requirements", () => {
      expect(validator.validate("Pass1!", { minLength: 6 })).toBe(true)
      expect(validator.validate("Pass1!", { minLength: 7 })).toBe(false)
    })

    it("should validate with custom lowercase requirements", () => {
      expect(validator.validate("PASSWORD123!", { minLowercase: 0 })).toBe(true)
      expect(validator.validate("Password123!", { minLowercase: 5 })).toBe(true)
      expect(validator.validate("Password123!", { minLowercase: 6 })).toBe(false)
    })

    it("should validate with custom uppercase requirements", () => {
      expect(validator.validate("password123!", { minUppercase: 0 })).toBe(true)
      expect(validator.validate("PASSword123!", { minUppercase: 4 })).toBe(true)
      expect(validator.validate("Password123!", { minUppercase: 2 })).toBe(false)
    })

    it("should validate with custom number requirements", () => {
      expect(validator.validate("Password!", { minNumbers: 0 })).toBe(true)
      expect(validator.validate("Password123!", { minNumbers: 3 })).toBe(true)
      expect(validator.validate("Password123!", { minNumbers: 4 })).toBe(false)
    })

    it("should validate with custom symbol requirements", () => {
      expect(validator.validate("Password123", { minSymbols: 0 })).toBe(true)
      expect(validator.validate("Password!@#", { minSymbols: 3 })).toBe(true)
      expect(validator.validate("Password!@#", { minSymbols: 4 })).toBe(false)
    })

    it("should validate with multiple custom requirements", () => {
      expect(
        validator.validate("pass12", {
          minLength: 6,
          minLowercase: 4,
          minUppercase: 0,
          minNumbers: 2,
          minSymbols: 0,
        }),
      ).toBe(true)

      expect(
        validator.validate("Pass12!", {
          minLength: 6,
          minLowercase: 2,
          minUppercase: 2,
          minNumbers: 2,
          minSymbols: 1,
        }),
      ).toBe(false) // Not enough uppercase
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for weak passwords", () => {
      expect(validator.getMessage("password")).toContain("is not a strong password")
      expect(validator.getMessage("password")).toContain("min length 8")
      expect(validator.getMessage("password")).toContain("min lowercase 1")
      expect(validator.getMessage("password")).toContain("min uppercase 1")
      expect(validator.getMessage("password")).toContain("min numbers 1")
      expect(validator.getMessage("password")).toContain("min symbols 1")
    })

    it("should include custom requirements in error message", () => {
      const options = {
        minLength: 10,
        minLowercase: 2,
        minUppercase: 3,
        minNumbers: 4,
        minSymbols: 2,
      }

      const errorMessage = validator.getMessage("weak", options)
      expect(errorMessage).toContain("min length 10")
      expect(errorMessage).toContain("min lowercase 2")
      expect(errorMessage).toContain("min uppercase 3")
      expect(errorMessage).toContain("min numbers 4")
      expect(errorMessage).toContain("min symbols 2")
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("strong_password")
    })
  })
})
