import { EndsWithValidator } from "../../validators/ends-with-validator"

describe("EndsWithValidator", () => {
  const validator = new EndsWithValidator()

  describe("validate", () => {
    it("should return true when string ends with suffix", () => {
      expect(validator.validate("Hello World", "World")).toBe(true)
      expect(validator.validate("Hello World", "ld")).toBe(true)
      expect(validator.validate("Hello World", "d")).toBe(true)
      expect(validator.validate("Hello World", "")).toBe(true) // Empty suffix always matches
    })

    it("should return false when string does not end with suffix", () => {
      expect(validator.validate("Hello World", "Hello")).toBe(false)
      expect(validator.validate("Hello World", "world")).toBe(false) // Case-sensitive by default
      expect(validator.validate("", "something")).toBe(false) // Empty string doesn't end with non-empty suffix
    })

    it("should handle case-insensitive search when ignoreCase option is true", () => {
      expect(validator.validate("Hello World", "world", { ignoreCase: true })).toBe(true)
      expect(validator.validate("Hello World", "WORLD", { ignoreCase: true })).toBe(true)
      expect(validator.validate("Hello World", "Hello", { ignoreCase: true })).toBe(false)
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(123, "23")).toBe(false)
      expect(validator.validate(true, "ue")).toBe(false)
      expect(validator.validate(null, "null")).toBe(false)
      expect(validator.validate(undefined, "undefined")).toBe(false)
      expect(validator.validate({}, "{}")).toBe(false)
      expect(validator.validate([], "[]")).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message when string doesn't end with suffix", () => {
      expect(validator.getMessage("Hello", "World")).toBe('"Hello" does not end with "World"')
    })

    it("should include case-sensitivity information in error message when relevant", () => {
      expect(validator.getMessage("Hello World", "world", { ignoreCase: true })).toBe(
        '"Hello World" does not end with "world" (case-insensitive)',
      )
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123, "23")).toBe("Expected a string but got number")
      expect(validator.getMessage(null, "null")).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("ends_with")
    })
  })
})
