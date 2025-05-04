import { NumericValidator } from "../../validators/numeric-validator"

describe("NumericValidator", () => {
  const validator = new NumericValidator()

  describe("validate", () => {
    it("should return true for numeric strings", () => {
      expect(validator.validate("123")).toBe(true)
      expect(validator.validate("0")).toBe(true)
      expect(validator.validate("9999999999")).toBe(true)
    })

    it("should return true for numeric values", () => {
      expect(validator.validate(123)).toBe(true)
      expect(validator.validate(0)).toBe(true)
    })

    it("should return false for strings with decimal points by default", () => {
      expect(validator.validate("123.45")).toBe(false)
    })

    it("should return true for strings with decimal points when allowDecimal is true", () => {
      expect(validator.validate("123.45", { allowDecimal: true })).toBe(true)
      expect(validator.validate("0.0", { allowDecimal: true })).toBe(true)
      expect(validator.validate(".5", { allowDecimal: true })).toBe(true)
    })

    it("should return false for strings with negative signs by default", () => {
      expect(validator.validate("-123")).toBe(false)
    })

    it("should return true for strings with negative signs when allowNegative is true", () => {
      expect(validator.validate("-123", { allowNegative: true })).toBe(true)
      expect(validator.validate("-0", { allowNegative: true })).toBe(true)
    })

    it("should handle both decimal and negative options together", () => {
      expect(validator.validate("-123.45", { allowDecimal: true, allowNegative: true })).toBe(true)
      expect(validator.validate("-123.45", { allowDecimal: true })).toBe(false)
      expect(validator.validate("-123.45", { allowNegative: true })).toBe(false)
    })

    it("should return false for non-numeric strings", () => {
      expect(validator.validate("abc")).toBe(false)
      expect(validator.validate("123abc")).toBe(false)
      expect(validator.validate("")).toBe(false)
      expect(validator.validate(" ")).toBe(false)
    })

    it("should return false for non-string and non-number values", () => {
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-numeric strings", () => {
      expect(validator.getMessage("abc")).toBe('"abc" is not a valid numeric string')
    })

    it("should include decimal information in error message when relevant", () => {
      expect(validator.getMessage("123.45", { allowDecimal: true })).toBe(
        '"123.45" is not a valid numeric string with decimals allowed',
      )
    })

    it("should include negative information in error message when relevant", () => {
      expect(validator.getMessage("-123", { allowNegative: true })).toBe(
        '"-123" is not a valid numeric string with negative values allowed',
      )
    })

    it("should include both decimal and negative information when both options are used", () => {
      expect(validator.getMessage("-123.45", { allowDecimal: true, allowNegative: true })).toBe(
        '"-123.45" is not a valid numeric string with decimals allowed with negative values allowed',
      )
    })

    it("should return appropriate error message for non-string and non-number values", () => {
      expect(validator.getMessage(true)).toBe("Expected a string or number but got boolean")
      expect(validator.getMessage(null)).toBe("Expected a string or number but got null")
      expect(validator.getMessage(undefined)).toBe("Expected a string or number but got undefined")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("numeric")
    })
  })
})
