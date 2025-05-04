import { ObjectValidator } from "../../validators/object-validator"

describe("ObjectValidator", () => {
  const validator = new ObjectValidator()

  describe("validate", () => {
    it("should return true for object values", () => {
      expect(validator.validate({})).toBe(true)
      expect(validator.validate({ key: "value" })).toBe(true)
      expect(validator.validate(new Date())).toBe(true)
      expect(validator.validate(/regex/)).toBe(true)
    })

    it("should return false for null", () => {
      expect(validator.validate(null)).toBe(false)
    })

    it("should return false for arrays", () => {
      expect(validator.validate([])).toBe(false)
    })

    it("should return false for non-object values", () => {
      expect(validator.validate("string")).toBe(false)
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for null", () => {
      expect(validator.getMessage(null)).toBe("Expected an object but got null")
    })

    it("should return appropriate error message for arrays", () => {
      expect(validator.getMessage([])).toBe("Expected an object but got array")
    })

    it("should return appropriate error message for non-object values", () => {
      expect(validator.getMessage("string")).toBe("Expected an object but got string")
      expect(validator.getMessage(123)).toBe("Expected an object but got number")
      expect(validator.getMessage(true)).toBe("Expected an object but got boolean")
      expect(validator.getMessage(undefined)).toBe("Expected an object but got undefined")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("object")
    })
  })
})
