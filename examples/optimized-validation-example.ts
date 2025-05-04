{ validation } from "../validation"
import { ValidatorType } from "../enums"

// Basic type validations
console.log("String validation:", validation.isString("hello"))
console.log("Number validation:", validation.isNumber(123))
console.log("Boolean validation:", validation.isBoolean(true))

// String validations
console.log("Email validation:", validation.isEmail("test@example.com"))
console.log("URL validation:", validation.isUrl("https://example.com"))
console.log("Alpha validation:", validation.isAlpha("hello"))

// Number validations
console.log("Integer validation:", validation.isInteger(42))
console.log("Positive validation:", validation.isPositive(10))
console.log("In range validation:", validation.isInRange(5, 1, 10))

// Using the validate method
const result = validation.validate("hello", ValidatorType.String)
console.log("Validation result:", result.isValid, result.message)

// Using the getErrorMessage method
const errorMessage = validation.getErrorMessage(ValidatorType.NUMBER, "not a number")
console.log("Error message:", errorMessage)
