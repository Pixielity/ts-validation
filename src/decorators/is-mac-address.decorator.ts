import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is a MAC address.
 *
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class NetworkDevice {
 *   @IsMacAddress()
 *   macAddress: string;
 * }
 */
export function IsMacAddress(options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.MAC_ADDRESS, options)
}
