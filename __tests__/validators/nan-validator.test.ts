import { NaNValidator } from "../../validators/nan-validator"

describe("NaNValidator", () => {
  const validator = new NaNValidator()

  describe("validate", () => {
    it("should return true for NaN values", () => {
      expect(validator.validate(Number.NaN)).toBe(true)
      expect(validator.validate(0 / 0)).toBe(true)
      expect(validator.validate(Number.parseInt("not a number"))).toBe(true)
    })

    it("should return false for non-NaN number values", () => {
      expect(validator.validate(0)).toBe(false)
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(-456)).toBe(false)
      expect(validator.validate(Number.POSITIVE_INFINITY)).toBe(false)
    })

    it("should return false for non-number values", () => {
      expect(validator.validate("NaN")).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-NaN number values", () => {
      expect(validator.getMessage(123)).toBe("123 is not NaN")
      expect(validator.getMessage(0)).toBe("0 is not NaN")
    })

    it("should return appropriate error message for non-number values", () => {
      expect(validator.getMessage("NaN")).toBe("Expected a number but got string")
      expect(validator.getMessage(true)).toBe("Expected a number but got boolean")
      expect(validator.getMessage(null)).toBe("Expected a number but got null")
      expect(validator.getMessage(undefined)).toBe("Expected a number but got undefined")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("nan")
    })
  })
})
