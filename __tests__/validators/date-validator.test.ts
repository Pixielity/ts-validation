import { DateValidator } from "../../validators/date-validator"

describe("DateValidator", () => {
  const validator = new DateValidator()

  describe("validate", () => {
    it("should return true for valid Date objects", () => {
      expect(validator.validate(new Date())).toBe(true)
      expect(validator.validate(new Date("2023-01-01"))).toBe(true)
      expect(validator.validate(new Date(1672531200000))).toBe(true)
    })

    it("should return false for invalid Date objects", () => {
      expect(validator.validate(new Date("invalid"))).toBe(false)
    })

    it("should return false for non-Date values", () => {
      expect(validator.validate("2023-01-01")).toBe(false)
      expect(validator.validate(1672531200000)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for invalid Date objects", () => {
      expect(validator.getMessage(new Date("invalid"))).toBe("Expected a valid Date but got an invalid Date")
    })

    it("should return appropriate error message for non-Date values", () => {
      expect(validator.getMessage("2023-01-01")).toBe("Expected a Date but got string")
      expect(validator.getMessage(1672531200000)).toBe("Expected a Date but got number")
      expect(validator.getMessage(null)).toBe("Expected a Date but got null")
      expect(validator.getMessage(undefined)).toBe("Expected a Date but got undefined")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("date")
    })
  })
})
