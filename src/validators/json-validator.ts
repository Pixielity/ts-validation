import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isJSON } from "../validations"
import { isOfType } from "../utils/type-checker"
import { DataType } from "../enums"

/**
 * Validates that a string is valid JSON.
 *
 * JSON (JavaScript Object Notation) is a lightweight data-interchange format
 * that is easy for humans to read and write and easy for machines to parse and generate.
 *
 * @example
 * const validator = new JSONValidator();
 *
 * // Valid JSON strings
 * validator.validate('{"name":"John","age":30}'); // true
 * validator.validate('[1,2,3]'); // true
 * validator.validate('"simple string"'); // true
 * validator.validate('123'); // true
 * validator.validate('true'); // true
 *
 * // Invalid JSON strings
 * validator.validate('{name:"John"}'); // false - missing quotes around property name
 * validator.validate('{"name":"John",}'); // false - trailing comma
 * validator.validate('Not JSON'); // false
 * validator.validate({}); // false - object, not a JSON string
 */
export class JSONValidator extends BaseValidator {
  /**
   * Creates a new JSONValidator instance.
   *
   * @example
   * const validator = new JSONValidator();
   */
  constructor() {
    super(ValidatorType.JSON)
  }

  /**
   * Creates a new instance of JSONValidator.
   *
   * @returns A new instance of JSONValidator
   *
   * @example
   * const validator = JSONValidator.make();
   * validator.validate('{"name":"John","age":30}'); // true
   */
  static make(): JSONValidator {
    return new JSONValidator()
  }

  /**
   * Validates that a string is valid JSON.
   *
   * @param value - The value to validate
   * @returns True if the string is valid JSON, false otherwise
   *
   * @example
   * const validator = new JSONValidator();
   * validator.validate('{"name":"John","age":30}'); // true
   * validator.validate('{"invalid": json}'); // false
   */
  validate(value: any): boolean {
    return isJSON(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   *
   * @example
   * const validator = new JSONValidator();
   * validator.getMessage('{"invalid": json}'); // '"{"invalid": json}" is not valid JSON'
   * validator.getMessage(123); // 'Expected a string but got number'
   */
  getMessage(value: any): string {
    if (!isOfType(value, DataType.STRING)) {
      return `Expected a string but got ${typeof value}`
    }
    return `"${value}" is not valid JSON`
  }
}
