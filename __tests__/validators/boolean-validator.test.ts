import { BooleanValidator } from "../../validators/boolean-validator"

describe("BooleanValidator", () => {
  const validator = new BooleanValidator()

  describe("validate", () => {
    it("should return true for boolean values", () => {
      expect(validator.validate(true)).toBe(true)
      expect(validator.validate(false)).toBe(true)
      expect(validator.validate(Boolean(1))).toBe(true)
    })

    it("should return false for non-boolean values", () => {
      expect(validator.validate(0)).toBe(false)
      expect(validator.validate(1)).toBe(false)
      expect(validator.validate("true")).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-boolean values", () => {
      expect(validator.getMessage(0)).toBe("Expected a boolean but got number")
      expect(validator.getMessage("true")).toBe("Expected a boolean but got string")
      expect(validator.getMessage(null)).toBe("Expected a boolean but got null")
      expect(validator.getMessage(undefined)).toBe("Expected a boolean but got undefined")
      expect(validator.getMessage({})).toBe("Expected a boolean but got object")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("boolean")
    })
  })
})
