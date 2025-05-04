import { isNumeric } from "../validations/is-numeric"

describe("isNumeric", () => {
  it("should return true for strings containing only numeric characters", () => {
    expect(isNumeric("123")).toBe(true)
    expect(isNumeric("0")).toBe(true)
    expect(isNumeric("123456789")).toBe(true)
  })

  it("should return true for numbers", () => {
    expect(isNumeric(123)).toBe(true)
    expect(isNumeric(0)).toBe(true)
  })

  it("should return false for strings containing non-numeric characters", () => {
    expect(isNumeric("123a")).toBe(false)
    expect(isNumeric("a123")).toBe(false)
    expect(isNumeric("hello")).toBe(false)
    expect(isNumeric("123 456")).toBe(false)
  })

  it("should return false for decimal numbers by default", () => {
    expect(isNumeric("123.45")).toBe(false)
    expect(isNumeric(123.45)).toBe(false)
  })

  it("should return true for decimal numbers when allowDecimal is true", () => {
    expect(isNumeric("123.45", { allowDecimal: true })).toBe(true)
    expect(isNumeric(123.45, { allowDecimal: true })).toBe(true)
    expect(isNumeric("0.5", { allowDecimal: true })).toBe(true)
  })

  it("should return false for negative numbers by default", () => {
    expect(isNumeric("-123")).toBe(false)
    expect(isNumeric(-123)).toBe(false)
  })

  it("should return true for negative numbers when allowNegative is true", () => {
    expect(isNumeric("-123", { allowNegative: true })).toBe(true)
    expect(isNumeric(-123, { allowNegative: true })).toBe(true)
  })

  it("should return true for negative decimal numbers when both options are true", () => {
    expect(isNumeric("-123.45", { allowDecimal: true, allowNegative: true })).toBe(true)
    expect(isNumeric(-123.45, { allowDecimal: true, allowNegative: true })).toBe(true)
  })

  it("should return false for empty strings", () => {
    expect(isNumeric("")).toBe(false)
  })

  it("should return false for non-string and non-number values", () => {
    expect(isNumeric(true)).toBe(false)
    expect(isNumeric({})).toBe(false)
    expect(isNumeric([])).toBe(false)
    expect(isNumeric(null)).toBe(false)
    expect(isNumeric(undefined)).toBe(false)
  })
})
