import { FunctionValidator } from "../../validators/function-validator"

describe("FunctionValidator", () => {
  const validator = new FunctionValidator()

  describe("validate", () => {
    it("should return true for function values", () => {
      expect(validator.validate(() => {})).toBe(true)
      expect(validator.validate(() => {})).toBe(true)
      expect(validator.validate(async () => {})).toBe(true)
      expect(validator.validate(String)).toBe(true)
      expect(validator.validate(Math.max)).toBe(true)
    })

    it("should return false for non-function values", () => {
      expect(validator.validate("not a function")).toBe(false)
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-function values", () => {
      expect(validator.getMessage("not a function")).toBe("Expected a function but got string")
      expect(validator.getMessage(123)).toBe("Expected a function but got number")
      expect(validator.getMessage(true)).toBe("Expected a function but got boolean")
      expect(validator.getMessage(null)).toBe("Expected a function but got null")
      expect(validator.getMessage(undefined)).toBe("Expected a function but got undefined")
      expect(validator.getMessage({})).toBe("Expected a function but got object")
      expect(validator.getMessage([])).toBe("Expected a function but got object")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("function")
    })
  })
})
