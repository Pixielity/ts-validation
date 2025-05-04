import { startsWith } from "../validations/starts-with"

describe("startsWith", () => {
  it("should return true when a string starts with a prefix", () => {
    expect(startsWith("hello world", "hello")).toBe(true)
    expect(startsWith("hello", "h")).toBe(true)
    expect(startsWith("hello", "")).toBe(true) // Empty prefix
  })

  it("should return false when a string does not start with a prefix", () => {
    expect(startsWith("hello world", "world")).toBe(false)
    expect(startsWith("hello world", "HELLO")).toBe(false) // Case-sensitive by default
  })

  it("should handle case-insensitive matching when specified", () => {
    expect(startsWith("hello world", "HELLO", { ignoreCase: true })).toBe(true)
    expect(startsWith("HELLO WORLD", "hello", { ignoreCase: true })).toBe(true)
    expect(startsWith("Hello World", "hElLo", { ignoreCase: true })).toBe(true)
  })

  it("should return false for empty strings", () => {
    expect(startsWith("", "hello")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(startsWith(123, "12")).toBe(false)
    expect(startsWith(true, "tr")).toBe(false)
    expect(startsWith({}, "obj")).toBe(false)
    expect(startsWith([], "arr")).toBe(false)
    expect(startsWith(null, "null")).toBe(false)
    expect(startsWith(undefined, "undefined")).toBe(false)
  })

  it("should return false for non-string prefixes", () => {
    expect(startsWith("hello world", 123 as any)).toBe(false)
    expect(startsWith("hello world", true as any)).toBe(false)
    expect(startsWith("hello world", {} as any)).toBe(false)
    expect(startsWith("hello world", [] as any)).toBe(false)
    expect(startsWith("hello world", null as any)).toBe(false)
    expect(startsWith("hello world", undefined as any)).toBe(false)
  })
})
