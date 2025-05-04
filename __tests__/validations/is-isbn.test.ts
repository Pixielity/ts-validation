import { isISBN } from "../validations/is-isbn"

describe("isISBN", () => {
  it("should return true for valid ISBN-10", () => {
    expect(isISBN("0306406152")).toBe(true)
    expect(isISBN("0-306-40615-2")).toBe(true) // With hyphens
    expect(isISBN("0306406152", 10)).toBe(true) // Explicit version
    expect(isISBN("0131103628")).toBe(true)
    expect(isISBN("0-13-110362-8")).toBe(true) // With hyphens
    expect(isISBN("043942089X")).toBe(true) // With X check digit
  })

  it("should return true for valid ISBN-13", () => {
    expect(isISBN("9780306406157")).toBe(true)
    expect(isISBN("978-0-306-40615-7")).toBe(true) // With hyphens
    expect(isISBN("9780306406157", 13)).toBe(true) // Explicit version
    expect(isISBN("9781491950296")).toBe(true)
    expect(isISBN("978-1-4919-5029-6")).toBe(true) // With hyphens
  })

  it("should return false for invalid ISBN-10", () => {
    expect(isISBN("0306406153")).toBe(false) // Invalid check digit
    expect(isISBN("030640615")).toBe(false) // Too short
    expect(isISBN("03064061521")).toBe(false) // Too long
    expect(isISBN("030640615X", 10)).toBe(false) // X not in correct position
    expect(isISBN("0306406152", 13)).toBe(false) // ISBN-10 when ISBN-13 is required
  })

  it("should return false for invalid ISBN-13", () => {
    expect(isISBN("9780306406158")).toBe(false) // Invalid check digit
    expect(isISBN("978030640615")).toBe(false) // Too short
    expect // Invalid check digit
    expect(isISBN("978030640615")).toBe(false) // Too short
    expect(isISBN("97803064061578")).toBe(false) // Too long
    expect(isISBN("9780306406157", 10)).toBe(false) // ISBN-13 when ISBN-10 is required
  })

  it("should return false for non-ISBN strings", () => {
    expect(isISBN("not-an-isbn")).toBe(false)
    expect(isISBN("123456789X")).toBe(false) // Looks like ISBN-10 but invalid
    expect(isISBN("1234567890123")).toBe(false) // Looks like ISBN-13 but invalid
  })

  it("should return false for empty strings", () => {
    expect(isISBN("")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isISBN(123)).toBe(false)
    expect(isISBN(true)).toBe(false)
    expect(isISBN({})).toBe(false)
    expect(isISBN([])).toBe(false)
    expect(isISBN(null)).toBe(false)
    expect(isISBN(undefined)).toBe(false)
  })
})
