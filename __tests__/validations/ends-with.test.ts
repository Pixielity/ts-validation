import { endsWith } from "../validations/ends-with"

describe("endsWith", () => {
  it("should return true when a string ends with a suffix", () => {
    expect(endsWith("hello world", "world")).toBe(true)
    expect(endsWith("hello", "o")).toBe(true)
    expect(endsWith("hello", "")).toBe(true) // Empty suffix
  })

  it("should return false when a string does not end with a suffix", () => {
    expect(endsWith("hello world", "hello")).toBe(false)
    expect(endsWith("hello world", "WORLD")).toBe(false) // Case-sensitive by default
  })

  it("should handle case-insensitive matching when specified", () => {
    expect(endsWith("hello world", "WORLD", { ignoreCase: true })).toBe(true)
    expect(endsWith("HELLO WORLD", "world", { ignoreCase: true })).toBe(true)
    expect(endsWith("Hello World", "wOrLd", { ignoreCase: true })).toBe(true)
  })

  it("should return false for empty strings", () => {
    expect(endsWith("", "world")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(endsWith(123, "23")).toBe(false)
    expect(endsWith(true, "ue")).toBe(false)
    expect(endsWith({}, "obj")).toBe(false)
    expect(endsWith([], "arr")).toBe(false)
    expect(endsWith(null, "null")).toBe(false)
    expect(endsWith(undefined, "undefined")).toBe(false)
  })

  it("should return false for non-string suffixes", () => {
    expect(endsWith("hello world", 123 as any)).toBe(false)
    expect(endsWith("hello world", true as any)).toBe(false)
    expect(endsWith("hello world", {} as any)).toBe(false)
    expect(endsWith("hello world", [] as any)).toBe(false)
    expect(endsWith("hello world", null as any)).toBe(false)
    expect(endsWith("hello world", undefined as any)).toBe(false)
  })
})
