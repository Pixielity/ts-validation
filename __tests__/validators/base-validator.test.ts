import { BaseValidator } from "../../validators/base-validator"

// Create a concrete implementation of BaseValidator for testing
class TestValidator extends BaseValidator {
  constructor(name: string) {
    super(name)
  }

  validate(value: any): boolean {
    return value === "valid"
  }

  getMessage(value: any): string {
    return `Value "${value}" is not valid`
  }
}

describe("BaseValidator", () => {
  describe("constructor", () => {
    it("should create an instance with valid name", () => {
      const validator = new TestValidator("test")
      expect(validator).toBeInstanceOf(BaseValidator)
      expect(validator.name()).toBe("test")
    })

    it("should throw an error when name is empty", () => {
      expect(() => new TestValidator("")).toThrow("Validator name must be a non-empty string")
    })

    it("should throw an error when name is not a string", () => {
      // @ts-ignore - Deliberately passing invalid type for testing
      expect(() => new TestValidator(123)).toThrow("Validator name must be a non-empty string")
      // @ts-ignore - Deliberately passing invalid type for testing
      expect(() => new TestValidator(null)).toThrow("Validator name must be a non-empty string")
    })
  })

  describe("name", () => {
    it("should return the validator name", () => {
      const validator = new TestValidator("test_name")
      expect(validator.name()).toBe("test_name")
    })
  })

  describe("validate", () => {
    it("should use the implementation from derived class", () => {
      const validator = new TestValidator("test")
      expect(validator.validate("valid")).toBe(true)
      expect(validator.validate("invalid")).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should use the implementation from derived class", () => {
      const validator = new TestValidator("test")
      expect(validator.getMessage("invalid")).toBe('Value "invalid" is not valid')
    })
  })
})
