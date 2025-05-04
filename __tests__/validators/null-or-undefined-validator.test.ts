import { NullOrUndefinedValidator } from "../../validators/null-or-undefined-validator"

describe("NullOrUndefinedValidator", () => {
  const validator = new NullOrUndefinedValidator()

  describe("validate", () => {
    it("should return true for null", () => {
      expect(validator.validate(null)).toBe(true)
    })

    it("should return true for undefined", () => {
      expect(validator.validate(undefined)).toBe(true)
      expect(validator.validate(void 0)).toBe(true) // void 0 is undefined
    })

    it("should return false for non-null and non-undefined values", () => {
      expect(validator.validate(0)).toBe(false)
      expect(validator.validate("")).toBe(false)
      expect(validator.validate(false)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
      expect(validator.validate(Number.NaN)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-null and non-undefined values", () => {
      expect(validator.getMessage(0)).toBe("Expected null or undefined but got number")
      expect(validator.getMessage("")).toBe("Expected null or undefined but got string")
      expect(validator.getMessage(false)).toBe("Expected null or undefined but got boolean")
      expect(validator.getMessage({})).toBe("Expected null or undefined but got object")
      expect(validator.getMessage([])).toBe("Expected null or undefined but got object")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("null_or_undefined")
    })
  })
})
