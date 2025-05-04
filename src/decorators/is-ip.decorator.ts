import type { ValidationOptions } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import { createValidatorDecorator } from "./decorator-factory"

/**
 * Validates if the value is an IP address.
 *
 * @param version - IP version (4 or 6)
 * @param options - Validation options
 * @returns Property decorator
 *
 * @example
 * class Server {
 *   @IsIp(4)
 *   ipAddress: string;
 * }
 */
export function IsIp(version?: "4" | "6", options?: ValidationOptions): PropertyDecorator {
  return createValidatorDecorator(ValidatorType.IP, options, version ? [version] : [])
}
