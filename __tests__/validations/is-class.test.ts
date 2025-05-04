import { isClass } from "../validations/is-class"

describe("isClass", () => {
  it("should return true for class declarations", () => {
    expect(isClass(class {})).toBe(true)
    expect(isClass(class TestClass {})).toBe(true)
  })

  it("should return true for class expressions", () => {
    const TestClass = class {}
    expect(isClass(TestClass)).toBe(true)
  })

  it("should return false for regular functions", () => {
    expect(isClass(() => {})).toBe(false)
    expect(isClass(function testFunc() {})).toBe(false)
  })

  it("should return false for arrow functions", () => {
    expect(isClass(() => {})).toBe(false)
  })

  it("should return false for other non-class values", () => {
    expect(isClass({})).toBe(false)
    expect(isClass([])).toBe(false)
    expect(isClass("class")).toBe(false)
    expect(isClass(123)).toBe(false)
    expect(isClass(true)).toBe(false)
    expect(isClass(null)).toBe(false)
    expect(isClass(undefined)).toBe(false)
  })
})
