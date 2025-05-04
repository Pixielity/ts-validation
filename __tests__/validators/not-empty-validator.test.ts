import { NotEmptyValidator } from "../../validators/not-empty-validator"

describe("NotEmptyValidator", () => {
  const validator = new NotEmptyValidator()

  describe("validate", () => {
    it("should return false for null and undefined", () => {
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
    })

    it("should return false for empty strings", () => {
      expect(validator.validate("")).toBe(false)
      expect(validator.validate(" ")).toBe(false) // Space is trimmed
      expect(validator.validate("\t\n")).toBe(false) // Whitespace is trimmed
    })

    it("should return false for empty arrays", () => {
      expect(validator.validate([])).toBe(false)
    })

    it("should return false for empty objects", () => {
      expect(validator.validate({})).toBe(false)
    })

    it("should return true for non-empty values", () => {
      expect(validator.validate("not empty")).toBe(true)
      expect(validator.validate([1, 2, 3])).toBe(true)
      expect(validator.validate({ key: "value" })).toBe(true)
      expect(validator.validate(0)).toBe(true)
      expect(validator.validate(false)).toBe(true)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for null and undefined", () => {
      expect(validator.getMessage(null)).toBe("Value is empty (null)")
      expect(validator.getMessage(undefined)).toBe("Value is empty (undefined)")
    })

    it("should return appropriate error message for empty strings", () => {
      expect(validator.getMessage("")).toBe("String is empty")
      expect(validator.getMessage(" ")).toBe("String is empty")
    })

    it("should return appropriate error message for empty arrays", () => {
      expect(validator.getMessage([])).toBe("Array is empty")
    })

    it("should return appropriate error message for empty objects", () => {
      expect(validator.getMessage({})).toBe("Object is empty")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("notEmpty")
    })
  })
})
