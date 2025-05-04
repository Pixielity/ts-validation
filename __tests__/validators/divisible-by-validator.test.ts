import { DivisibleByValidator } from "../../validators/divisible-by-validator"

describe("DivisibleByValidator", () => {
  const validator = new DivisibleByValidator()

  describe("validate", () => {
    it("should return true when number is divisible by divisor", () => {
      expect(validator.validate(10, 5)).toBe(true) // 10 is divisible by 5
      expect(validator.validate(10, 2)).toBe(true) // 10 is divisible by 2
      expect(validator.validate(10, 1)).toBe(true) // Any number is divisible by 1
      expect(validator.validate(0, 5)).toBe(true) // 0 is divisible by any number except 0
    })

    it("should return false when number is not divisible by divisor", () => {
      expect(validator.validate(10, 3)).toBe(false) // 10 is not divisible by 3
      expect(validator.validate(10, 4)).toBe(false) // 10 is not divisible by 4
      expect(validator.validate(10, 7)).toBe(false) // 10 is not divisible by 7
    })

    it("should return false when divisor is 0", () => {
      expect(validator.validate(10, 0)).toBe(false) // Division by zero
      expect(validator.validate(0, 0)).toBe(false) // Division by zero
    })

    it("should return false for non-integer numbers", () => {
      expect(validator.validate(10.5, 5)).toBe(false) // 10.5 is not an integer
      expect(validator.validate(10, 2.5)).toBe(false) // 2.5 is not an integer divisor
    })

    it("should return false for NaN", () => {
      expect(validator.validate(Number.NaN, 5)).toBe(false)
      expect(validator.validate(10, Number.NaN)).toBe(false)
    })

    it("should return false for non-number values", () => {
      expect(validator.validate("10", 5)).toBe(false)
      expect(validator.validate(10, "5")).toBe(false)
      expect(validator.validate(true, 5)).toBe(false)
      expect(validator.validate(null, 5)).toBe(false)
      expect(validator.validate(undefined, 5)).toBe(false)
      expect(validator.validate({}, 5)).toBe(false)
      expect(validator.validate([], 5)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message when number is not divisible by divisor", () => {
      expect(validator.getMessage(10, 3)).toBe("10 is not divisible by 3")
    })

    it("should return appropriate error message for division by zero", () => {
      expect(validator.getMessage(10, 0)).toBe("Cannot divide by zero")
    })

    it("should return appropriate error message for non-integer numbers", () => {
      expect(validator.getMessage(10.5, 5)).toBe("10.5 is not an integer")
    })

    it("should return appropriate error message for NaN", () => {
      expect(validator.getMessage(Number.NaN, 5)).toBe("Expected a number but got NaN")
    })

    it("should return appropriate error message for non-number values", () => {
      expect(validator.getMessage("10", 5)).toBe("Expected a number but got string")
      expect(validator.getMessage(10, "5")).toBe("Expected a divisor that is a number but got string")
      expect(validator.getMessage(null, 5)).toBe("Expected a number but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("divisibleBy")
    })
  })
})
