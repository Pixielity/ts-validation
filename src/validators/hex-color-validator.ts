import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isHexColor } from "../validations"

/**
 * Validates that a string is a valid hex color.
 */
export class HexColorValidator extends BaseValidator {
  /**
   * Creates a new HexColorValidator.
   */
  constructor() {
    super(ValidatorType.HEX_COLOR)
  }

  /**
   * Creates a new instance of HexColorValidator.
   *
   * @returns A new instance of HexColorValidator
   */
  static make(): HexColorValidator {
    return new HexColorValidator()
  }

  /**
   * Validates that a string is a valid hex color.
   *
   * @param value - The value to validate
   * @returns True if the string is a valid hex color, false otherwise
   */
  validate(value: any): boolean {
    return isHexColor(value)
  }

  /**
   * Gets an error message for a failed validation.
   *
   * @param value - The value that failed validation
   * @returns Error message string
   */
  getMessage(value: any): string {
    if (typeof value !== "string") {
      return `Expected a string but got ${typeof value}`
    }

    return `"${value}" is not a valid hex color`
  }
}
