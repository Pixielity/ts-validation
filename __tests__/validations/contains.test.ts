import { contains } from "../validations/contains"

describe("contains", () => {
  it("should return true when a string contains a substring", () => {
    expect(contains("hello world", "world")).toBe(true)
    expect(contains("hello world", "hello")).toBe(true)
    expect(contains("hello world", "o w")).toBe(true)
    expect(contains("hello world", "")).toBe(true) // Empty substring
  })

  it("should return false when a string does not contain a substring", () => {
    expect(contains("hello world", "universe")).toBe(false)
    expect(contains("hello world", "WORLD")).toBe(false) // Case-sensitive by default
  })

  it("should handle case-insensitive matching when specified", () => {
    expect(contains("hello world", "WORLD", { ignoreCase: true })).toBe(true)
    expect(contains("HELLO WORLD", "hello", { ignoreCase: true })).toBe(true)
    expect(contains("Hello World", "wOrLd", { ignoreCase: true })).toBe(true)
  })

  it("should return false for empty strings", () => {
    expect(contains("", "world")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(contains(123, "23")).toBe(false)
    expect(contains(true, "rue")).toBe(false)
    expect(contains({}, "obj")).toBe(false)
    expect(contains([], "arr")).toBe(false)
    expect(contains(null, "null")).toBe(false)
    expect(contains(undefined, "undefined")).toBe(false)
  })

  it("should return false for non-string substrings", () => {
    expect(contains("hello world", 123 as any)).toBe(false)
    expect(contains("hello world", true as any)).toBe(false)
    expect(contains("hello world", {} as any)).toBe(false)
    expect(contains("hello world", [] as any)).toBe(false)
    expect(contains("hello world", null as any)).toBe(false)
    expect(contains("hello world", undefined as any)).toBe(false)
  })
})
