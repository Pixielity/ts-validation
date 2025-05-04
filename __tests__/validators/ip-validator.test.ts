import { IPValidator } from "../../validators/ip-validator"

describe("IPValidator", () => {
  const validator = new IPValidator()

  describe("validate", () => {
    it("should return true for valid IPv4 addresses", () => {
      expect(validator.validate("192.168.1.1")).toBe(true)
      expect(validator.validate("127.0.0.1")).toBe(true)
      expect(validator.validate("0.0.0.0")).toBe(true)
      expect(validator.validate("255.255.255.255")).toBe(true)
    })

    it("should return true for valid IPv6 addresses", () => {
      expect(validator.validate("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe(true)
      expect(validator.validate("2001:db8:85a3::8a2e:370:7334")).toBe(true) // Shortened form
      expect(validator.validate("::1")).toBe(true) // Localhost
      expect(validator.validate("::")).toBe(true) // Unspecified address
      expect(validator.validate("fe80::1")).toBe(true) // Link-local address
    })

    it("should validate specific IP versions when specified", () => {
      // IPv4
      expect(validator.validate("192.168.1.1", 4)).toBe(true)
      expect(validator.validate("2001:db8:85a3::8a2e:370:7334", 4)).toBe(false)

      // IPv6
      expect(validator.validate("2001:db8:85a3::8a2e:370:7334", 6)).toBe(true)
      expect(validator.validate("192.168.1.1", 6)).toBe(false)
    })

    it("should return false for invalid IP addresses", () => {
      // Invalid IPv4
      expect(validator.validate("256.0.0.1")).toBe(false) // Invalid octet
      expect(validator.validate("192.168.1")).toBe(false) // Missing octet
      expect(validator.validate("192.168.1.1.1")).toBe(false) // Too many octets
      expect(validator.validate("192.168.1.a")).toBe(false) // Non-numeric octet

      // Invalid IPv6
      expect(validator.validate("2001:db8:85a3:8a2e:370:7334")).toBe(false) // Too few segments
      expect(validator.validate("2001:db8:85a3::8a2e::7334")).toBe(false) // Multiple :: groups
      expect(validator.validate("2001:db8:85a3:zzzz:8a2e:370:7334")).toBe(false) // Invalid characters
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for invalid IP addresses", () => {
      expect(validator.getMessage("256.0.0.1")).toBe('"256.0.0.1" is not a valid IP address')
      expect(validator.getMessage("192.168.1")).toBe('"192.168.1" is not a valid IP address')
    })

    it("should include version information in error message when specified", () => {
      expect(validator.getMessage("192.168.1.1", 6)).toBe('"192.168.1.1" is not a valid IP address (IPv6)')
      expect(validator.getMessage("2001:db8:85a3::8a2e:370:7334", 4)).toBe(
        '"2001:db8:85a3::8a2e:370:7334" is not a valid IP address (IPv4)',
      )
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("ip")
    })
  })
})
