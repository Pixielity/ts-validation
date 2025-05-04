import { BaseValidator } from "./base-validator"
import { ValidatorType } from "../enums"
import { isJWT } from "../validations"

/**
 * Validates that a string is a valid JWT.
 */
export class JWTValidator extends BaseValidator {
  /**
   * Creates a new JWTValidator.
   */
  constructor() {
    super(ValidatorType.JWT)
  }

  /**
   * Creates a new instance of JWTValidator.
   *
   * @returns A new instance of JWTValidator
   */
  static make(): JWTValidator {
    return new JWTValidator()
  }

  /**
   * Validates that a string is a valid JWT.
   *
   * @param value - The value to validate
   * @returns True if the string is a valid JWT, false otherwise
   */
  validate(value: any): boolean {
    return isJWT(value)
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

    return `"${value}" is not a valid JWT`
  }
}
