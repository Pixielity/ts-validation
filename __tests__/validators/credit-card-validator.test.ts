import { CreditCardValidator } from "../../validators/credit-card-validator"

describe("CreditCardValidator", () => {
  const validator = new CreditCardValidator()

  describe("validate", () => {
    it("should return true for valid credit card numbers", () => {
      expect(validator.validate("4111111111111111")).toBe(true) // Visa
      expect(validator.validate("5555555555554444")).toBe(true) // MasterCard
      expect(validator.validate("378282246310005")).toBe(true) // American Express
      expect(validator.validate("6011111111111117")).toBe(true) // Discover
    })

    it("should return true for valid credit card numbers with spaces or dashes", () => {
      expect(validator.validate("4111 1111 1111 1111")).toBe(true)
      expect(validator.validate("5555-5555-5555-4444")).toBe(true)
      expect(validator.validate("3782-822463-10005")).toBe(true)
    })

    it("should return false for invalid credit card numbers", () => {
      expect(validator.validate("4111111111111112")).toBe(false) // Invalid checksum
      expect(validator.validate("123456789012345")).toBe(false) // Invalid format
      expect(validator.validate("1111222233334444")).toBe(false) // Invalid prefix
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(4111111111111111)).toBe(false) // Number instead of string
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for invalid credit card numbers", () => {
      expect(validator.getMessage("4111111111111112")).toBe('"4111111111111112" is not a valid credit card number')
      expect(validator.getMessage("123456789012345")).toBe('"123456789012345" is not a valid credit card number')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(4111111111111111)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("credit_card")
    })
  })
})
