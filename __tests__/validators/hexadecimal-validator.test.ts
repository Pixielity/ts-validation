import { HexadecimalValidator } from "../../validators/hexadecimal-validator"

describe("HexadecimalValidator", () => {
  const validator = new HexadecimalValidator()

  describe("validate", () => {
    it("should return true for valid hexadecimal strings", () => {
      expect(validator.validate("123abc")).toBe(true)
      expect(validator.validate("DEADBEEF")).toBe(true)
      expect(validator.validate("0123456789abcdef")).toBe(true)
      expect(validator.validate("0123456789ABCDEF")).toBe(true)
    })

    it("should return false for strings with non-hexadecimal characters", () => {
      expect(validator.validate("123g")).toBe(false) // 'g' is not a hex character
      expect(validator.validate("DEADBEEFG")).toBe(false) // 'G' is not a hex character
      expect(validator.validate("0x123abc")).toBe(false) // '0x' prefix is not allowed
      expect(validator.validate("123abc!")).toBe(false) // '!' is not a hex character
    })

    it("should return false for empty strings", () => {
      expect(validator.validate("")).toBe(false)
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
    it("should return appropriate error message for invalid hexadecimal strings", () => {
      expect(validator.getMessage("123g")).toBe('"123g" is not a valid hexadecimal string')
      expect(validator.getMessage("0x123abc")).toBe('"0x123abc" is not a valid hexadecimal string')
      expect(validator.getMessage("")).toBe('"" is not a valid hexadecimal string')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("hexadecimal")
    })
  })
})
