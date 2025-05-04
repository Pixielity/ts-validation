import { HasPropertyValidator } from "../../validators/has-property-validator"

describe("HasPropertyValidator", () => {
  const validator = new HasPropertyValidator()

  describe("validate", () => {
    it("should return true for objects with the specified property", () => {
      expect(validator.validate({ name: "John" }, "name")).toBe(true)
      expect(validator.validate({ age: 30 }, "age")).toBe(true)
      expect(validator.validate({ name: "John", age: 30 }, "name")).toBe(true)
      expect(validator.validate({ name: undefined }, "name")).toBe(true) // Property exists but is undefined
    })

    it("should return true for objects with inherited properties", () => {
      const proto = { inherited: "value" }
      const obj = Object.create(proto)
      obj.own = "value"

      expect(validator.validate(obj, "own")).toBe(true)
      expect(validator.validate(obj, "inherited")).toBe(true)
    })

    it("should return false for objects without the specified property", () => {
      expect(validator.validate({}, "name")).toBe(false)
      expect(validator.validate({ age: 30 }, "name")).toBe(false)
      expect(validator.validate({ name: "John" }, "age")).toBe(false)
    })

    it("should return false for non-object values", () => {
      expect(validator.validate("string", "length")).toBe(false) // String has length property but is not an object
      expect(validator.validate(123, "toString")).toBe(false) // Number has toString method but is not an object
      expect(validator.validate(null, "property")).toBe(false)
      expect(validator.validate(undefined, "property")).toBe(false)
    })
  })

  describe("getMessage", () => {
    it("should return appropriate error message for objects without the specified property", () => {
      expect(validator.getMessage({}, "name")).toBe('Object does not have property "name"')
      expect(validator.getMessage({ age: 30 }, "name")).toBe('Object does not have property "name"')
    })

    it("should return appropriate error message for non-object values", () => {
      expect(validator.getMessage("string", "length")).toBe("Expected an object but got string")
      expect(validator.getMessage(123, "toString")).toBe("Expected an object but got number")
      expect(validator.getMessage(null, "property")).toBe("Expected an object but got null")
      expect(validator.getMessage(undefined, "property")).toBe("Expected an object but got undefined")
    })
  })

  describe("name", () => {
    it("should return the correct validator name", () => {
      expect(validator.name()).toBe("has_property")
    })
  })
})
