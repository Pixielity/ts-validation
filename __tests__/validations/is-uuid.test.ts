import { isUUID } from "../validations/is-uuid"

describe("isUUID", () => {
  it("should return true for valid UUIDs", () => {
    expect(isUUID("550e8400-e29b-41d4-a716-446655440000")).toBe(true)
    expect(isUUID("550E8400-E29B-41D4-A716-446655440000")).toBe(true) // Case insensitive
  })

  it("should return true for valid UUID v1", () => {
    expect(isUUID("550e8400-e29b-11d4-a716-446655440000", 1)).toBe(true)
    expect(isUUID("550e8400-e29b-11d4-a716-446655440000")).toBe(true) // Without version
  })

  it("should return true for valid UUID v3", () => {
    expect(isUUID("550e8400-e29b-31d4-a716-446655440000", 3)).toBe(true)
    expect(isUUID("550e8400-e29b-31d4-a716-446655440000")).toBe(true) // Without version
  })

  it("should return true for valid UUID v4", () => {
    expect(isUUID("550e8400-e29b-41d4-a716-446655440000", 4)).toBe(true)
    expect(isUUID("550e8400-e29b-41d4-a716-446655440000")).toBe(true) // Without version
  })

  it("should return true for valid UUID v5", () => {
    expect(isUUID("550e8400-e29b-51d4-a716-446655440000", 5)).toBe(true)
    expect(isUUID("550e8400-e29b-51d4-a716-446655440000")).toBe(true) // Without version
  })

  it("should return false for UUIDs of the wrong version", () => {
    expect(isUUID("550e8400-e29b-41d4-a716-446655440000", 1)).toBe(false) // v4 UUID, not v1
    expect(isUUID("550e8400-e29b-11d4-a716-446655440000", 4)).toBe(false) // v1 UUID, not v4
  })

  it("should return false for invalid UUIDs", () => {
    expect(isUUID("not-a-uuid")).toBe(false)
    expect(isUUID("550e8400-e29b-41d4-a716")).toBe(false) // Too short
    expect(isUUID("550e8400-e29b-41d4-a716-446655440000-extra")).toBe(false) // Too long
    expect(isUUID("550e8400-e29b-41d4-g716-446655440000")).toBe(false) // Invalid character 'g'
    expect(isUUID("550e8400e29b41d4a716446655440000")).toBe(false) // Missing hyphens
  })

  it("should return false for empty strings", () => {
    expect(isUUID("")).toBe(false)
  })

  it("should return false for non-string values", () => {
    expect(isUUID(123)).toBe(false)
    expect(isUUID(true)).toBe(false)
    expect(isUUID({})).toBe(false)
    expect(isUUID([])).toBe(false)
    expect(isUUID(null)).toBe(false)
    expect(isUUID(undefined)).toBe(false)
  })
})
