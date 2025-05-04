import { isIP } from "../validations/is-ip"

describe("isIP", () => {
  it("should return true for valid IPv4 addresses", () => {
    expect(isIP("192.168.1.1")).toBe(true)
    expect(isIP("127.0.0.1")).toBe(true)
    expect(isIP("0.0.0.0")).toBe(true)
    expect(isIP("255.255.255.255")).toBe(true)
    expect(isIP("192.168.1.1", 4)).toBe(true) // Explicit IPv4
  })

  it("should return false for invalid IPv4 addresses", () => {
    expect(isIP("256.0.0.1")).toBe(false) // 256 is out of range
    expect(isIP("192.168.1")).toBe(false) // Missing octet
    expect(isIP("192.168.1.1.1")).toBe(false) // Too many octets
    expect(isIP("192.168.1.a")).toBe(false) // Non-numeric octet
    expect(isIP("192.168.01.1")).toBe(true) // Leading zero is allowed
  })

  it("should return true for valid IPv6 addresses", () => {
    expect(isIP("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe(true)
    expect(isIP("2001:db8:85a3:0:0:8a2e:370:7334")).toBe(true)
    expect(isIP("2001:db8:85a3::8a2e:370:7334")).toBe(true)
    expect(isIP("::1")).toBe(true) // Localhost
    expect(isIP("::")).toBe(true) // Unspecified address
    expect(isIP("2001:0db8:85a3:0000:0000:8a2e:0370:7334", 6)).toBe(true) // Explicit IPv6
  })

  it("should return false for invalid IPv6 addresses", () => {
    expect(isIP("2001:0db8:85a3:0000:0000:8a2e:0370:7334:extra")).toBe(false) // Too many segments
    expect(isIP("2001:0db8:85a3:0000:0000:8a2e:0370")).toBe(false) // Too few segments
    expect(isIP("2001:0db8:85a3:0000:0000:8a2e:0370:gggg")).toBe(false) // Invalid hex
  })

  it("should return false when checking IPv4 as IPv6", () => {
    expect(isIP("192.168.1.1", 6)).toBe(false)
  })

  it("should return false when checking IPv6 as IPv4", () => {
    expect(isIP("2001:db8::8a2e:370:7334", 4)).toBe(false)
  })

  it("should return false for empty strings", () => {
    expect(isIP("")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isIP(123)).toBe(false)
    expect(isIP(true)).toBe(false)
    expect(isIP({})).toBe(false)
    expect(isIP([])).toBe(false)
    expect(isIP(null)).toBe(false)
    expect(isIP(undefined)).toBe(false)
  })
})
