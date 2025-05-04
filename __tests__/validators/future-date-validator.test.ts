import { FutureDateValidator } from "../../validators/future-date-validator"

describe("FutureDateValidator", () => {
  const validator = new FutureDateValidator()

  describe("validate", () => {
    beforeEach(() => {
      // Mock Date.now to return a fixed timestamp
      jest.spyOn(Date, "now").mockImplementation(() => new Date("2023-01-01T00:00:00Z").getTime())
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it("should return true for dates in the future", () => {
      expect(validator.validate(new Date("2023-01-02"))).toBe(true)
      expect(validator.validate(new Date("2024-01-01"))).toBe(true)
    })

    it("should return false for dates in the past", () => {
      expect(validator.validate(new Date("2022-12-31"))).toBe(false)
      expect(validator.validate(new Date("2022-01-01"))).toBe(false)
    })

    it("should return false for the current date", () => {
      expect(validator.validate(new Date("2023-01-01"))).toBe(false)
    })

    it("should support a custom comparison date", () => {
      expect(validator.validate(new Date("2023-01-15"), { comparisonDate: new Date("2023-01-10") })).toBe(true)
      expect(validator.validate(new Date("2023-01-05"), { comparisonDate: new Date("2023-01-10") })).toBe(false)
    })

    it("should return false for invalid dates", () => {
      expect(validator.validate(new Date("invalid"))).toBe(false)
    })

    it("should return false for non-Date values", () => {
      expect(validator.validate("2023-01-02")).toBe(false)
      expect(validator.validate(1672617600000)).toBe(false) // Timestamp for 2023-01-02
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for dates not in the future", () => {
      const now = new Date()
      const past = new Date(now.getTime() - 1000) // 1 second in the past

      expect(validator.getMessage(past)).toContain("is not in the future compared to")
    })

    it("should include the comparison date in the error message", () => {
      const comparisonDate = new Date("2023-01-10")
      const testDate = new Date("2023-01-05")

      expect(validator.getMessage(testDate, { comparisonDate })).toBe(
        `Date ${testDate.toISOString()} is not in the future compared to ${comparisonDate.toISOString()}`,
      )
    })

    it("should return appropriate error message for non-Date values", () => {
      expect(validator.getMessage("2023-01-02")).toBe("Expected a Date but got string")
      expect(validator.getMessage(null)).toBe("Expected a Date but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("future_date")
    })
  })
})
