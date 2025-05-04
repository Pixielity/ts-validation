import { Base64Validator } from "../../validators/base64-validator"

describe("Base64Validator", () => {
  const validator = new Base64Validator()

  describe("validate", () => {
    it("should return true for valid base64 encoded strings", () => {
      expect(validator.validate("SGVsbG8gV29ybGQ=")).toBe(true) // "Hello World"
      expect(validator.validate("YWJjMTIzIT8kKiYoKSctPUB+")).toBe(true)
      expect(validator.validate("")).toBe(true) // Empty string is valid base64
      expect(validator.validate("YQ==")).toBe(true) // Single character with padding
      expect(validator.validate("YWI=")).toBe(true) // Two characters with padding
    })

    it("should return false for invalid base64 encoded strings", () => {
      expect(validator.validate("SGVsbG8gV29ybGQ")).toBe(false) // Missing padding
      expect(validator.validate("SGVsbG8_V29ybGQ=")).toBe(false) // Invalid character
      expect(validator.validate("=SGVsbG8gV29ybGQ=")).toBe(false) // Padding at the beginning
      expect(validator.validate("SGVsbG8gV29ybGQ==")).toBe(false) // Incorrect padding
      expect(validator.validate("SGVsbG8gV29ybGQ===")).toBe(false) // Too much padding
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for invalid base64 encoded strings", () => {
      expect(validator.getMessage("SGVsbG8gV29ybGQ")).toBe('"SGVsbG8gV29ybGQ" is not a valid base64 encoded string')
      expect(validator.getMessage("SGVsbG8_V29ybGQ=")).toBe('"SGVsbG8_V29ybGQ=" is not a valid base64 encoded string')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("base64")
    })
  })
})
