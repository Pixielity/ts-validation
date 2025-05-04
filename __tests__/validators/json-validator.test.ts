import { JSONValidator } from "../../validators/json-validator"

describe("JSONValidator", () => {
  const validator = new JSONValidator()

  describe("validate", () => {
    it("should return true for valid JSON strings", () => {
      expect(validator.validate('{"name":"John","age":30}')).toBe(true)
      expect(validator.validate("[1,2,3]")).toBe(true)
      expect(validator.validate('"simple string"')).toBe(true)
      expect(validator.validate("123")).toBe(true)
      expect(validator.validate("true")).toBe(true)
      expect(validator.validate("null")).toBe(true)
    })

    it("should return false for invalid JSON strings", () => {
      expect(validator.validate('{name:"John"}')).toBe(false) // Missing quotes around property name
      expect(validator.validate('{"name":"John",}')).toBe(false) // Trailing comma
      expect(validator.validate("Not JSON")).toBe(false)
      expect(validator.validate('{"incomplete": ')).toBe(false)
      expect(validator.validate("[1,2,")).toBe(false)
    })

    it("should return false for non-JSON-string values", () => {
      expect(validator.validate({})).toBe(false) // Object, not a JSON string
      expect(validator.validate([])).toBe(false) // Array, not a JSON string
      expect(validator.validate(123)).toBe(false) // Number, not a JSON string
      expect(validator.validate(true)).toBe(false) // Boolean, not a JSON string
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for invalid JSON strings", () => {
      expect(validator.getMessage('{name:"John"}')).toBe('"{name:"John"}" is not valid JSON')
      expect(validator.getMessage("Not JSON")).toBe('"Not JSON" is not valid JSON')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
      expect(validator.getMessage(undefined)).toBe("Expected a string but got undefined")
      expect(validator.getMessage({})).toBe("Expected a string but got object")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("json")
    })
  })
})
