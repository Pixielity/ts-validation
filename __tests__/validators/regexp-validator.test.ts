import { RegExpValidator } from "../../validators/regexp-validator"

describe("RegExpValidator", () => {
  const validator = new RegExpValidator()

  describe("validate", () => {
    it("should return true for RegExp objects", () => {
      expect(validator.validate(/test/)).toBe(true)
      expect(validator.validate(/test/)).toBe(true)
      expect(validator.validate(/test/g)).toBe(true)
      expect(validator.validate(/test/i)).toBe(true)
      expect(validator.validate(/test/m)).toBe(true)
      expect(validator.validate(/^$/)).toBe(true)
    })

    it("should return false for non-RegExp values", () => {
      expect(validator.validate("test")).toBe(false)
      expect(validator.validate("/test/")).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-RegExp values", () => {
      expect(validator.getMessage("test")).toContain("Expected regexp but got")
      expect(validator.getMessage({})).toContain("Expected regexp but got")
      expect(validator.getMessage(123)).toContain("Expected regexp but got")
      expect(validator.getMessage(null)).toContain("Expected regexp but got")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("regexp")
    })
  })
})
