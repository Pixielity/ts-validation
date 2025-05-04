import { ZeroValidator } from "../../validators/zero-validator"

describe("ZeroValidator", () => {
  const validator = new ZeroValidator()

  describe("validate", () => {
    it("should return true for zero", () => {
      expect(validator.validate(0)).toBe(true)
      expect(validator.validate(-0)).toBe(true) // -0 === 0 in JavaScript
      expect(validator.validate(0.0)).toBe(true)
    })

    it("should return false for non-zero numbers", () => {
      expect(validator.validate(1)).toBe(false)
      expect(validator.validate(-1)).toBe(false)
      expect(validator.validate(0.1)).toBe(false)
      expect(validator.validate(-0.1)).toBe(false)
      expect(validator.validate(Number.POSITIVE_INFINITY)).toBe(false)
      expect(validator.validate(Number.NEGATIVE_INFINITY)).toBe(false)
    })

    it("should return false for NaN", () => {
      expect(validator.validate(Number.NaN)).toBe(false)
    })

    it("should return false for non-number values", () => {
      expect(validator.validate("0")).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(false)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-zero numbers", () => {
      expect(validator.getMessage(1)).toBe("1 is not zero")
      expect(validator.getMessage(-1)).toBe("-1 is not zero")
      expect(validator.getMessage(0.1)).toBe("0.1 is not zero")
    })

    it("should return appropriate error message for NaN", () => {
      expect(validator.getMessage(Number.NaN)).toBe("Expected a number but got NaN")
    })

    it("should return appropriate error message for non-number values", () => {
      expect(validator.getMessage("0")).toBe("Expected a number but got string")
      expect(validator.getMessage(null)).toBe("Expected a number but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("zero")
    })
  })
})
