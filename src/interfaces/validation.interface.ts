import * as IValidator from '../validators'

/**
 * @interface IValidation
 * @description Interface for the Validation class that provides a unified interface for all validation operations.
 * This interface defines all the methods available in the Validation class, with proper parameter and return types.
 */
export interface IValidation {
  /**
   * @method string
   * @description Sets the validator to validate strings.
   * @returns {StringValidator} A StringValidator instance for chaining.
   */
  string(): IValidator.StringValidator

  /**
   * @method number
   * @description Sets the validator to validate numbers.
   * @returns {NumberValidator} A NumberValidator instance for chaining.
   */
  number(): IValidator.NumberValidator

  /**
   * @method boolean
   * @description Sets the validator to validate booleans.
   * @returns {BooleanValidator} A BooleanValidator instance for chaining.
   */
  boolean(): IValidator.BooleanValidator

  /**
   * @method array
   * @description Sets the validator to validate arrays.
   * @returns {ArrayValidator} An ArrayValidator instance for chaining.
   */
  array(): IValidator.ArrayValidator

  /**
   * @method object
   * @description Sets the validator to validate objects.
   * @returns {ObjectValidator} An ObjectValidator instance for chaining.
   */
  object(): IValidator.ObjectValidator

  /**
   * @method null
   * @description Sets the validator to validate null values.
   * @returns {NullValidator} A NullValidator instance for chaining.
   */
  null(): IValidator.NullValidator

  /**
   * @method undefined
   * @description Sets the validator to validate undefined values.
   * @returns {UndefinedValidator} An UndefinedValidator instance for chaining.
   */
  undefined(): IValidator.UndefinedValidator

  /**
   * @method nullOrUndefined
   * @description Sets the validator to validate null or undefined values.
   * @returns {NullOrUndefinedValidator} A NullOrUndefinedValidator instance for chaining.
   */
  nullOrUndefined(): IValidator.NullOrUndefinedValidator

  /**
   * @method function
   * @description Sets the validator to validate functions.
   * @returns {FunctionValidator} A FunctionValidator instance for chaining.
   */
  function(): IValidator.FunctionValidator

  /**
   * @method date
   * @description Sets the validator to validate dates.
   * @returns {DateValidator} A DateValidator instance for chaining.
   */
  date(): IValidator.DateValidator

  /**
   * @method email
   * @description Sets the validator to validate email addresses.
   * @returns {EmailValidator} An EmailValidator instance for chaining.
   */
  email(): IValidator.EmailValidator

  /**
   * @method url
   * @description Sets the validator to validate URLs.
   * @returns {UrlValidator} A UrlValidator instance for chaining.
   */
  url(): IValidator.UrlValidator

  /**
   * @method empty
   * @description Sets the validator to validate if a value is empty.
   * @returns {EmptyValidator} An EmptyValidator instance for chaining.
   */
  empty(): IValidator.EmptyValidator

  /**
   * @method notEmpty
   * @description Sets the validator to validate if a value is not empty.
   * @returns {NotEmptyValidator} A NotEmptyValidator instance for chaining.
   */
  notEmpty(): IValidator.NotEmptyValidator

  /**
   * @method alpha
   * @description Sets the validator to validate if a string contains only alphabetic characters.
   * @returns {AlphaValidator} An AlphaValidator instance for chaining.
   */
  alpha(): IValidator.AlphaValidator

  /**
   * @method alphanumeric
   * @description Sets the validator to validate if a string contains only alphanumeric characters.
   * @returns {AlphanumericValidator} An AlphanumericValidator instance for chaining.
   */
  alphanumeric(): IValidator.AlphanumericValidator

  /**
   * @method numeric
   * @description Sets the validator to validate if a string contains only numeric characters.
   * @returns {NumericValidator} A NumericValidator instance for chaining.
   */
  numeric(): IValidator.NumericValidator

  /**
   * @method lowercase
   * @description Sets the validator to validate if a string is lowercase.
   * @returns {LowercaseValidator} A LowercaseValidator instance for chaining.
   */
  lowercase(): IValidator.LowercaseValidator

  /**
   * @method uppercase
   * @description Sets the validator to validate if a string is uppercase.
   * @returns {UppercaseValidator} An UppercaseValidator instance for chaining.
   */
  uppercase(): IValidator.UppercaseValidator

  /**
   * @method hexadecimal
   * @description Sets the validator to validate if a string is a hexadecimal value.
   * @returns {HexadecimalValidator} A HexadecimalValidator instance for chaining.
   */
  hexadecimal(): IValidator.HexadecimalValidator

  /**
   * @method base64
   * @description Sets the validator to validate if a string is base64 encoded.
   * @returns {Base64Validator} A Base64Validator instance for chaining.
   */
  base64(): IValidator.Base64Validator

  /**
   * @method json
   * @description Sets the validator to validate if a string is valid JSON.
   * @returns {JSONValidator} A JSONValidator instance for chaining.
   */
  json(): IValidator.JSONValidator

  /**
   * @method uuid
   * @description Sets the validator to validate if a string is a UUID.
   * @returns {UUIDValidator} A UUIDValidator instance for chaining.
   */
  uuid(): IValidator.UUIDValidator

  /**
   * @method ip
   * @description Sets the validator to validate if a string is an IP address.
   * @returns {IPValidator} An IPValidator instance for chaining.
   */
  ip(): IValidator.IPValidator

  /**
   * @method macAddress
   * @description Sets the validator to validate if a string is a MAC address.
   * @returns {MACAddressValidator} A MACAddressValidator instance for chaining.
   */
  macAddress(): IValidator.MACAddressValidator

  /**
   * @method isbn
   * @description Sets the validator to validate if a string is an ISBN.
   * @returns {ISBNValidator} An ISBNValidator instance for chaining.
   */
  isbn(): IValidator.ISBNValidator

  /**
   * @method postalCode
   * @description Sets the validator to validate if a string is a postal code.
   * @param {string} [countryCode='US'] - The country code for which to validate the postal code.
   * @returns {PostalCodeValidator} A PostalCodeValidator instance for chaining.
   */
  postalCode(countryCode?: string): IValidator.PostalCodeValidator

  /**
   * @method phoneNumber
   * @description Sets the validator to validate if a string is a phone number.
   * @param {string} [countryCode='US'] - The country code for which to validate the phone number.
   * @returns {PhoneNumberValidator} A PhoneNumberValidator instance for chaining.
   */
  phoneNumber(countryCode?: string): IValidator.PhoneNumberValidator

  /**
   * @method strongPassword
   * @description Sets the validator to validate if a string is a strong password.
   * @returns {StrongPasswordValidator} A StrongPasswordValidator instance for chaining.
   */
  strongPassword(): IValidator.StrongPasswordValidator

  /**
   * @method length
   * @description Sets the validator to validate if a string or array has a specific length.
   * @param {number} min - The minimum length.
   * @param {number} [max] - The maximum length. If not provided, the value must be exactly `min` length.
   * @returns {LengthValidator} A LengthValidator instance for chaining.
   */
  length(min: number, max?: number): IValidator.LengthValidator

  /**
   * @method matches
   * @description Sets the validator to validate if a string matches a regular expression.
   * @param {RegExp} pattern - The regular expression pattern to match against.
   * @returns {MatchesValidator} A MatchesValidator instance for chaining.
   */
  matches(pattern: RegExp): IValidator.MatchesValidator

  /**
   * @method contains
   * @description Sets the validator to validate if a string contains a substring.
   * @param {string} substring - The substring to check for.
   * @returns {ContainsValidator} A ContainsValidator instance for chaining.
   */
  contains(substring: string): IValidator.ContainsValidator

  /**
   * @method startsWith
   * @description Sets the validator to validate if a string starts with a specific prefix.
   * @param {string} prefix - The prefix to check for.
   * @returns {StartsWithValidator} A StartsWithValidator instance for chaining.
   */
  startsWith(prefix: string): IValidator.StartsWithValidator

  /**
   * @method endsWith
   * @description Sets the validator to validate if a string ends with a specific suffix.
   * @param {string} suffix - The suffix to check for.
   * @returns {EndsWithValidator} An EndsWithValidator instance for chaining.
   */
  endsWith(suffix: string): IValidator.EndsWithValidator

  /**
   * @method integer
   * @description Sets the validator to validate if a number is an integer.
   * @returns {IntegerValidator} An IntegerValidator instance for chaining.
   */
  integer(): IValidator.IntegerValidator

  /**
   * @method float
   * @description Sets the validator to validate if a number is a float.
   * @returns {FloatValidator} A FloatValidator instance for chaining.
   */
  float(): IValidator.FloatValidator

  /**
   * @method positive
   * @description Sets the validator to validate if a number is positive.
   * @returns {PositiveValidator} A PositiveValidator instance for chaining.
   */
  positive(): IValidator.PositiveValidator

  /**
   * @method negative
   * @description Sets the validator to validate if a number is negative.
   * @returns {NegativeValidator} A NegativeValidator instance for chaining.
   */
  negative(): IValidator.NegativeValidator

  /**
   * @method zero
   * @description Sets the validator to validate if a number is zero.
   * @returns {ZeroValidator} A ZeroValidator instance for chaining.
   */
  zero(): IValidator.ZeroValidator

  /**
   * @method nan
   * @description Sets the validator to validate if a value is NaN.
   * @returns {NaNValidator} A NaNValidator instance for chaining.
   */
  nan(): IValidator.NaNValidator

  /**
   * @method inRange
   * @description Sets the validator to validate if a number is within a specific range.
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {InRangeValidator} An InRangeValidator instance for chaining.
   */
  inRange(min: number, max: number): IValidator.InRangeValidator

  /**
   * @method even
   * @description Sets the validator to validate if a number is even.
   * @returns {EvenValidator} An EvenValidator instance for chaining.
   */
  even(): IValidator.EvenValidator

  /**
   * @method odd
   * @description Sets the validator to validate if a number is odd.
   * @returns {OddValidator} An OddValidator instance for chaining.
   */
  odd(): IValidator.OddValidator

  /**
   * @method divisibleBy
   * @description Sets the validator to validate if a number is divisible by another number.
   * @param {number} divisor - The divisor to check against.
   * @returns {DivisibleByValidator} A DivisibleByValidator instance for chaining.
   */
  divisibleBy(divisor: number): IValidator.DivisibleByValidator

  /**
   * @method symbol
   * @description Sets the validator to validate if a value is a symbol.
   * @returns {SymbolValidator} A SymbolValidator instance for chaining.
   */
  symbol(): IValidator.SymbolValidator

  /**
   * @method class
   * @description Sets the validator to validate if a value is a class.
   * @returns {ClassValidator} A ClassValidator instance for chaining.
   */
  class(): IValidator.ClassValidator

  /**
   * @method regexp
   * @description Sets the validator to validate if a value is a regular expression.
   * @returns {RegExpValidator} A RegExpValidator instance for chaining.
   */
  regexp(): IValidator.RegExpValidator

  /**
   * @method promise
   * @description Sets the validator to validate if a value is a promise.
   * @returns {PromiseValidator} A PromiseValidator instance for chaining.
   */
  promise(): IValidator.PromiseValidator

  /**
   * @method map
   * @description Sets the validator to validate if a value is a Map.
   * @returns {MapValidator} A MapValidator instance for chaining.
   */
  map(): IValidator.MapValidator

  /**
   * @method set
   * @description Sets the validator to validate if a value is a Set.
   * @returns {SetValidator} A SetValidator instance for chaining.
   */
  set(): IValidator.SetValidator

  /**
   * @method error
   * @description Sets the validator to validate if a value is an Error.
   * @returns {ErrorValidator} An ErrorValidator instance for chaining.
   */
  error(): IValidator.ErrorValidator

  /**
   * @method instanceOf
   * @description Sets the validator to validate if a value is an instance of a specific class.
   * @param {Function} classConstructor - The class constructor to check against.
   * @returns {InstanceOfValidator} An InstanceOfValidator instance for chaining.
   */
  instanceOf(classConstructor: Function): IValidator.InstanceOfValidator

  /**
   * @method creditCard
   * @description Sets the validator to validate if a string is a credit card number.
   * @returns {CreditCardValidator} A CreditCardValidator instance for chaining.
   */
  creditCard(): IValidator.CreditCardValidator

  /**
   * @method hexColor
   * @description Sets the validator to validate if a string is a hexadecimal color.
   * @returns {HexColorValidator} A HexColorValidator instance for chaining.
   */
  hexColor(): IValidator.HexColorValidator

  /**
   * @method jwt
   * @description Sets the validator to validate if a string is a JWT token.
   * @returns {JWTValidator} A JWTValidator instance for chaining.
   */
  jwt(): IValidator.JWTValidator

  /**
   * @method pastDate
   * @description Sets the validator to validate if a date is in the past.
   * @returns {PastDateValidator} A PastDateValidator instance for chaining.
   */
  pastDate(): IValidator.PastDateValidator

  /**
   * @method futureDate
   * @description Sets the validator to validate if a date is in the future.
   * @returns {FutureDateValidator} A FutureDateValidator instance for chaining.
   */
  futureDate(): IValidator.FutureDateValidator

  /**
   * @method arrayOf
   * @description Sets the validator to validate if an array contains elements of a specific type.
   * @param {BaseValidator} validator - The validator to apply to each element.
   * @returns {ArrayOfValidator} An ArrayOfValidator instance for chaining.
   */
  arrayOf(validator: IValidator.BaseValidator): IValidator.ArrayOfValidator

  /**
   * @method hasProperty
   * @description Sets the validator to validate if an object has a specific property.
   * @param {string} propertyName - The name of the property to check for.
   * @returns {HasPropertyValidator} A HasPropertyValidator instance for chaining.
   */
  hasProperty(propertyName: string): IValidator.HasPropertyValidator
}
