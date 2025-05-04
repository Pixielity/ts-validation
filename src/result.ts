/**
 * @file Result class for validation operations
 * @description Provides a standardized way to handle validation results with success/failure states and error messages
 */{ DataType } from "./enums/data-type.enum"

/**
 * @class Result
 * @description Represents the result of a validation operation
 * @template T The type of the value being validated
 */
export class Result<T = any> {
  /**
   * @private
   * @property {boolean} _isValid - Indicates whether the validation was successful
   */
  private _isValid: boolean

  /**
   * @private
   * @property {string | null} _errorMessage - Error message if validation failed, null otherwise
   */
  private _errorMessage: string | null

  /**
   * @private
   * @property {T} _value - The value that was validated
   */
  private _value: T

  /**
   * @private
   * @property {DataType} _dataType - The data type of the validated value
   */
  private _dataType: DataType

  /**
   * Creates a new Result instance
   * @param {boolean} isValid - Whether the validation was successful
   * @param {T} value - The value that was validated
   * @param {string | null} [errorMessage=null] - Error message if validation failed
   * @param {DataType} [dataType=DataType.Unknown] - The data type of the validated value
   */
  constructor(isValid: boolean, value: T, errorMessage: string | null = null, dataType: DataType = DataType.Unknown) {
    this._isValid = isValid
    this._value = value
    this._errorMessage = errorMessage
    this._dataType = dataType
  }

  /**
   * Gets whether the validation was successful
   * @returns {boolean} True if validation passed, false otherwise
   */
  get isValid(): boolean {
    return this._isValid
  }

  /**
   * Gets whether the validation failed
   * @returns {boolean} True if validation failed, false otherwise
   */
  get isInvalid(): boolean {
    return !this._isValid
  }

  /**
   * Gets the error message if validation failed
   * @returns {string | null} Error message or null if validation was successful
   */
  get errorMessage(): string | null {
    return this._errorMessage
  }

  /**
   * Gets the validated value
   * @returns {T} The value that was validated
   */
  get value(): T {
    return this._value
  }

  /**
   * Gets the data type of the validated value
   * @returns {DataType} The data type enum value
   */
  get dataType(): DataType {
    return this._dataType
  }

  /**
   * Creates a successful validation result
   * @static
   * @template U The type of the value being validated
   * @param {U} value - The value that was validated
   * @param {DataType} [dataType=DataType.Unknown] - The data type of the validated value
   * @returns {Result<U>} A successful Result instance
   *
   * @example
   * // Create a successful result for a string value
   * const result = Result.success("hello", DataType.String);
   * console.log(result.isValid); // true
   * console.log(result.value); // "hello"
   */
  static success<U>(value: U, dataType: DataType = DataType.Unknown): Result<U> {
    return new Result<U>(true, value, null, dataType)
  }

  /**
   * Creates a failed validation result
   * @static
   * @template U The type of the value being validated
   * @param {U} value - The value that was validated
   * @param {string} errorMessage - Error message describing the validation failure
   * @param {DataType} [dataType=DataType.Unknown] - The data type of the validated value
   * @returns {Result<U>} A failed Result instance
   *
   * @example
   * // Create a failed result for an invalid email
   * const result = Result.failure("not-an-email", "Invalid email format", DataType.String);
   * console.log(result.isValid); // false
   * console.log(result.errorMessage); // "Invalid email format"
   */
  static failure<U>(value: U, errorMessage: string, dataType: DataType = DataType.Unknown): Result<U> {
    return new Result<U>(false, value, errorMessage, dataType)
  }
}
