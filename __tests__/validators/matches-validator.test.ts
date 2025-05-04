import { MatchesValidator } from "../../validators/matches-validator"

describe("MatchesValidator", () => {
  const validator = new MatchesValidator()

  describe("validate", () => {
    it("should return true when string matches pattern", () => {
      expect(validator.validate("abc123", /^[a-z0-9]+$/)).toBe(true)
      expect(validator.validate("2023-05-15", /^\d{4}-\d{2}-\d{2}$/)).toBe(true)
      expect(validator.validate("test@example.com", /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)).toBe(true)
    })

    it("should return false when string does not match pattern", () => {
      expect(validator.validate("abc123!", /^[a-z0-9]+$/)).toBe(false)
      expect(validator.validate("05/15/2023", /^\d{4}-\d{2}-\d{2}$/)).toBe(false)
      expect(validator.validate("invalid-email", /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)).toBe(false)
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(123, /^\d+$/)).toBe(false)
      expect(validator.validate(true, /^true$/)).toBe(false)
      expect(validator.validate(null, /^null$/)).toBe(false)
      expect(validator.validate(undefined, /^undefined$/)).toBe(false)
      expect(validator.validate({}, /^\{\}$/)).toBe(false)
      expect(validator.validate([], /^\[\]$/)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message when string doesn't match pattern", () => {
      expect(validator.getMessage("abc123!", /^[a-z0-9]+$/)).toBe('"abc123!" does not match pattern /^[a-z0-9]+$/')
      expect(validator.getMessage("05/15/2023", /^\d{4}-\d{2}-\d{2}$/)).toBe(
        '"05/15/2023" does not match pattern /^\\d{4}-\\d{2}-\\d{2}$/',
      )
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123, /^\d+$/)).toBe("Expected a string but got number")
      expect(validator.getMessage(null, /^null$/)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("matches")
    })
  })
})
