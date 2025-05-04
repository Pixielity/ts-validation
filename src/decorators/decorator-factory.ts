import { registerDecorator, type ValidationOptions, type ValidationArguments } from "class-validator"
import { ValidatorType } from "../enums/validator-type.enum"
import * as validators from "../validators"
import * as validations from "../validations"

/**
 * Creates a property decorator for validation using our validator classes.
 *
 * @param validatorType - The type of validator to use from our ValidatorType enum
 * @param options - Validation options
 * @param validationParams - Additional parameters for the validator
 * @returns Property decorator
 *
 * @example
 * // Creating a decorator using a validator class
 * function IsEmail(options?: ValidationOptions): PropertyDecorator {
 *   return createValidatorDecorator(ValidatorType.EMAIL, options);
 * }
 */
export function createValidatorDecorator(
  validatorType: ValidatorType,
  options?: ValidationOptions,
  validationParams: any[] = [],
): PropertyDecorator {
  return (object: Object, propertyName: string) => {
    // Convert the enum value to a validator class name
    // Format: EMAIL -> EmailValidator, STRING -> StringValidator, etc.
    const validatorTypeName = ValidatorType[validatorType]
    const formattedTypeName = validatorTypeName.charAt(0).toUpperCase() + validatorTypeName.slice(1).toLowerCase()
    const validatorClassName = `${formattedTypeName}Validator`

    // Get the validator class from our validators
    const ValidatorClass = (validators as any)[validatorClassName]

    if (!ValidatorClass) {
      throw new Error(`Validator class ${validatorClassName} not found`)
    }

    registerDecorator({
      name: ValidatorType[validatorType].toLowerCase(),
      target: object.constructor,
      propertyName: propertyName,
      options: options,
      constraints: validationParams,
      validator: {
        validate(value: any, args: ValidationArguments) {
          // Create an instance of the validator class
          const validator = new ValidatorClass(...args.constraints)
          // Use the validator to validate the value
          return validator.validate(value).isValid
        },
        defaultMessage(args: ValidationArguments) {
          // Create an instance of the validator class
          const validator = new ValidatorClass(...args.constraints)
          // Get the validation result
          const result = validator.validate(args.value)
          // Return the custom message if provided, otherwise use the validator's error message
          return (
            options?.message ||
            result.message ||
            `${propertyName} failed ${ValidatorType[validatorType].toLowerCase()} validation`
          )
        },
      },
    })
  }
}

/**
 * Creates a property decorator for validation using our validation functions.
 *
 * @param validatorType - The type of validator to use from our ValidatorType enum
 * @param options - Validation options
 * @param validationParams - Additional parameters for the validation function
 * @returns Property decorator
 *
 * @example
 * // Creating a decorator using a validation function
 * function IsHexColor(options?: ValidationOptions): PropertyDecorator {
 *   return createValidationFnDecorator(ValidatorType.HEX_COLOR, options);
 * }
 */
export function createValidationFnDecorator(
  validatorType: ValidatorType,
  options?: ValidationOptions,
  validationParams: any[] = [],
): PropertyDecorator {
  return (object: Object, propertyName: string) => {
    // Convert the validator type to the validation function name
    const validatorTypeName = ValidatorType[validatorType]
    const formattedTypeName = validatorTypeName.charAt(0).toUpperCase() + validatorTypeName.slice(1).toLowerCase()
    const validationFnName = `is${formattedTypeName}`

    // Get the validation function from our validations
    const validationFn = (validations as any)[validationFnName]

    if (!validationFn) {
      throw new Error(`Validation function ${validationFnName} not found`)
    }

    registerDecorator({
      name: ValidatorType[validatorType].toLowerCase(),
      target: object.constructor,
      propertyName: propertyName,
      options: options,
      constraints: validationParams,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return validationFn(value, ...args.constraints)
        },
        defaultMessage(args: ValidationArguments) {
          return options?.message || `${propertyName} failed ${ValidatorType[validatorType].toLowerCase()} validation`
        },
      },
    })
  }
}