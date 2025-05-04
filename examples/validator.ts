{ Validation, validation } from ".."
import { type DataType, ValidatorType } from "../enums"

console.log("Combined Validator Examples:")

// Instance methods
console.log("\nInstance Methods:")
console.log(`"hello" is a string:`, validation.isString("hello"))
console.log(`42 is a number:`, validation.isNumber(42))
console.log(`"user@example.com" is an email:`, validation.isEmail("user@example.com"))

// Static type validation
console.log("\nStatic Type Validation:")
const stringResult = Validation.validate<DataType.STRING>("hello")
console.log(`"hello" is a string:`, stringResult.valid)

const numberResult = Validation.validate<DataType.NUMBER>("not a number")
console.log(`"not a number" is a number:`, numberResult.valid)
if (!numberResult.valid) {
  console.log("Error:", numberResult.message)
}

// Register a custom validator
Validation.registerValidator(
  "positiveNumber",
  (value) => typeof value === "number" && value > 0,
  (value) => `Expected a positive number but got ${typeof value === "number" ? value : typeof value}`,
)

const positiveNumberResult = Validation.validate<"positiveNumber">(42)
console.log(`42 is a positive number:`, positiveNumberResult.valid)

const negativeNumberResult = Validation.validate<"positiveNumber">(-42)
console.log(`-42 is a positive number:`, negativeNumberResult.valid)
if (!negativeNumberResult.valid) {
  console.log("Error:", negativeNumberResult.message)
}

// Using the validate method
console.log("\nUsing the validate method:")
const emailValidationResult = validation.validate("user@example.com", ValidatorType.EMAIL)
console.log(`"user@example.com" is an email:`, emailValidationResult.valid)

const invalidEmailValidationResult = validation.validate("not-an-email", ValidatorType.EMAIL)
console.log(`"not-an-email" is an email:`, invalidEmailValidationResult.valid)
if (!invalidEmailValidationResult.valid) {
  console.log("Error:", invalidEmailValidationResult.message)
}

// Validate using a custom validator
const positiveNumberValidationResult = validation.validate(42, "positiveNumber")
console.log(`42 is a positive number:`, positiveNumberValidationResult.valid)

// Validate with additional arguments
const lengthValidationResult = validation.validate("hello", ValidatorType.Length, { min: 3, max: 10 })
console.log(`"hello" length between 3 and 10:`, lengthValidationResult.valid)

const invalidLengthValidationResult = validation.validate("hello", ValidatorType.Length, { min: 10 })
console.log(`"hello" length >= 10:`, invalidLengthValidationResult.valid)
if (!invalidLengthValidationResult.valid) {
  console.log("Error:", invalidLengthValidationResult.message)
}
