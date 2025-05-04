import { isError } from "../validations/is-error"

describe("isError", () => {
  it("should return true for Error objects", () => {
    expect(isError(new Error())).toBe(true)
    expect(isError(new Error("test"))).toBe(true)
  })

  it("should return true for Error subclass objects", () => {
    expect(isError(new TypeError())).toBe(true)
    expect(isError(new RangeError())).toBe(true)
    expect(isError(new SyntaxError())).toBe(true)
    expect(isError(new ReferenceError())).toBe(true)
  })

  it("should return false for non-Error values", () => {
    expect(isError({ message: "Error-like object" })).toBe(false)
    expect(isError("Error message")).toBe(false)
    expect(isError(123)).toBe(false)
    expect(isError(true)).toBe(false)
    expect(isError({})).toBe(false)
    expect(isError([])).toBe(false)
    expect(isError(null)).toBe(false)
    expect(isError(undefined)).toBe(false)
    expect(isError(() => {})).toBe(false)
  })
})
