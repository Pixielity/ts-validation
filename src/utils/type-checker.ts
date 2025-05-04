/**
 * @file Type checker utility functions
 * @description Provides utility functions for checking types of values
 */{ DataType } from "../enums/data-type.enum"

/**
 * @namespace TypeChecker
 * @description Collection of utility functions for type checking
 */
export namespace TypeChecker {
  /**
   * Determines the data type of a value
   * @param {any} value - The value to check
   * @returns {DataType} The data type enum value
   *
   * @example
   * // Check the type of a string
   * const type = TypeChecker.getType("hello");
   * console.log(type === DataType.String); // true
   */
  export function getType(value: any): DataType {
    if (value === null) {
      return DataType.Null
    }

    if (value === undefined) {
      return DataType.Undefined
    }

    if (typeof value === "string") {
      return DataType.String
    }

    if (typeof value === "number") {
      return DataType.Number
    }

    if (typeof value === "boolean") {
      return DataType.Boolean
    }

    if (Array.isArray(value)) {
      return DataType.Array
    }

    if (typeof value === "function") {
      // Check if it's a class constructor
      if (
        value.toString().substring(0, 5) === "class" ||
        (value.prototype && Object.getOwnPropertyNames(value.prototype).length > 1)
      ) {
        return DataType.Class
      }
      return DataType.Function
    }

    if (value instanceof Date) {
      return DataType.Date
    }

    if (typeof value === "symbol") {
      return DataType.Symbol
    }

    if (value instanceof RegExp) {
      return DataType.RegExp
    }

    if (value instanceof Promise) {
      return DataType.Promise
    }

    if (value instanceof Map) {
      return DataType.Map
    }

    if (value instanceof Set) {
      return DataType.Set
    }

    if (value instanceof Error) {
      return DataType.Error
    }

    if (typeof value === "object") {
      return DataType.Object
    }

    return DataType.Unknown
  }

  /**
   * Gets the string representation of a data type
   * @param {DataType} type - The data type enum value
   * @returns {string} The string representation of the data type
   *
   * @example
   * // Get the string representation of DataType.String
   * const typeName = TypeChecker.getTypeName(DataType.String);
   * console.log(typeName); // "string"
   */
  export function getTypeName(type: DataType): string {
    switch (type) {
      case DataType.String:
        return "string"
      case DataType.Number:
        return "number"
      case DataType.Boolean:
        return "boolean"
      case DataType.Array:
        return "array"
      case DataType.Object:
        return "object"
      case DataType.Null:
        return "null"
      case DataType.Undefined:
        return "undefined"
      case DataType.Function:
        return "function"
      case DataType.Date:
        return "date"
      case DataType.Symbol:
        return "symbol"
      case DataType.RegExp:
        return "regexp"
      case DataType.Promise:
        return "promise"
      case DataType.Map:
        return "map"
      case DataType.Set:
        return "set"
      case DataType.Error:
        return "error"
      case DataType.Class:
        return "class"
      default:
        return "unknown"
    }
  }
}
