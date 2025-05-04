import { IntegerValidator } from "../../validators/integer-validator"

describe("IntegerValidator", () => {
  const validator = new IntegerValidator()

  describe("validate", () => {
    it("should return true for integer values", () => {
      expect(validator.validate(123)).toBe(true)
      expect(validator.validate(-456)).toBe(true)
      expect(validator.validate(0)).toBe(true)
      expect(validator.validate(Number.MAX_SAFE_INTEGER)).toBe(true)
    })

    it("should return false for non-integer number values", () => {
      expect(validator.validate(123.45)).toBe(false)
      expect(validator.validate(-456.78)).toBe(false)
      expect(validator.validate(Number.NaN)).toBe(false)
      expect(validator.validate(Number.POSITIVE_INFINITY)).toBe(false)
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
    it("should return appropriate error message for non-integer number values", () => {
      expect(validator.getMessage(123.45)).toBe("123.45 is not an integer")
      expect(validator.getMessage(Number.NaN)).toBe("Expected an integer but got NaN")
    })

    it("should return appropriate error message for non-number values", () => {
      expect(validator.getMessage("123")).toBe("Expected a number but got string")
      expect(validator.getMessage(true)).toBe("Expected a number but got boolean")
      expect(validator.getMessage(null)).toBe("Expected a number but got undefined")
      expect(validator.getMessage(undefined)).toBe("Expected a number but got undefined")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("integer")
    })
  })
})
