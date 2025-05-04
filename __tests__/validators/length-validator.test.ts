import { LengthValidator } from "../../validators/length-validator"

describe("LengthValidator", () => {
  const validator = new LengthValidator()

  describe("validate", () => {
    it("should return true when string length is within range", () => {
      expect(validator.validate("abc", 2, 5)).toBe(true) // Length 3 is between 2 and 5
      expect(validator.validate("abcde", 2, 5)).toBe(true) // Length 5 equals max
      expect(validator.validate("ab", 2, 5)).toBe(true) // Length 2 equals min
      expect(validator.validate("abc", 3, 3)).toBe(true) // Length 3 equals both min and max
    })

    it("should return true when string length is greater than or equal to min (when max is not specified)", () => {
      expect(validator.validate("abc", 2)).toBe(true) // Length 3 is greater than 2
      expect(validator.validate("ab", 2)).toBe(true) // Length 2 equals min
      expect(validator.validate("abcdef", 2)).toBe(true) // Length 6 is greater than 2
    })

    it("should return true for empty string when min is 0", () => {
      expect(validator.validate("", 0)).toBe(true)
      expect(validator.validate("", 0, 5)).toBe(true)
    })

    it("should return false when string length is less than min", () => {
      expect(validator.validate("a", 2, 5)).toBe(false) // Length 1 is less than 2
      expect(validator.validate("", 1, 5)).toBe(false) // Length 0 is less than 1
      expect(validator.validate("abc", 4)).toBe(false) // Length 3 is less than 4
    })

    it("should return false when string length is greater than max", () => {
      expect(validator.validate("abcdef", 2, 5)).toBe(false) // Length 6 is greater than 5
      expect(validator.validate("abcdefghij", 2, 5)).toBe(false) // Length 10 is greater than 5
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(123, 2, 5)).toBe(false)
      expect(validator.validate(true, 2, 5)).toBe(false)
      expect(validator.validate(null, 2, 5)).toBe(false)
      expect(validator.validate(undefined, 2, 5)).toBe(false)
      expect(validator.validate({}, 2, 5)).toBe(false)
      expect(validator.validate([], 2, 5)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message when string length is less than min", () => {
      expect(validator.getMessage("a", 2, 5)).toBe("String length (1) is less than minimum length (2)")
      expect(validator.getMessage("", 1)).toBe("String length (0) is less than minimum length (1)")
    })

    it("should return appropriate error message when string length is greater than max", () => {
      expect(validator.getMessage("abcdef", 2, 5)).toBe("String length (6) is greater than maximum length (5)")
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123, 2, 5)).toBe("Expected a string but got number")
      expect(validator.getMessage(null, 2, 5)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("length")
    })
  })
})
