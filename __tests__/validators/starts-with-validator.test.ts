import { StartsWithValidator } from "../../validators/starts-with-validator"

describe("StartsWithValidator", () => {
  const validator = new StartsWithValidator()

  describe("validate", () => {
    it("should return true when string starts with prefix", () => {
      expect(validator.validate("Hello World", "Hello")).toBe(true)
      expect(validator.validate("Hello World", "He")).toBe(true)
      expect(validator.validate("Hello World", "H")).toBe(true)
      expect(validator.validate("Hello World", "")).toBe(true) // Empty prefix always matches
    })

    it("should return false when string does not start with prefix", () => {
      expect(validator.validate("Hello World", "World")).toBe(false)
      expect(validator.validate("Hello World", "hello")).toBe(false) // Case-sensitive by default
      expect(validator.validate("", "something")).toBe(false) // Empty string doesn't start with non-empty prefix
    })

    it("should handle case-insensitive search when ignoreCase option is true", () => {
      expect(validator.validate("Hello World", "hello", { ignoreCase: true })).toBe(true)
      expect(validator.validate("Hello World", "HELLO", { ignoreCase: true })).toBe(true)
      expect(validator.validate("Hello World", "World", { ignoreCase: true })).toBe(false)
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(123, "12")).toBe(false)
      expect(validator.validate(true, "tr")).toBe(false)
      expect(validator.validate(null, "nu")).toBe(false)
      expect(validator.validate(undefined, "un")).toBe(false)
      expect(validator.validate({}, "{")).toBe(false)
      expect(validator.validate([], "[")).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message when string doesn't start with prefix", () => {
      expect(validator.getMessage("Hello", "World")).toBe('"Hello" does not start with "World"')
    })

    it("should include case-sensitivity information in error message when relevant", () => {
      expect(validator.getMessage("Hello World", "hello", { ignoreCase: true })).toBe(
        '"Hello World" does not start with "hello" (case-insensitive)',
      )
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123, "12")).toBe("Expected a string but got number")
      expect(validator.getMessage(null, "nu")).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("starts_with")
    })
  })
})
