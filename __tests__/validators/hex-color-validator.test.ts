import { HexColorValidator } from "../../validators/hex-color-validator"

describe("HexColorValidator", () => {
  const validator = new HexColorValidator()

  describe("validate", () => {
    it("should return true for valid hex color strings", () => {
      expect(validator.validate("#000")).toBe(true) // 3-digit
      expect(validator.validate("#FFF")).toBe(true) // 3-digit uppercase
      expect(validator.validate("#abc")).toBe(true) // 3-digit lowercase
      expect(validator.validate("#000000")).toBe(true) // 6-digit
      expect(validator.validate("#FFFFFF")).toBe(true) // 6-digit uppercase
      expect(validator.validate("#abcdef")).toBe(true) // 6-digit lowercase
    })

    it("should return false for invalid hex color strings", () => {
      expect(validator.validate("000")).toBe(false) // Missing #
      expect(validator.validate("#00")).toBe(false) // Too short
      expect(validator.validate("#0000")).toBe(false) // Invalid length
      expect(validator.validate("#00000")).toBe(false) // Invalid length
      expect(validator.validate("#0000000")).toBe(false) // Too long
      expect(validator.validate("#GGGGGG")).toBe(false) // Invalid character
      expect(validator.validate("#FFG")).toBe(false) // Invalid character
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
    it("should return appropriate error message for invalid hex color strings", () => {
      expect(validator.getMessage("000")).toBe('"000" is not a valid hex color')
      expect(validator.getMessage("#0000")).toBe('"#0000" is not a valid hex color')
      expect(validator.getMessage("#GGGGGG")).toBe('"#GGGGGG" is not a valid hex color')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("hex_color")
    })
  })
})
