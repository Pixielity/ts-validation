import { AlphanumericValidator } from "../../validators/alphanumeric-validator"

describe("AlphanumericValidator", () => {
  const validator = new AlphanumericValidator()

  describe("validate", () => {
    it("should return true for strings containing only alphanumeric characters", () => {
      expect(validator.validate("abc123")).toBe(true)
      expect(validator.validate("ABC123")).toBe(true)
      expect(validator.validate("123abc")).toBe(true)
    })

    it("should return false for strings with non-alphanumeric characters", () => {
      expect(validator.validate("abc!123")).toBe(false)
      expect(validator.validate("abc 123")).toBe(false) // Space is not alphanumeric
      expect(validator.validate("abc-123")).toBe(false)
    })

    it("should return false for empty strings", () => {
      expect(validator.validate("")).toBe(false)
    })

    it("should support different locales", () => {
      expect(validator.validate("ñáéíóú123", "es-ES")).toBe(true)
      expect(validator.validate("äöüß123", "de-DE")).toBe(true)
      expect(validator.validate("ñáéíóú123")).toBe(false) // Not valid in default locale
      expect(validator.validate("äöüß123")).toBe(false) // Not valid in default locale
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
    it("should return appropriate error message for strings with non-alphanumeric characters", () => {
      expect(validator.getMessage("abc!123")).toBe('"abc!123" contains non-alphanumeric characters')
    })

    it("should return appropriate error message for empty strings", () => {
      expect(validator.getMessage("")).toBe("String is empty")
    })

    it("should include locale information in the error message when provided", () => {
      expect(validator.getMessage("abc!123", "es-ES")).toBe(
        '"abc!123" contains non-alphanumeric characters for locale es-ES',
      )
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("alphanumeric")
    })
  })
})
