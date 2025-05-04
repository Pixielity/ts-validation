import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a UUID.
 *
 * @param version - UUID version (3, 4, 5, or 'all')
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class User {
 *   @IsUuid(4)
 *   id: string;
 * }
 */
export function IsUuid(version?: "3" | "4" | "5" | "all", options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.UUID, options, version ? [version] : [])
}
