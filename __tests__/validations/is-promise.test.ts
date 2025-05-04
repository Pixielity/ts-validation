import { isPromise } from "../validations/is-promise"

describe("isPromise", () => {
  it("should return true for Promise objects", () => {
    expect(isPromise(Promise.resolve())).toBe(true)
    expect(isPromise(Promise.reject().catch(() => {}))).toBe(true)
    expect(isPromise(new Promise(() => {}))).toBe(true)
  })

  it("should return true for thenable objects", () => {
    expect(isPromise({ then: () => {} })).toBe(true)
    expect(isPromise({ then: () => {} })).toBe(true)
  })

  it("should return false for non-Promise and non-thenable values", () => {
    expect(isPromise({})).toBe(false)
    expect(isPromise({ then: "not a function" })).toBe(false)
    expect(isPromise([])).toBe(false)
    expect(isPromise("promise")).toBe(false)
    expect(isPromise(123)).toBe(false)
    expect(isPromise(true)).toBe(false)
    expect(isPromise(null)).toBe(false)
    expect(isPromise(undefined)).toBe(false)
    expect(isPromise(() => {})).toBe(false)
  })
})
