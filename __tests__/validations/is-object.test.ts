import { isObject } from "../validations/is-object"

describe("isObject", () => {
  it("should return true for object values", () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ name: "John" })).toBe(true)
    expect(isObject(new Object())).toBe(true)
    expect(isObject(Object.create(null))).toBe(true)
  })

  it("should return false for null", () => {
    expect(isObject(null)).toBe(false)
  })

  it("should return false for arrays", () => {
    expect(isObject([])).toBe(false)
    expect(isObject([1, 2, 3])).toBe(false)
  })

  it("should return false for other non-object values", () => {
    expect(isObject("object")).toBe(false)
    expect(isObject(123)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(undefined)).toBe(false)
    expect(isObject(() => {})).toBe(false)
    expect(isObject(new Date())).toBe(false)
  })
})
