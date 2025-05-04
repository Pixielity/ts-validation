import { UndefinedValidator } from "../../validators/undefined-validator"

describe("UndefinedValidator", () => {
  const validator = new UndefinedValidator()

  describe("validate", () => {
    it("should return true for undefined", () => {
      expect(validator.validate(undefined)).toBe(true)
      expect(validator.validate(void 0)).toBe(true)
    })

    it("should return false for null", () => {
      expect(validator.validate(null)).toBe(false)
    })

    it("should return false for non-undefined values", () => {
      expect(validator.validate(0)).toBe(false)
      expect(validator.validate("")).toBe(false)
      expect(validator.validate(false)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for null", () => {
      expect(validator.getMessage(null)).toBe("Expected undefined but got null")
    })

    it("should return appropriate error message for non-undefined values", () => {
      expect(validator.getMessage(0)).toBe("Expected undefined but got number")
      expect(validator.getMessage("")).toBe("Expected undefined but got string")
      expect(validator.getMessage(false)).toBe("Expected undefined but got boolean")
      expect(validator.getMessage({})).toBe("Expected undefined but got object")
      expect(validator.getMessage([])).toBe("Expected undefined but got object")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("undefined")
    })
  })
})
