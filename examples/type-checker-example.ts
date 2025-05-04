{ isOfType, getType, getTypeErrorMessage } from "../utils/type-checker"
import { DataType, ValidatorType } from "../enums"
import { validation } from "../validation"

console.log("Type Checker Examples:")

// Check types using isOfType
console.log("\nChecking types with isOfType:")
console.log(`"hello" is a string:`, isOfType("hello", DataType.STRING))
console.log(`42 is a number:`, isOfType(42, DataType.NUMBER))
console.log(`true is a boolean:`, isOfType(true, DataType.BOOLEAN))
console.log(`[] is an array:`, isOfType([], DataType.ARRAY))
console.log(`{} is an object:`, isOfType({}, DataType.OBJECT))
console.log(`null is null:`, isOfType(null, DataType.NULL))
console.log(`undefined is undefined:`, isOfType(undefined, DataType.UNDEFINED))
console.log(`null is null or undefined:`, isOfType(null, DataType.NULL_OR_UNDEFINED))
console.log(`undefined is null or undefined:`, isOfType(undefined, DataType.NULL_OR_UNDEFINED))
console.log(
  `function is a function:`,
  isOfType(() => {}, DataType.FUNCTION),
)
console.log(`new Date() is a date:`, isOfType(new Date(), DataType.DATE))

// Get types using getType
console.log("\nGetting types with getType:")
console.log(`Type of "hello":`, getType("hello"))
console.log(`Type of 42:`, getType(42))
console.log(`Type of true:`, getType(true))
console.log(`Type of []:`, getType([]))
console.log(`Type of {}:`, getType({}))
console.log(`Type of null:`, getType(null))
console.log(`Type of undefined:`, getType(undefined))
console.log(
  `Type of function:`,
  getType(() => {}),
)
console.log(`Type of new Date():`, getType(new Date()))

// Get error messages using getTypeErrorMessage
console.log("\nGetting error messages with getTypeErrorMessage:")
console.log(`Error for 42 when expecting string:`, getTypeErrorMessage(42, DataType.STRING))
console.log(`Error for "hello" when expecting number:`, getTypeErrorMessage("hello", DataType.NUMBER))
console.log(`Error for {} when expecting array:`, getTypeErrorMessage({}, DataType.ARRAY))

// Using validators with enums
console.log("\nUsing validators with enums:")
console.log(`"hello" is a string:`, validation.validate("hello", ValidatorType.String).valid)
console.log(`42 is a number:`, validation.validate(42, ValidatorType.NUMBER).valid)
console.log(`"user@example.com" is an email:`, validation.validate("user@example.com", ValidatorType.EMAIL).valid)
console.log(`"not-an-email" is an email:`, validation.validate("not-an-email", ValidatorType.EMAIL).valid)

// Using numeric validators
console.log("\nUsing numeric validators:")
console.log(`42 is positive:`, validation.validate(42, ValidatorType.POSITIVE).valid)
console.log(`-42 is negative:`, validation.validate(-42, ValidatorType.NEGATIVE).valid)
console.log(`0 is zero:`, validation.validate(0, ValidatorType.Zero).valid)
console.log(`42 is in range [0, 100]:`, validation.validate(42, ValidatorType.IN_RANGE, 0, 100).valid)
console.log(`42 is even:`, validation.validate(42, ValidatorType.EVEN).valid)
console.log(`43 is odd:`, validation.validate(43, ValidatorType.ODD).valid)
console.log(`10 is divisible by 2:`, validation.validate(10, ValidatorType.DIVISIBLE_BY, 2).valid)

// Using string validators
console.log("\nUsing string validators:")
console.log(`"hello" is lowercase:`, validation.validate("hello", ValidatorType.LOWERCASE).valid)
console.log(`"HELLO" is uppercase:`, validation.validate("HELLO", ValidatorType.Uppercase).valid)
console.log(`"123" is numeric:`, validation.validate("123", ValidatorType.NUMERIC).valid)
console.log(`"hello" contains "el":`, validation.validate("hello", ValidatorType.CONTAINS, "el").valid)
console.log(`"hello" starts with "he":`, validation.validate("hello", ValidatorType.StartsWith, "he").valid)
console.log(`"hello" ends with "lo":`, validation.validate("hello", ValidatorType.ENDS_WITH, "lo").valid)
