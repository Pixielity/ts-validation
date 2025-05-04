import { NumberValidator } from "../../validators/number-validator"

describe("NumberValidator", () => {
  const validator = new NumberValidator()

  describe("validate", () => {
    it("should return true for number values", () => {
      expect(validator.validate(123)).toBe(true)
      expect(validator.validate(0)).toBe(true)
      expect(validator.validate(-45.67)).toBe(true)
      expect(validator.validate(Number.POSITIVE_INFINITY)).toBe(true)
    })

    it("should return false for NaN", () => {
      expect(validator.validate(Number.NaN)).toBe(false)
    })

    it("should return false for non-number values", () => {
      expect(validator.validate("123")).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for NaN", () => {
      expect(validator.getMessage(Number.NaN)).toBe("Expected a number but got NaN")
    })

    it("should return appropriate error message for non-number values", () => {
      expect(validator.getMessage("123")).toBe("Expected a number but got string")
      expect(validator.getMessage(true)).toBe("Expected a number but got boolean")
      expect(validator.getMessage(null)).toBe("Expected a number but got null")
      expect(validator.getMessage(undefined)).toBe("Expected a number but got undefined")
      expect(validator.getMessage({})).toBe("Expected a number but got object")
      expect(validator.getMessage([])).toBe("Expected a number but got object")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("number")
    })
  })
})
