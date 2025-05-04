import { NullValidator } from "../../validators/null-validator"

describe("NullValidator", () => {
  const validator = new NullValidator()

  describe("validate", () => {
    it("should return true for null", () => {
      expect(validator.validate(null)).toBe(true)
    })

    it("should return false for undefined", () => {
      expect(validator.validate(undefined)).toBe(false)
    })

    it("should return false for non-null values", () => {
      expect(validator.validate(0)).toBe(false)
      expect(validator.validate("")).toBe(false)
      expect(validator.validate(false)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for undefined", () => {
      expect(validator.getMessage(undefined)).toBe("Expected null but got undefined")
    })

    it("should return appropriate error message for non-null values", () => {
      expect(validator.getMessage(0)).toBe("Expected null but got number")
      expect(validator.getMessage("")).toBe("Expected null but got string")
      expect(validator.getMessage(false)).toBe("Expected null but got boolean")
      expect(validator.getMessage({})).toBe("Expected null but got object")
      expect(validator.getMessage([])).toBe("Expected null but got object")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("null")
    })
  })
})
