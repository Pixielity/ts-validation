import { ArrayValidator } from "../../validators/array-validator"

describe("ArrayValidator", () => {
  const validator = new ArrayValidator()

  describe("validate", () => {
    it("should return true for array values", () => {
      expect(validator.validate([])).toBe(true)
      expect(validator.validate([1, 2, 3])).toBe(true)
      expect(validator.validate(new Array(3))).toBe(true)
      expect(validator.validate(Array.from({ length: 3 }))).toBe(true)
    })

    it("should return false for non-array values", () => {
      expect(validator.validate("not array")).toBe(false)
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-array values", () => {
      expect(validator.getMessage("not array")).toBe("Expected an array but got string")
      expect(validator.getMessage(123)).toBe("Expected an array but got number")
      expect(validator.getMessage(true)).toBe("Expected an array but got boolean")
      expect(validator.getMessage({})).toBe("Expected an array but got object")
      expect(validator.getMessage(null)).toBe("Expected an array but got null")
      expect(validator.getMessage(undefined)).toBe("Expected an array but got undefined")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("array")
    })
  })
})
