import { InRangeValidator } from "../../validators/in-range-validator"

describe("InRangeValidator", () => {
  const validator = new InRangeValidator()

  describe("validate", () => {
    it("should return true when number is within range", () => {
      expect(validator.validate(5, 1, 10)).toBe(true) // 5 is between 1 and 10
      expect(validator.validate(1, 1, 10)).toBe(true) // 1 equals min
      expect(validator.validate(10, 1, 10)).toBe(true) // 10 equals max
      expect(validator.validate(5, 5, 5)).toBe(true) // 5 equals both min and max
    })

    it("should return false when number is less than min", () => {
      expect(validator.validate(0, 1, 10)).toBe(false) // 0 is less than 1
      expect(validator.validate(-5, 1, 10)).toBe(false) // -5 is less than 1
      expect(validator.validate(0.9, 1, 10)).toBe(false) // 0.9 is less than 1
    })

    it("should return false when number is greater than max", () => {
      expect(validator.validate(11, 1, 10)).toBe(false) // 11 is greater than 10
      expect(validator.validate(100, 1, 10)).toBe(false) // 100 is greater than 10
      expect(validator.validate(10.1, 1, 10)).toBe(false) // 10.1 is greater than 10
    })

    it("should return false for NaN", () => {
      expect(validator.validate(Number.NaN, 1, 10)).toBe(false)
    })

    it("should return false for non-number values", () => {
      expect(validator.validate("5", 1, 10)).toBe(false)
      expect(validator.validate(true, 1, 10)).toBe(false)
      expect(validator.validate(null, 1, 10)).toBe(false)
      expect(validator.validate(undefined, 1, 10)).toBe(false)
      expect(validator.validate({}, 1, 10)).toBe(false)
      expect(validator.validate([], 1, 10)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message when number is out of range", () => {
      expect(validator.getMessage(0, 1, 10)).toBe("0 is not in range 1 to 10")
      expect(validator.getMessage(11, 1, 10)).toBe("11 is not in range 1 to 10")
    })

    it("should return appropriate error message for NaN", () => {
      expect(validator.getMessage(Number.NaN, 1, 10)).toBe("Expected a number but got NaN")
    })

    it("should return appropriate error message for non-number values", () => {
      expect(validator.getMessage("5", 1, 10)).toBe("Expected a number but got string")
      expect(validator.getMessage(null, 1, 10)).toBe("Expected a number but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("inRange")
    })
  })
})
