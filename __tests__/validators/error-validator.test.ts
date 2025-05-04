import { ErrorValidator } from "../../validators/error-validator"

describe("ErrorValidator", () => {
  const validator = new ErrorValidator()

  describe("validate", () => {
    it("should return true for Error objects", () => {
      expect(validator.validate(new Error())).toBe(true)
      expect(validator.validate(new TypeError())).toBe(true)
      expect(validator.validate(new SyntaxError())).toBe(true)
      expect(validator.validate(new RangeError())).toBe(true)

      // Custom error class
      class CustomError extends Error {}
      expect(validator.validate(new CustomError())).toBe(true)
    })

    it("should return false for non-Error values", () => {
      expect(validator.validate({})).toBe(false)
      expect(validator.validate({ message: "error" })).toBe(false)
      expect(validator.validate("error")).toBe(false)
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-Error values", () => {
      expect(validator.getMessage({})).toContain("Expected error but got")
      expect(validator.getMessage("error")).toContain("Expected error but got")
      expect(validator.getMessage(123)).toContain("Expected error but got")
      expect(validator.getMessage(null)).toContain("Expected error but got")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("error")
    })
  })
})
