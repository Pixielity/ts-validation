import { PositiveValidator } from "../../validators/positive-validator"

describe("PositiveValidator", () => {
  const validator = new PositiveValidator()

  describe("validate", () => {
    it("should return true for positive numbers", () => {
      expect(validator.validate(1)).toBe(true)
      expect(validator.validate(0.1)).toBe(true)
      expect(validator.validate(100)).toBe(true)
      expect(validator.validate(Number.POSITIVE_INFINITY)).toBe(true)
    })

    it("should return false for zero by default", () => {
      expect(validator.validate(0)).toBe(false)
      expect(validator.validate(-0)).toBe(false) // -0 === 0 in JavaScript
    })

    it("should return true for zero when allowZero option is true", () => {
      expect(validator.validate(0, { allowZero: true })).toBe(true)
      expect(validator.validate(-0, { allowZero: true })).toBe(true)
    })

    it("should return false for negative numbers", () => {
      expect(validator.validate(-1)).toBe(false)
      expect(validator.validate(-0.1)).toBe(false)
      expect(validator.validate(-100)).toBe(false)
      expect(validator.validate(Number.NEGATIVE_INFINITY)).toBe(false)
    })

    it("should return false for NaN", () => {
      expect(validator.validate(Number.NaN)).toBe(false)
    })

    it("should return false for non-number values", () => {
      expect(validator.validate("1")).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-positive numbers", () => {
      expect(validator.getMessage(0)).toBe("0 is not a positive number")
      expect(validator.getMessage(-1)).toBe("-1 is not a positive number")
    })

    it("should include allowZero information in error message when relevant", () => {
      expect(validator.getMessage(-1, { allowZero: true })).toBe("-1 is not a positive number or zero")
    })

    it("should return appropriate error message for NaN", () => {
      expect(validator.getMessage(Number.NaN)).toBe("Expected a positive number but got NaN")
    })

    it("should return appropriate error message for non-number values", () => {
      expect(validator.getMessage("1")).toBe("Expected a number but got string")
      expect(validator.getMessage(null)).toBe("Expected a number but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("positive")
    })
  })
})
