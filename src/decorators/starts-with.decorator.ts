import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value starts with a substring.
 *
 * @param prefix - The prefix to check for
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Product {
 *   @StartsWith('SKU-')
 *   productCode: string;
 * }
 */
export function StartsWith(prefix: string, options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.StartsWith, options, [prefix])
}
