import { EmptyValidator } from "../../validators/empty-validator"

describe("EmptyValidator", () => {
  const validator = new EmptyValidator()

  describe("validate", () => {
    it("should return true for null and undefined", () => {
      expect(validator.validate(null)).toBe(true)
      expect(validator.validate(undefined)).toBe(true)
    })

    it("should return true for empty strings", () => {
      expect(validator.validate("")).toBe(true)
      expect(validator.validate(" ")).toBe(true) // Space is trimmed
      expect(validator.validate("\t\n")).toBe(true) // Whitespace is trimmed
    })

    it("should return true for empty arrays", () => {
      expect(validator.validate([])).toBe(true)
    })

    it("should return true for empty objects", () => {
      expect(validator.validate({})).toBe(true)
    })

    it("should return false for non-empty values", () => {
      expect(validator.validate("not empty")).toBe(false)
      expect(validator.validate([1, 2, 3])).toBe(false)
      expect(validator.validate({ key: "value" })).toBe(false)
      expect(validator.validate(0)).toBe(false)
      expect(validator.validate(false)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-empty strings", () => {
      expect(validator.getMessage("not empty")).toBe('String "not empty" is not empty')
    })

    it("should return appropriate error message for non-empty arrays", () => {
      expect(validator.getMessage([1, 2, 3])).toBe("Array with 3 elements is not empty")
    })

    it("should return appropriate error message for non-empty objects", () => {
      expect(validator.getMessage({ a: 1, b: 2 })).toBe("Object with 2 properties is not empty")
    })

    it("should return appropriate error message for other non-empty values", () => {
      expect(validator.getMessage(0)).toBe("Value of type number cannot be empty")
      expect(validator.getMessage(false)).toBe("Value of type boolean cannot be empty")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("empty")
    })
  })
})
