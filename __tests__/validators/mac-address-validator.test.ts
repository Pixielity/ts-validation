import { MACAddressValidator } from "../../validators/mac-address-validator"

describe("MACAddressValidator", () => {
  const validator = new MACAddressValidator()

  describe("validate", () => {
    it("should return true for valid MAC addresses with colons", () => {
      expect(validator.validate("00:1A:2B:3C:4D:5E")).toBe(true)
      expect(validator.validate("00:1a:2b:3c:4d:5e")).toBe(true)
      expect(validator.validate("FF:FF:FF:FF:FF:FF")).toBe(true)
    })

    it("should return true for valid MAC addresses with hyphens", () => {
      expect(validator.validate("00-1A-2B-3C-4D-5E")).toBe(true)
      expect(validator.validate("00-1a-2b-3c-4d-5e")).toBe(true)
      expect(validator.validate("FF-FF-FF-FF-FF-FF")).toBe(true)
    })

    it("should return true for valid MAC addresses without separators", () => {
      expect(validator.validate("001A2B3C4D5E")).toBe(true)
      expect(validator.validate("001a2b3c4d5e")).toBe(true)
      expect(validator.validate("FFFFFFFFFFFF")).toBe(true)
    })

    it("should enforce separator type when specified", () => {
      expect(validator.validate("00:1A:2B:3C:4D:5E", { separator: ":" })).toBe(true)
      expect(validator.validate("00-1A-2B-3C-4D-5E", { separator: ":" })).toBe(false)

      expect(validator.validate("00-1A-2B-3C-4D-5E", { separator: "-" })).toBe(true)
      expect(validator.validate("00:1A:2B:3C:4D:5E", { separator: "-" })).toBe(false)

      expect(validator.validate("001A2B3C4D5E", { separator: "" })).toBe(true)
      expect(validator.validate("00:1A:2B:3C:4D:5E", { separator: "" })).toBe(false)
    })

    it("should return false for invalid MAC addresses", () => {
      expect(validator.validate("00:1A:2B:3C:4D")).toBe(false) // Too short
      expect(validator.validate("00:1A:2B:3C:4D:5E:6F")).toBe(false) // Too long
      expect(validator.validate("00:1A:2B:3C:4D:ZZ")).toBe(false) // Invalid characters
      expect(validator.validate("00:1A:2B:3C:4D:")).toBe(false) // Incomplete
      expect(validator.validate(":1A:2B:3C:4D:5E")).toBe(false) // Starts with separator
    })

    it("should return false for non-string values", () => {
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
      expect(validator.validate({})).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for invalid MAC addresses", () => {
      expect(validator.getMessage("00:1A:2B:3C:4D")).toBe('"00:1A:2B:3C:4D" is not a valid MAC address')
      expect(validator.getMessage("00:1A:2B:3C:4D:ZZ")).toBe('"00:1A:2B:3C:4D:ZZ" is not a valid MAC address')
    })

    it("should include separator information in the error message when provided", () => {
      expect(validator.getMessage("00:1A:2B:3C:4D:5E", { separator: "-" })).toBe(
        "\"00:1A:2B:3C:4D:5E\" is not a valid MAC address with separator '-'",
      )
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("mac_address")
    })
  })
})
