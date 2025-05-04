import { EvenValidator } from "../../validators/even-validator"

describe("EvenValidator", () => {
  const validator = new EvenValidator()

  describe("validate", () => {
    it("should return true for even numbers", () => {
      expect(validator.validate(0)).toBe(true)
      expect(validator.validate(2)).toBe(true)
      expect(validator.validate(4)).toBe(true)
      expect(validator.validate(-2)).toBe(true)
      expect(validator.validate(-4)).toBe(true)
      expect(validator.validate(1000)).toBe(true)
    })

    it("should return false for odd numbers", () => {
      expect(validator.validate(1)).toBe(false)
      expect(validator.validate(3)).toBe(false)
      expect(validator.validate(-1)).toBe(false)
      expect(validator.validate(-3)).toBe(false)
      expect(validator.validate(999)).toBe(false)
    })

    it("should return false for non-integer numbers", () => {
      expect(validator.validate(2.2)).toBe(false)
      expect(validator.validate(3.5)).toBe(false)
      expect(validator.validate(-1.5)).toBe(false)
    })

    it("should return false for NaN", () => {
      expect(validator.validate(Number.NaN)).toBe(false)
    })

    it("should return false for non-number values", () => {
      expect(validator.validate("2")).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for odd numbers", () => {
      expect(validator.getMessage(1)).toBe("1 is not an even number")
      expect(validator.getMessage(3)).toBe("3 is not an even number")
      expect(validator.getMessage(-1)).toBe("-1 is not an even number")
    })

    it("should return appropriate error message for non-integer numbers", () => {
      expect(validator.getMessage(2.2)).toBe("2.2 is not an integer")
    })

    it("should return appropriate error message for NaN", () => {
      expect(validator.getMessage(Number.NaN)).toBe("Expected a number but got NaN")
    })

    it("should return appropriate error message for non-number values", () => {
      expect(validator.getMessage("2")).toBe("Expected a number but got string")
      expect(validator.getMessage(true)).toBe("Expected a number but got boolean")
      expect(validator.getMessage(null)).toBe("Expected a number but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("even")
    })
  })
})
