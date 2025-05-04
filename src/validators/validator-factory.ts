import { DataType } from "../enums/data-type.enum"
import type { BaseValidator } from "./base-validator"
import { StringValidator } from "./string-validator"
import { NumberValidator } from "./number-validator"
import { BooleanValidator } from "./boolean-validator"
import { ArrayValidator } from "./array-validator"
import { ObjectValidator } from "./object-validator"
import { NullValidator } from "./null-validator"
import { UndefinedValidator } from "./undefined-validator"
import { NullOrUndefinedValidator } from "./null-or-undefined-validator"
import { FunctionValidator } from "./function-validator"
import { DateValidator } from "./date-validator"
import { SymbolValidator } from "./symbol-validator"
import { ClassValidator } from "./class-validator"
import { RegExpValidator } from "./regexp-validator"
import { PromiseValidator } from "./promise-validator"
import { MapValidator } from "./map-validator"
import { SetValidator } from "./set-validator"
import { ErrorValidator } from "./error-validator"

/**
 * @class ValidatorFactory
 * @description Factory class for creating validator instances based on data types.
 * This factory provides a centralized way to create appropriate validators for different data types,
 * making it easier to work with the validation system.
 *
 * @example
 * // Create a validator for a string
 * const stringValidator = ValidatorFactory.createValidator(DataType.String);
 *
 * // Create a validator for a number
 * const numberValidator = ValidatorFactory.createValidator(DataType.Number);
 *
 * // Use the created validator
 * const result = stringValidator.validate('Hello, world!');
 * console.log(result.isValid); // true
 */
export class ValidatorFactory {
  /**
   * @static
   * @method createValidator
   * @description Creates a validator instance based on the specified data type.
   * This method returns an appropriate validator instance for the given data type,
   * allowing for type-specific validation.
   *
   * @param {DataType} dataType - The data type for which to create a validator.
   * @returns {BaseValidator} A validator instance appropriate for the specified data type.
   *
   * @example
   * // Create a validator for an array
   * const arrayValidator = ValidatorFactory.createValidator(DataType.Array);
   *
   * // Validate an array
   * const result = arrayValidator.validate([1, 2, 3]);
   * console.log(result.isValid); // true
   *
   * @throws {Error} If an unsupported data type is provided.
   */
  public static createValidator(dataType: DataType): BaseValidator {
    switch (dataType) {
      case DataType.String:
        return StringValidator.make()
      case DataType.Number:
        return NumberValidator.make()
      case DataType.Boolean:
        return BooleanValidator.make()
      case DataType.Array:
        return ArrayValidator.make()
      case DataType.Object:
        return ObjectValidator.make()
      case DataType.Null:
        return NullValidator.make()
      case DataType.Undefined:
        return UndefinedValidator.make()
      case DataType.NullOrUndefined:
        return NullOrUndefinedValidator.make()
      case DataType.Function:
        return FunctionValidator.make()
      case DataType.Date:
        return DateValidator.make()
      case DataType.Symbol:
        return SymbolValidator.make()
      case DataType.Class:
        return ClassValidator.make()
      case DataType.RegExp:
        return RegExpValidator.make()
      case DataType.Promise:
        return PromiseValidator.make()
      case DataType.Map:
        return MapValidator.make()
      case DataType.Set:
        return SetValidator.make()
      case DataType.Error:
        return ErrorValidator.make()
      default:
        throw new Error(`Unsupported data type: ${dataType}`)
    }
  }
}
