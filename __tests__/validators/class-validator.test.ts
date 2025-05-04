import { ClassValidator } from "../../validators/class-validator"

describe("ClassValidator", () => {
  const validator = new ClassValidator()

  // Define some test classes
  class TestClass {}
  class ExtendedTestClass extends TestClass {}

  // ES5-style constructor function
  function ES5Class() {}
  ES5Class.prototype.method = () => {}

  describe("validate", () => {
    it("should return true for class constructors", () => {
      expect(validator.validate(TestClass)).toBe(true)
      expect(validator.validate(ExtendedTestClass)).toBe(true)
      expect(validator.validate(String)).toBe(true)
      expect(validator.validate(Number)).toBe(true)
      expect(validator.validate(Boolean)).toBe(true)
      expect(validator.validate(Array)).toBe(true)
      expect(validator.validate(Object)).toBe(true)
      expect(validator.validate(Date)).toBe(true)
    })

    it("should return true for ES5 constructor functions", () => {
      expect(validator.validate(ES5Class)).toBe(true)
    })

    it("should return false for class instances", () => {
      expect(validator.validate(new TestClass())).toBe(false)
      expect(validator.validate(new Date())).toBe(false)
    })

    it("should return false for non-class values", () => {
      expect(validator.validate({})).toBe(false)
      expect(validator.validate([])).toBe(false)
      expect(validator.validate(() => {})).toBe(false) // Arrow function
      expect(validator.validate("class")).toBe(false)
      expect(validator.validate(123)).toBe(false)
      expect(validator.validate(true)).toBe(false)
      expect(validator.validate(null)).toBe(false)
      expect(validator.validate(undefined)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-class values", () => {
      expect(validator.getMessage({})).toContain("Expected class but got")
      expect(validator.getMessage([])).toContain("Expected class but got")
      expect(validator.getMessage(() => {})).toContain("Expected class but got")
      expect(validator.getMessage("class")).toContain("Expected class but got")
      expect(validator.getMessage(123)).toContain("Expected class but got")
      expect(validator.getMessage(null)).toContain("Expected class but got")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("class")
    })
  })
})
