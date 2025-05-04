import { BaseValidator } from "./base-validator"
import { ValidatorType, DataType } from "../enums"
import { isClass } from "../validations"
import { getTypeErrorMessage } from "../utils/type-checker"

/**
 * Validates that a value is a class constructor.
 *
 * In JavaScript, classes are special functions that can be defined using
 * the class syntax or as constructor functions. This validator checks if
 * a value is a class constructor.
 *
 * @example
 * const validator = new ClassValidator();
 *
 * // Valid classes
 * class TestClass {}
 * validator.validate(TestClass); // true
 *
 * // ES5 constructor function that behaves like a class
 * function ES5Class() {}
 * ES5Class.prototype.method = function() {};
 * validator.validate(ES5Class); // true (depending on implementation)
 *
 * // Invalid classes
 * validator.validate({}); // false (object)
 * validator.validate(() => {}); // false (arrow function)
 * validator.validate('class'); // false (string)
 */
export class ClassValidator extends BaseValidator {
  /**
   * Creates a new ClassValidator instance.
   *
   * @example
   * const validator = new ClassValidator();
   */
  constructor() {
    super(ValidatorType.CLASS)
  }

  /**
   * Creates a new instance of ClassValidator.
   *
   * @returns A new instance of ClassValidator
   *
   * @example
   * const validator = ClassValidator.make();
   * class TestClass {}
   * validator.validate(TestClass); // true
   */
  static make(): ClassValidator {
    return new ClassValidator()
  }

  /**
   * Validates that a value is a class.
   *
   * @param value - The value to validate
   * @returns True if the value is a class, false otherwise
   *
   * @example
   * const validator = new ClassValidator();
   * class TestClass {}
   * validator.validate(TestClass); // true
   * validator.validate({}); // false
   */
  validate(value: any): boolean {
    return isClass(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   *
   * @example
   * const validator = new ClassValidator();
   * validator.getMessage({}); // 'Expected class but got object'
   * validator.getMessage('not a class'); // 'Expected class but got string'
   */
  getMessage(value: any): string {
    return getTypeErrorMessage(value, DataType.CLASS)
  }
}
