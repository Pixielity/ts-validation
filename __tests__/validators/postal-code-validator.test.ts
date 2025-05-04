import { PostalCodeValidator } from "../../validators/postal-code-validator"

describe("PostalCodeValidator", () => {
  const validator = new PostalCodeValidator()

  describe("validate", () => {
    it("should return true for valid US postal codes", () => {
      expect(validator.validate("10001", "US")).toBe(true)
      expect(validator.validate("90210", "US")).toBe(true)
      expect(validator.validate("12345-6789", "US")).toBe(true) // With ZIP+4
    })

    it("should return true for valid UK postal codes", () => {
      expect(validator.validate("SW1A 1AA", "GB")).toBe(true)
      expect(validator.validate("M1 1AA", "GB")).toBe(true)
      expect(validator.validate("B33 8TH", "GB")).toBe(true)
      expect(validator.validate("CR2 6XH", "GB")).toBe(true)
    })

    it("should return true for valid Canadian postal codes", () => {
      expect(validator.validate("K1A 0B1", "CA")).toBe(true)
      expect(validator.validate("V6B 4Y8", "CA")).toBe(true)
    })

    it("should return true for valid Australian postal codes", () => {
      expect(validator.validate("2000", "AU")).toBe(true)
      expect(validator.validate("3000", "AU")).toBe(true)
    })

    it("should return false for invalid postal codes", () => {
      expect(validator.validate("1234", "US")).toBe(false) // Too short for US
      expect(validator.validate("123456", "US")).toBe(false) // Too long for US
      expect(validator.validate("ABCDEF", "GB")).toBe(false) // Invalid format for UK
      expect(validator.validate("12345", "CA")).toBe(false) // Invalid format for Canada
    })

    it("should return false when postal code format doesn't match country", () => {
      expect(validator.validate("10001", "GB")).toBe(false) // US format for UK
      expect(validator.validate("SW1A 1AA", "US")).toBe(false) // UK format for US
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(10001, "US")).toBe(false)
      expect(validator.validate(true, "US")).toBe(false)
      expect(validator.validate(null, "US")).toBe(false)
      expect(validator.validate(undefined, "US")).toBe(false)
      expect(validator.validate({}, "US")).toBe(false)
      expect(validator.validate([], "US")).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for invalid postal codes", () => {
      expect(validator.getMessage("1234", "US")).toBe('"1234" is not a valid postal code for country US')
      expect(validator.getMessage("ABCDEF", "GB")).toBe('"ABCDEF" is not a valid postal code for country GB')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(10001, "US")).toBe("Expected a string but got number")
      expect(validator.getMessage(null, "US")).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("postal_code")
    })
  })
})
