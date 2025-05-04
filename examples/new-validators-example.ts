{ validation } from "../validation"
import { ValidatorType } from "../enums"

console.log("New Validators Examples:")

// Symbol validation
const symbol = Symbol("test")
console.log(`Symbol('test') is a symbol:`, validation.isSymbol(symbol))
console.log(`"string" is a symbol:`, validation.isSymbol("string"))

// Class validation
class TestClass {}
console.log(`TestClass is a class:`, validation.isClass(TestClass))
console.log(
  `function() {} is a class:`,
  validation.isClass(() => {}),
)

// RegExp validation
const regex = /test/
console.log(`/test/ is a RegExp:`, validation.isRegExp(regex))
console.log(`"string" is a RegExp:`, validation.isRegExp("string"))

// Promise validation
const promise = Promise.resolve()
console.log(`Promise.resolve() is a Promise:`, validation.isPromise(promise))
console.log(`{} is a Promise:`, validation.isPromise({}))

// Map validation
const map = new Map()
console.log(`new Map() is a Map:`, validation.isMap(map))
console.log(`{} is a Map:`, validation.isMap({}))

// Set validation
const set = new Set()
console.log(`new Set() is a Set:`, validation.isSet(set))
console.log(`[] is a Set:`, validation.isSet([]))

// Error validation
const error = new Error("test")
console.log(`new Error() is an Error:`, validation.isError(error))
console.log(`{} is an Error:`, validation.isError({}))

// Using validate method with new validators
console.log("\nUsing validate method with new validators:")
console.log(`Symbol('test') is a symbol:`, validation.validate(symbol, ValidatorType.Symbol).valid)
console.log(`TestClass is a class:`, validation.validate(TestClass, ValidatorType.CLASS).valid)
console.log(`/test/ is a RegExp:`, validation.validate(regex, ValidatorType.REGEXP).valid)
console.log(`Promise.resolve() is a Promise:`, validation.validate(promise, ValidatorType.PROMISE).valid)
console.log(`new Map() is a Map:`, validation.validate(map, ValidatorType.MAP).valid)
console.log(`new Set() is a Set:`, validation.validate(set, ValidatorType.SET).valid)
console.log(`new Error() is an Error:`, validation.validate(error, ValidatorType.ERROR).valid)

// Error messages
console.log("\nError messages:")
const symbolResult = validation.validate("string", ValidatorType.Symbol)
if (!symbolResult.valid) {
  console.log(`Symbol validation error:`, symbolResult.message)
}

const classResult = validation.validate({}, ValidatorType.CLASS)
if (!classResult.valid) {
  console.log(`Class validation error:`, classResult.message)
}
