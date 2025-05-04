import { UUIDValidator } from "../../validators/uuid-validator"

describe("UUIDValidator", () => {
  const validator = new UUIDValidator()

  describe("validate", () => {
    it("should return true for valid UUID strings", () => {
      expect(validator.validate("550e8400-e29b-41d4-a716-446655440000")).toBe(true) // v4
      expect(validator.validate("6ba7b810-9dad-11d1-80b4-00c04fd430c8")).toBe(true) // v1
      expect(validator.validate("6ba7b811-9dad-11d1-80b4-00c04fd430c8")).toBe(true)
      expect(validator.validate("6ba7b812-9dad-11d1-80b4-00c04fd430c8")).toBe(true)
      expect(validator.validate("6ba7b814-9dad-11d1-80b4-00c04fd430c8")).toBe(true)
    })

    it("should validate specific UUID versions when specified", () => {
      // UUID v1
      expect(validator.validate("6ba7b810-9dad-11d1-80b4-00c04fd430c8", 1)).toBe(true)
      expect(validator.validate("550e8400-e29b-41d4-a716-446655440000", 1)).toBe(false) // v4 not valid as v1

      // UUID v4
      expect(validator.validate("550e8400-e29b-41d4-a716-446655440000", 4)).toBe(true)
      expect(validator.validate("6ba7b810-9dad-11d1-80b4-00c04fd430c8", 4)).toBe(false) // v1 not valid as v4
    })

    it("should return false for invalid UUID strings", () => {
      expect(validator.validate("not-a-uuid")).toBe(false)
      expect(validator.validate("550e8400-e29b-41d4-a716-44665544000")).toBe(false) // Too short
      expect(validator.validate("550e8400-e29b-41d4-a716-4466554400000")).toBe(false) // Too long
      expect(validator.validate("550e8400-e29b-41d4-a716_446655440000")).toBe(false) // Invalid separator
      expect(validator.validate("550e8400-e29b-41d4-a716-GGGGGGGGGGGG")).toBe(false) // Invalid characters
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
    it("should return appropriate error message for invalid UUID strings", () => {
      expect(validator.getMessage("not-a-uuid")).toBe('"not-a-uuid" is not a valid UUID')
      expect(validator.getMessage("550e8400-e29b-41d4-a716-44665544000")).toBe(
        '"550e8400-e29b-41d4-a716-44665544000" is not a valid UUID',
      )
    })

    it("should include version information in error message when specified", () => {
      expect(validator.getMessage("550e8400-e29b-41d4-a716-446655440000", 1)).toBe(
        '"550e8400-e29b-41d4-a716-446655440000" is not a valid UUID (version 1)',
      )
      expect(validator.getMessage("6ba7b810-9dad-11d1-80b4-00c04fd430c8", 4)).toBe(
        '"6ba7b810-9dad-11d1-80b4-00c04fd430c8" is not a valid UUID (version 4)',
      )
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("uuid")
    })
  })
})
