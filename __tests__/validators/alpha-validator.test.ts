import { AlphaValidator } from "../../validators/alpha-validator"

describe("AlphaValidator", () => {
  const validator = new AlphaValidator()

  describe("validate", () => {
    it("should return true for strings containing only alphabetic characters", () => {
      expect(validator.validate("abc")).toBe(true)
      expect(validator.validate("ABC")).toBe(true)
      expect(validator.validate("abcDEF")).toBe(true)
    })

    it("should return false for strings with non-alphabetic characters", () => {
      expect(validator.validate("abc123")).toBe(false)
      expect(validator.validate("abc!")).toBe(false)
      expect(validator.validate("abc def")).toBe(false) // Space is not alphabetic
    })

    it("should return false for empty strings", () => {
      expect(validator.validate("")).toBe(false)
    })

    it("should support different locales", () => {
      expect(validator.validate("ñáéíóú", "es-ES")).toBe(true)
      expect(validator.validate("äöüß", "de-DE")).toBe(true)
      expect(validator.validate("ñáéíóú")).toBe(false) // Not valid in default locale
      expect(validator.validate("äöüß")).toBe(false) // Not valid in default locale
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
    it("should return appropriate error message for strings with non-alphabetic characters", () => {
      expect(validator.getMessage("abc123")).toBe('"abc123" contains non-alphabetic characters')
    })

    it("should return appropriate error message for empty strings", () => {
      expect(validator.getMessage("")).toBe("String is empty")
    })

    it("should include locale information in the error message when provided", () => {
      expect(validator.getMessage("abc123", "es-ES")).toBe(
        '"abc123" contains non-alphabetic characters for locale es-ES',
      )
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("alpha")
    })
  })
})
