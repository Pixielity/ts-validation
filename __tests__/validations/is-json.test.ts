import { isJSON } from "../validations/is-json"

describe("isJSON", () => {
  it("should return true for valid JSON strings", () => {
    expect(isJSON('{"name":"John","age":30}')).toBe(true)
    expect(isJSON("[1,2,3]")).toBe(true)
    expect(isJSON('"hello"')).toBe(true)
    expect(isJSON("123")).toBe(true)
    expect(isJSON("true")).toBe(true)
    expect(isJSON("false")).toBe(true)
    expect(isJSON("null")).toBe(true)
    expect(isJSON('{"nested":{"key":"value"}}')).toBe(true)
  })

  it("should return false for invalid JSON strings", () => {
    expect(isJSON('{"name":"John","age":30')).toBe(false) // Missing closing brace
    expect(isJSON('{"name":"John",age:30}')).toBe(false) // Missing quotes around property
    expect(isJSON("{'name':'John'")).toBe(false) // Single quotes not valid in JSON
    expect(isJSON("Not JSON")).toBe(false)
    expect(isJSON("undefined")).toBe(false) // undefined is not valid JSON
  })

  it("should return false for empty strings", () => {
    expect(isJSON("")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isJSON(123)).toBe(false)
    expect(isJSON(true)).toBe(false)
    expect(isJSON({})).toBe(false)
    expect(isJSON([])).toBe(false)
    expect(isJSON(null)).toBe(false)
    expect(isJSON(undefined)).toBe(false)
  })
})
