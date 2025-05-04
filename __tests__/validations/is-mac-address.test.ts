import { isMACAddress } from "../validations/is-mac-address"

describe("isMACAddress", () => {
  it("should return true for valid MAC addresses with default separator", () => {
    expect(isMACAddress("00:11:22:33:44:55")).toBe(true)
    expect(isMACAddress("AA:BB:CC:DD:EE:FF")).toBe(true)
    expect(isMACAddress("aa:bb:cc:dd:ee:ff")).toBe(true)
    expect(isMACAddress("0A:1B:2C:3D:4E:5F")).toBe(true)
  })

  it("should return true for valid MAC addresses with custom separator", () => {
    expect(isMACAddress("00-11-22-33-44-55", { separator: "-" })).toBe(true)
    expect(isMACAddress("0011.2233.4455", { separator: "." })).toBe(true)
  })

  it("should return false for invalid MAC addresses", () => {
    expect(isMACAddress("00:11:22:33:44")).toBe(false) // Too short
    expect(isMACAddress("00:11:22:33:44:55:66")).toBe(false) // Too long
    expect(isMACAddress("GG:11:22:33:44:55")).toBe(false) // Invalid hex
    expect(isMACAddress("00:11:22:33:44:5")).toBe(false) // Incomplete octet
    expect(isMACAddress("00:11:22:33:44:555")).toBe(false) // Octet too long
  })

  it("should return false for MAC addresses with wrong separator", () => {
    expect(isMACAddress("00-11-22-33-44-55")).toBe(false) // Using - instead of :
    expect(isMACAddress("00:11-22:33:44:55")).toBe(false) // Mixed separators
  })

  it("should return false for MAC addresses without separators", () => {
    expect(isMACAddress("001122334455")).toBe(false)
  })

  it("should return false for empty strings", () => {
    expect(isMACAddress("")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isMACAddress(123)).toBe(false)
    expect(isMACAddress(true)).toBe(false)
    expect(isMACAddress({})).toBe(false)
    expect(isMACAddress([])).toBe(false)
    expect(isMACAddress(null)).toBe(false)
    expect(isMACAddress(undefined)).toBe(false)
  })
})
