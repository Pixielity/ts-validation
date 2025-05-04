import { JWTValidator } from "../../validators/jwt-validator"

describe("JWTValidator", () => {
  const validator = new JWTValidator()

  describe("validate", () => {
    it("should return true for valid JWT tokens", () => {
      // Valid JWT format with three parts separated by dots
      expect(
        validator.validate(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        ),
      ).toBe(true)

      // Another valid JWT
      expect(
        validator.validate(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbmUgRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cMErWtEf7DxCXJl8C9q0L7ttkm-Ex54UWHsOCMGbtUc",
        ),
      ).toBe(true)
    })

    it("should return false for invalid JWT tokens", () => {
      expect(validator.validate("not-a-jwt-token")).toBe(false)
      expect(validator.validate("header.payload")).toBe(false) // Missing signature part
      expect(validator.validate("header.payload.signature.extra")).toBe(false) // Too many parts
      expect(validator.validate("header..signature")).toBe(false) // Empty payload
      expect(validator.validate(".payload.signature")).toBe(false) // Empty header
      expect(validator.validate("header.payload.")).toBe(false) // Empty signature
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
    it("should return appropriate error message for invalid JWT tokens", () => {
      expect(validator.getMessage("not-a-jwt-token")).toBe('"not-a-jwt-token" is not a valid JWT')
      expect(validator.getMessage("header.payload")).toBe('"header.payload" is not a valid JWT')
    })

    it("should return appropriate error message for non-string values", () => {
      expect(validator.getMessage(123)).toBe("Expected a string but got number")
      expect(validator.getMessage(null)).toBe("Expected a string but got null")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("jwt")
    })
  })
})
