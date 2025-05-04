import { EmailValidator } from "../../validators/email-validator"

describe("EmailValidator", () => {
  const validator = new EmailValidator()

  describe("validate", () => {
    it("should return true for valid email addresses", () => {
      expect(validator.validate("user@example.com")).toBe(true)
      expect(validator.validate("user.name@example.co.uk")).toBe(true)
      expect(validator.validate("user+tag@example.com")).toBe(true)
      expect(validator.validate("user@subdomain.example.com")).toBe(true)
      expect(validator.validate("user@127.0.0.1")).toBe(true)
      expect(validator.validate("user@[IPv6:2001:db8::1]")).toBe(true)
    })

    it("should return false for invalid email addresses", () => {
      expect(validator.validate("invalid-email")).toBe(false)
      expect(validator.validate("user@")).toBe(false)
      expect(validator.validate("@example.com")).toBe(false)
      expect(validator.validate("user@.com")).toBe(false)
      expect(validator.validate("user@example")).toBe(false)
      expect(validator.validate("user@example..com")).toBe(false)
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
    it("should return appropriate error message for invalid email addresses", () => {
      expect(validator.getMessage("invalid-email")).toBe('"invalid-email" is not a valid email address')
      expect(validator.getMessage("user@")).toBe('"user@" is not a valid email address')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("email")
    })
  })
})
