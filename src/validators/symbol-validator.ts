import { BaseValidator } from "./base-validator"
import { ValidatorType, DataType } from "../enums"
import { isSymbol } from "../validations"
import { getTypeErrorMessage } from "../utils/type-checker"

/**
 * Validates that a value is a Symbol.
 *
 * Symbol is a primitive data type in JavaScript that represents a unique identifier.
 * This validator checks if a value is of type Symbol.
 *
 * @example
 * const validator = new SymbolValidator();
 *
 * // Valid symbols
 * validator.validate(Symbol()); // true
 * validator.validate(Symbol('description')); // true
 * validator.validate(Symbol.for('key')); // true
 *
 * // Invalid symbols
 * validator.validate('symbol'); // false (string)
 * validator.validate({}); // false (object)
 * validator.validate(null); // false (null)
 */
export class SymbolValidator extends BaseValidator {
  /**
   * Creates a new SymbolValidator instance.
   *
   * @example
   * const validator = new SymbolValidator();
   */
  constructor() {
    super(ValidatorType.Symbol)
  }

  /**
   * Creates a new instance of SymbolValidator.
   *
   * @returns A new instance of SymbolValidator
   *
   * @example
   * const validator = SymbolValidator.make();
   * validator.validate(Symbol()); // true
   */
  static make(): SymbolValidator {
    return new SymbolValidator()
  }

  /**
   * Validates that a value is a symbol.
   *
   * @param value - The value to validate
   * @returns True if the value is a symbol, false otherwise
   *
   * @example
   * const validator = new SymbolValidator();
   * validator.validate(Symbol()); // true
   * validator.validate('not a symbol'); // false
   */
  validate(value: any): boolean {
    return isSymbol(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   *
   * @example
   * const validator = new SymbolValidator();
   * validator.getMessage('not a symbol'); // 'Expected symbol but got string'
   * validator.getMessage(123); // 'Expected symbol but got number'
   */
  getMessage(value: any): string {
    return getTypeErrorMessage(value, DataType.SYMBOL)
  }
}
