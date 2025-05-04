import { ArrayOfValidator } from "../../validators/array-of-validator"

describe("ArrayOfValidator", () => {
  const validator = new ArrayOfValidator()

  describe("validate", () => {
    it("should return true for arrays with elements of the specified type", () => {
      // Array of strings
      expect(validator.validate(["a", "b", "c"], (item) => typeof item === "string")).toBe(true)

      // Array of numbers
      expect(validator.validate([1, 2, 3], (item) => typeof item === "number")).toBe(true)

      // Array of booleans
      expect(validator.validate([true, false], (item) => typeof item === "boolean")).toBe(true)

      // Empty array (always valid regardless of type validator)
      expect(validator.validate([], (item) => typeof item === "string")).toBe(true)
    })

    it("should return false for arrays with elements not of the specified type", () => {
      // Mixed array when expecting only strings
      expect(validator.validate(["a", 1, "c"], (item) => typeof item === "string")).toBe(false)

      // Mixed array when expecting only numbers
      expect(validator.validate([1, "b", 3], (item) => typeof item === "number")).toBe(false)
    })

    it("should return false for non-array values", () => {
      expect(validator.validate("not an array", (item) => typeof item === "string")).toBe(false)
      expect(validator.validate(123, (item) => typeof item === "number")).toBe(false)
      expect(validator.validate({}, (item) => typeof item === "object")).toBe(false)
      expect(validator.validate(null, (item) => item === null)).toBe(false)
      expect(validator.validate(undefined, (item) => item === undefined)).toBe(false)
    })

    it("should work with custom type validators", () => {
      // Custom validator for objects with a specific property
      const hasNameProperty = (item: any) => typeof item === "object" && item !== null && "name" in item

      expect(validator.validate([{ name: "John" }, { name: "Jane" }], hasNameProperty)).toBe(true)
      expect(validator.validate([{ name: "John" }, { age: 30 }], hasNameProperty)).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for non-array values", () => {
      expect(validator.getMessage("not an array")).toBe("Expected an array but got string")
      expect(validator.getMessage(123)).toBe("Expected an array but got number")
      expect(validator.getMessage(null)).toBe("Expected an array but got null")
    })

    it("should return appropriate error message for arrays with incorrect element types", () => {
      expect(validator.getMessage(["a", 1, "c"])).toBe("Array contains elements of incorrect type")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("array_of")
    })
  })
})
