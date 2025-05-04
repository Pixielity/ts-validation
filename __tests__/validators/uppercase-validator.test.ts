import { UppercaseValidator } from "../../validators/uppercase-validator"

describe("UppercaseValidator", () => {
  const validator = new UppercaseValidator()

  describe("validate", () => {
    it("should return true for strings containing only uppercase characters", () => {
      expect(validator.validate("ABC")).toBe(true)
      expect(validator.validate("XYZ")).toBe(true)
      expect(validator.validate("")).toBe(true) // Empty string is considered uppercase
    })

    it("should return true for strings with uppercase letters and non-alphabetic characters", () => {
      expect(validator.validate("ABC123")).toBe(true)
      expect(validator.validate("ABC!@#")).toBe(true)
      expect(validator.validate("ABC DEF")).toBe(true) // Space is not alphabetic
    })

    it("should return false for strings with lowercase characters", () => {
      expect(validator.validate("abc")).toBe(false)
      expect(validator.validate("ABC123def")).toBe(false)
      expect(validator.validate("ABCdef")).toBe(false)
      expect(validator.validate("abcDEF")).toBe(false)
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
    it("should return appropriate error message for strings with lowercase characters", () => {
      expect(validator.getMessage("abc")).toBe('"abc" is not uppercase')
      expect(validator.getMessage("ABCdef")).toBe('"ABCdef" is not uppercase')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("uppercase")
    })
  })
})
