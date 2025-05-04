import { StringValidator } from "../../validators/string-validator"

describe("StringValidator", () => {
  const validator = new StringValidator()

  describe("validate", () => {
    it("should return true for string values", () => {
      expect(validator.validate("hello")).toBe(true)
      expect(validator.validate("")).toBe(true) // Empty string is valid
      expect(validator.validate(String("hello"))).toBe(true) // String object is valid
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
    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(true)).toBe("Expected a string but got boolean")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
      expect(validator.getMessage(undefined)).toBe("Expected a string but got undefined")
      expect(validator.getMessage({})).toBe("Expected a string but got object")
      expect(validator.getMessage([])).toBe("Expected a string but got object")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("string")
    })
  })
})
