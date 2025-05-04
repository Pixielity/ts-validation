import { LowercaseValidator } from "../../validators/lowercase-validator"

describe("LowercaseValidator", () => {
  const validator = new LowercaseValidator()

  describe("validate", () => {
    it("should return true for strings containing only lowercase characters", () => {
      expect(validator.validate("abc")).toBe(true)
      expect(validator.validate("xyz")).toBe(true)
      expect(validator.validate("")).toBe(true) // Empty string is considered lowercase
    })

    it("should return true for strings with lowercase letters and non-alphabetic characters", () => {
      expect(validator.validate("abc123")).toBe(true)
      expect(validator.validate("abc!@#")).toBe(true)
      expect(validator.validate("abc def")).toBe(true) // Space is not alphabetic
    })

    it("should return false for strings with uppercase characters", () => {
      expect(validator.validate("ABC")).toBe(false)
      expect(validator.validate("abc123DEF")).toBe(false)
      expect(validator.validate("abcDef")).toBe(false)
      expect(validator.validate("ABCdef")).toBe(false)
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
    it("should return appropriate error message for strings with uppercase characters", () => {
      expect(validator.getMessage("ABC")).toBe('"ABC" is not lowercase')
      expect(validator.getMessage("abcDef")).toBe('"abcDef" is not lowercase')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("lowercase")
    })
  })
})
