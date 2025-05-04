import { SetValidator } from "../../validators/set-validator"

describe("SetValidator", () => {
  const validator = new SetValidator()

  describe("validate", () => {
    it("should return true for Set objects", () => {
      expect(validator.validate(new Set())).toBe(true)
      expect(validator.validate(new Set([1, 2, 3]))).toBe(true)
      expect(validator.validate(new Set(["a", "b", "c"]))).toBe(true)
    })

    it("should return false for non-Set values", () => {
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
      expect(validator.validate(new Map())).toBe(false)
      expect(validator.validate("set")).toBe(false)
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-Set values", () => {
      expect(validator.getMessage({})).toContain("Expected set but got")
      expect(validator.getMessage([])).toContain("Expected set but got")
      expect(validator.getMessage("set")).toContain("Expected set but got")
      expect(validator.getMessage(123)).toContain("Expected set but got")
      expect(validator.getMessage(null)).toContain("Expected set but got")
      expect(validator.getMessage(undefined)).toContain("Expected set but got")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("set")
    })
  })
})
