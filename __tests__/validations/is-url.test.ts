import { isUrl } from "../validations/is-url"

describe("isUrl", () => {
  it("should return true for valid URLs", () => {
    expect(isUrl("https://example.com")).toBe(true)
    expect(isUrl("http://example.com")).toBe(true)
    expect(isUrl("https://www.example.com")).toBe(true)
    expect(isUrl("http://example.com/path")).toBe(true)
    expect(isUrl("https://example.com/path?query=value")).toBe(true)
    expect(isUrl("http://localhost:3000")).toBe(true)
    expect(isUrl("ftp://example.com")).toBe(true)
  })

  it("should return false for invalid URLs", () => {
    expect(isUrl("example.com")).toBe(false) // missing protocol
    expect(isUrl("http://")).toBe(false)
    expect(isUrl("http:example.com")).toBe(false)
    expect(isUrl("http:/example.com")).toBe(false)
    expect(isUrl("://example.com")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isUrl(123)).toBe(false)
    expect(isUrl({})).toBe(false)
    expect(isUrl([])).toBe(false)
    expect(isUrl(null)).toBe(false)
    expect(isUrl(undefined)).toBe(false)
  })
})
