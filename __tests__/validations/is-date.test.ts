import { isDate } from "../validations/is-date"

describe("isDate", () => {
  it("should return true for valid Date objects", () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate(new Date("2023-01-01"))).toBe(true)
    expect(isDate(new Date(2023, 0, 1))).toBe(true)
  })

  it("should return false for invalid Date objects", () => {
    expect(isDate(new Date("invalid-date"))).toBe(false)
  })

  it("should return false for non-Date values", () => {
    expect(isDate("2023-01-01")).toBe(false)
    expect(isDate(1672531200000)).toBe(false) // timestamp
    expect(isDate({})).toBe(false)
    expect(isDate([])).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)
  })
})
