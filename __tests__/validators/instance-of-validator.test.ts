import { InstanceOfValidator } from "../../validators/instance-of-validator"

describe("InstanceOfValidator", () => {
  const validator = new InstanceOfValidator()

  // Define some test classes
  class TestClass {}
  class ExtendedTestClass extends TestClass {}

  describe("validate", () => {
    it("should return true for instances of the specified class", () => {
      expect(validator.validate(new TestClass(), TestClass)).toBe(true)
      expect(validator.validate(new ExtendedTestClass(), TestClass)).toBe(true) // Inheritance
      expect(validator.validate(new Date(), Date)).toBe(true)
      expect(validator.validate(new String("test"), String)).toBe(true)
      expect(validator.validate(new Number(123), Number)).toBe(true)
      expect(validator.validate(new Boolean(true), Boolean)).toBe(true)
    })

    it("should return false for non-instances of the specified class", () => {
      expect(validator.validate(new TestClass(), Date)).toBe(false)
      expect(validator.validate(new Date(), TestClass)).toBe(false)
      expect(validator.validate("test", String)).toBe(false) // Primitive string, not String object
      expect(validator.validate(123, Number)).toBe(false) // Primitive number, not Number object
      expect(validator.validate(true, Boolean)).toBe(false) // Primitive boolean, not Boolean object
    })

    it("should return false for null or undefined values", () => {
      expect(validator.validate(null, TestClass)).toBe(false)
      expect(validator.validate(undefined, TestClass)).toBe(false)
    })

    it("should return false when class constructor is not provided", () => {
      // @ts-ignore - Deliberately passing invalid type for testing
      expect(validator.validate(new TestClass(), null)).toBe(false)
      // @ts-ignore - Deliberately passing invalid type for testing
      expect(validator.validate(new TestClass(), undefined)).toBe(false)
      // @ts-ignore - Deliberately passing invalid type for testing
      expect(validator.validate(new TestClass(), "not a class")).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-instances", () => {
      expect(validator.getMessage(new TestClass(), Date)).toBe("Value is not an instance of Date")
      expect(validator.getMessage("test", String)).toBe("Value is not an instance of String")
    })

    it("should return appropriate error message for null or undefined values", () => {
      expect(validator.getMessage(null, TestClass)).toBe("Value is not an instance of TestClass")
      expect(validator.getMessage(undefined, TestClass)).toBe("Value is not an instance of TestClass")
    })

    it("should handle unnamed classes gracefully", () => {
      const UnnamedClass = (() => class {})()
      expect(validator.getMessage(new TestClass(), UnnamedClass)).toBe("Value is not an instance of specified class")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("instance_of")
    })
  })
})
