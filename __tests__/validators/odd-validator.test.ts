import { OddValidator } from "../../validators/odd-validator"

describe("OddValidator", () => {
  const validator = new OddValidator()

  describe("validate", () => {
    it("should return true for odd numbers", () => {
      expect(validator.validate(1)).toBe(true)
      expect(validator.validate(3)).toBe(true)
      expect(validator.validate(-1)).toBe(true)
      expect(validator.validate(-3)).toBe(true)
      expect(validator.validate(999)).toBe(true)
    })

    it("should return false for even numbers", () => {
      expect(validator.validate(0)).toBe(false)
      expect(validator.validate(2)).toBe(false)
      expect(validator.validate(-2)).toBe(false)
      expect(validator.validate(-4)).toBe(false)
      expect(validator.validate(1000)).toBe(false)
    })

    it("should return false for non-integer numbers", () => {
      expect(validator.validate(1.1)).toBe(false)
      expect(validator.validate(3.3)).toBe(false)
      expect(validator.validate(-1.5)).toBe(false)
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
    it("should return appropriate error message for even numbers", () => {
      expect(validator.getMessage(2)).toBe("2 is not an odd number")
      expect(validator.getMessage(0)).toBe("0 is not an odd number")
    })

    it("should return appropriate error message for non-integer numbers", () => {
      expect(validator.getMessage(3.3)).toBe("3.3 is not an integer")
    })

    it("should return appropriate error message for NaN", () => {
      expect(validator.getMessage(Number.NaN)).toBe("Expected a number but got NaN")
    })

    it("should return appropriate error message for non-number values", () => {
      expect(validator.getMessage("3")).toBe("Expected a number but got string")
      expect(validator.getMessage(null)).toBe("Expected a number but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("odd")
    })
  })
})
