import { FloatValidator } from "../../validators/float-validator"

describe("FloatValidator", () => {
  const validator = new FloatValidator()

  describe("validate", () => {
    it("should return true for floating-point numbers", () => {
      expect(validator.validate(123.45)).toBe(true)
      expect(validator.validate(-456.78)).toBe(true)
      expect(validator.validate(0.1)).toBe(true)
      expect(validator.validate(-0.1)).toBe(true)
    })

    it("should return false for integer numbers", () => {
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(-456)).toBe(false)
      expect(validator.validate(0)).toBe(false)
    })

    it("should return false for NaN and Infinity", () => {
      expect(validator.validate(Number.NaN)).toBe(false)
      expect(validator.validate(Number.POSITIVE_INFINITY)).toBe(false)
      expect(validator.validate(Number.NEGATIVE_INFINITY)).toBe(false)
    })

    it("should return false for non-number values", () => {
      expect(validator.validate("123.45")).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for integer numbers", () => {
      expect(validator.getMessage(123)).toBe("123 is an integer, not a float")
      expect(validator.getMessage(0)).toBe("0 is an integer, not a float")
    })

    it("should return appropriate error message for NaN", () => {
      expect(validator.getMessage(Number.NaN)).toBe("Expected a float but got NaN")
    })

    it("should return appropriate error message for non-number values", () => {
      expect(validator.getMessage("123.45")).toBe("Expected a number but got string")
      expect(validator.getMessage(null)).toBe("Expected a number but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("float")
    })
  })
})
