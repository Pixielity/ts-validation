import { ContainsValidator } from "../../validators/contains-validator"

describe("ContainsValidator", () => {
  const validator = new ContainsValidator()

  describe("validate", () => {
    it("should return true when string contains substring", () => {
      expect(validator.validate("Hello World", "World")).toBe(true)
      expect(validator.validate("Hello World", "Hello")).toBe(true)
      expect(validator.validate("Hello World", "o W")).toBe(true)
      expect(validator.validate("Hello World", "")).toBe(true) // Empty substring is always contained
    })

    it("should return false when string does not contain substring", () => {
      expect(validator.validate("Hello World", "Universe")).toBe(false)
      expect(validator.validate("Hello World", "world")).toBe(false) // Case-sensitive by default
      expect(validator.validate("", "something")).toBe(false) // Empty string doesn't contain non-empty substring
    })

    it("should handle case-insensitive search when ignoreCase option is true", () => {
      expect(validator.validate("Hello World", "world", { ignoreCase: true })).toBe(true)
      expect(validator.validate("Hello World", "HELLO", { ignoreCase: true })).toBe(true)
      expect(validator.validate("Hello World", "Universe", { ignoreCase: true })).toBe(false)
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(123, "23")).toBe(false)
      expect(validator.validate(true, "ru")).toBe(false)
      expect(validator.validate(null, "null")).toBe(false)
      expect(validator.validate(undefined, "undefined")).toBe(false)
      expect(validator.validate({}, "{}")).toBe(false)
      expect(validator.validate([], "[]")).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message when string doesn't contain substring", () => {
      expect(validator.getMessage("Hello", "World")).toBe('"Hello" does not contain "World"')
    })

    it("should include case-sensitivity information in error message when relevant", () => {
      expect(validator.getMessage("Hello", "hello", { ignoreCase: true })).toBe(
        '"Hello" does not contain "hello" (case-insensitive)',
      )
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123, "23")).toBe("Expected a string but got number")
      expect(validator.getMessage(null, "null")).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("contains")
    })
  })
})
