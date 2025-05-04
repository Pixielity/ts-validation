import { ValidatorFactory } from "../../validators/validator-factory"
import { DataType } from "../../enums/data-type.enum"
import { StringValidator } from "../../validators/string-validator"
import { NumberValidator } from "../../validators/number-validator"
import { BooleanValidator } from "../../validators/boolean-validator"
import { ArrayValidator } from "../../validators/array-validator"
import { ObjectValidator } from "../../validators/object-validator"
import { NullValidator } from "../../validators/null-validator"
import { UndefinedValidator } from "../../validators/undefined-validator"
import { NullOrUndefinedValidator } from "../../validators/null-or-undefined-validator"
import { FunctionValidator } from "../../validators/function-validator"
import { DateValidator } from "../../validators/date-validator"

describe("ValidatorFactory", () => {
  describe("createValidator", () => {
    it("should create a StringValidator for DataType.String", () => {
      const validator = ValidatorFactory.createValidator(DataType.String)
      expect(validator).toBeInstanceOf(StringValidator)
    })

    it("should create a NumberValidator for DataType.Number", () => {
      const validator = ValidatorFactory.createValidator(DataType.NUMBER)
      expect(validator).toBeInstanceOf(NumberValidator)
    })

    it("should create a BooleanValidator for DataType.Boolean", () => {
      const validator = ValidatorFactory.createValidator(DataType.BOOLEAN)
      expect(validator).toBeInstanceOf(BooleanValidator)
    })

    it("should create an ArrayValidator for DataType.Array", () => {
      const validator = ValidatorFactory.createValidator(DataType.ARRAY)
      expect(validator).toBeInstanceOf(ArrayValidator)
    })

    it("should create an ObjectValidator for DataType.Object", () => {
      const validator = ValidatorFactory.createValidator(DataType.OBJECT)
      expect(validator).toBeInstanceOf(ObjectValidator)
    })

    it("should create a NullValidator for DataType.Null", () => {
      const validator = ValidatorFactory.createValidator(DataType.NULL)
      expect(validator).toBeInstanceOf(NullValidator)
    })

    it("should create an UndefinedValidator for DataType.Undefined", () => {
      const validator = ValidatorFactory.createValidator(DataType.Undefined)
      expect(validator).toBeInstanceOf(UndefinedValidator)
    })

    it("should create a NullOrUndefinedValidator for DataType.NullOrUndefined", () => {
      const validator = ValidatorFactory.createValidator(DataType.NULL_OR_UNDEFINED)
      expect(validator).toBeInstanceOf(NullOrUndefinedValidator)
    })

    it("should create a FunctionValidator for DataType.Function", () => {
      const validator = ValidatorFactory.createValidator(DataType.FUNCTION)
      expect(validator).toBeInstanceOf(FunctionValidator)
    })

    it("should create a DateValidator for DataType.Date", () => {
      const validator = ValidatorFactory.createValidator(DataType.DATE)
      expect(validator).toBeInstanceOf(DateValidator)
    })

    it("should throw an error for unsupported data type", () => {
      // @ts-ignore - Deliberately passing invalid type for testing
      expect(() => ValidatorFactory.createValidator("invalid_type")).toThrow("Unsupported data type: invalid_type")
    })
  })
})
