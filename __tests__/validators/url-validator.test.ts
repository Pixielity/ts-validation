import { UrlValidator } from "../../validators/url-validator"

describe("UrlValidator", () => {
  const validator = new UrlValidator()

  describe("validate", () => {
    it("should return true for valid URLs", () => {
      expect(validator.validate("https://example.com")).toBe(true)
      expect(validator.validate("http://localhost:3000")).toBe(true)
      expect(validator.validate("https://example.com/path?q=123")).toBe(true)
      expect(validator.validate("ftp://ftp.example.com")).toBe(true)
      expect(validator.validate("http://example.com/path#fragment")).toBe(true)
      expect(validator.validate("http://user:pass@example.com")).toBe(true)
    })

    it("should return false for invalid URLs", () => {
      expect(validator.validate("invalid-url")).toBe(false)
      expect(validator.validate("http://")).toBe(false)
      expect(validator.validate("://example.com")).toBe(false)
      expect(validator.validate("http:/example.com")).toBe(false)
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for invalid URLs", () => {
      expect(validator.getMessage("invalid-url")).toBe('"invalid-url" is not a valid URL')
      expect(validator.getMessage("http://")).toBe('"http://" is not a valid URL')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("url")
    })
  })
})
