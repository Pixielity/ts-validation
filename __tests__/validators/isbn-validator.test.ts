import { ISBNValidator } from "../../validators/isbn-validator"

describe("ISBNValidator", () => {
  const validator = new ISBNValidator()

  describe("validate", () => {
    it("should return true for valid ISBN-10 strings", () => {
      expect(validator.validate("0-306-40615-2")).toBe(true)
      expect(validator.validate("0306406152")).toBe(true) // Without separators
      expect(validator.validate("99921-58-10-7")).toBe(true)
      expect(validator.validate("9992158107")).toBe(true) // Without separators
    })

    it("should return true for valid ISBN-13 strings", () => {
      expect(validator.validate("978-3-16-148410-0")).toBe(true)
      expect(validator.validate("9783161484100")).toBe(true) // Without separators
      expect(validator.validate("978-0-306-40615-7")).toBe(true)
      expect(validator.validate("9780306406157")).toBe(true) // Without separators
    })

    it("should validate specific ISBN versions when specified", () => {
      // ISBN-10
      expect(validator.validate("0-306-40615-2", 10)).toBe(true)
      expect(validator.validate("978-3-16-148410-0", 10)).toBe(false) // ISBN-13 not valid as ISBN-10

      // ISBN-13
      expect(validator.validate("978-3-16-148410-0", 13)).toBe(true)
      expect(validator.validate("0-306-40615-2", 13)).toBe(false) // ISBN-10 not valid as ISBN-13
    })

    it("should return false for invalid ISBN strings", () => {
      // Invalid ISBN-10
      expect(validator.validate("0-306-40615-3")).toBe(false) // Invalid check digit
      expect(validator.validate("0-306-40615")).toBe(false) // Too short
      expect(validator.validate("0-306-40615-22")).toBe(false) // Too long

      // Invalid ISBN-13
      expect(validator.validate("978-3-16-148410-1")).toBe(false) // Invalid check digit
      expect(validator.validate("978-3-16-148410")).toBe(false) // Too short
      expect(validator.validate("978-3-16-148410-00")).toBe(false) // Too long
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(9783161484100)).toBe(false) // Number instead of string
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for invalid ISBN strings", () => {
      expect(validator.getMessage("0-306-40615-3")).toBe('"0-306-40615-3" is not a valid ISBN')
      expect(validator.getMessage("978-3-16-148410-1")).toBe('"978-3-16-148410-1" is not a valid ISBN')
    })

    it("should include version information in error message when specified", () => {
      expect(validator.getMessage("0-306-40615-3", 10)).toBe('"0-306-40615-3" is not a valid ISBN-10')
      expect(validator.getMessage("978-3-16-148410-1", 13)).toBe('"978-3-16-148410-1" is not a valid ISBN-13')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(9783161484100)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("isbn")
    })
  })
})
