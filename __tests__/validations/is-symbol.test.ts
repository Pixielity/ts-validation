import { isSymbol } from "../validations/is-symbol"

describe("isSymbol", () => {
  it("should return true for symbol values", () => {
    expect(isSymbol(Symbol())).toBe(true)
    expect(isSymbol(Symbol("test"))).toBe(true)
    expect(isSymbol(Symbol.for("test"))).toBe(true)
    expect(isSymbol(Symbol.iterator)).toBe(true)
  })

  it("should return false for non-symbol values", () => {
    expect(isSymbol("symbol")).toBe(false)
    expect(isSymbol(123)).toBe(false)
    expect(isSymbol(true)).toBe(false)
    expect(isSymbol({})).toBe(false)
    expect(isSymbol([])).toBe(false)
    expect(isSymbol(null)).toBe(false)
    expect(isSymbol(undefined)).toBe(false)
    expect(isSymbol(() => {})).toBe(false)
  })
})
