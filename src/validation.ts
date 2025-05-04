import type { IValidation } from "./interfaces"
import * as IValidator from "./validators"

/**
 * @class Validation
 * @description Main validation class that provides a unified interface for all validation operations.
 * This class serves as IValidator.the primary entry point for the validation library, offering a simple and
 * consistent API for validating various data types and conditions.
 *
 * @example
 * // Create a validation instance
 * const validation = IValidator.Validation(.make()
 *
 * // Validate a string
 * const result = validation.string().validate('Hello, world!');
 * console.log(result.isValid); // true
 *
 * // Chain validations
 * const emailResult = validation.string().email().validate('user@example.com');
 * console.log(emailResult.isValid); // true
 */
export class Validation implements IValidation {
  /**
   * @private
   * @property {BaseValidator | null} _validator - The current validator instance.
   */
  private _validator: IValidator.BaseValidator | null = null

  /**
   * @constructor
   * @description Creates a new Validation instance.
   */
  constructor() {}

  /**
   * @method string
   * @description Sets the validator to validate strings.
   * @returns {StringValidator} A StringValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.string().validate('Hello, world!');
   * console.log(result.isValid); // true
   */
  public string(): IValidator.StringValidator {
    this._validator = IValidator.StringValidator.make()
    return this._validator as IValidator.StringValidator
  }

  /**
   * @method number
   * @description Sets the validator to validate numbers.
   * @returns {NumberValidator} A NumberValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.number().validate(42);
   * console.log(result.isValid); // true
   */
  public number(): IValidator.NumberValidator {
    this._validator = IValidator.NumberValidator.make()
    return this._validator as IValidator.NumberValidator
  }

  /**
   * @method boolean
   * @description Sets the validator to validate booleans.
   * @returns {BooleanValidator} A BooleanValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.boolean().validate(true);
   * console.log(result.isValid); // true
   */
  public boolean(): IValidator.BooleanValidator {
    this._validator = IValidator.BooleanValidator.make()
    return this._validator as IValidator.BooleanValidator
  }

  /**
   * @method array
   * @description Sets the validator to validate arrays.
   * @returns {ArrayValidator} An ArrayValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.array().validate([1, 2, 3]);
   * console.log(result.isValid); // true
   */
  public array(): IValidator.ArrayValidator {
    this._validator = IValidator.ArrayValidator.make()
    return this._validator as IValidator.ArrayValidator
  }

  /**
   * @method object
   * @description Sets the validator to validate objects.
   * @returns {ObjectValidator} An ObjectValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.object().validate({ name: 'John', age: 30 });
   * console.log(result.isValid); // true
   */
  public object(): IValidator.ObjectValidator {
    this._validator = IValidator.ObjectValidator.make()
    return this._validator as IValidator.ObjectValidator
  }

  /**
   * @method null
   * @description Sets the validator to validate null values.
   * @returns {NullValidator} A NullValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.null().validate(null);
   * console.log(result.isValid); // true
   */
  public null(): IValidator.NullValidator {
    this._validator = IValidator.NullValidator.make()
    return this._validator as IValidator.NullValidator
  }

  /**
   * @method undefined
   * @description Sets the validator to validate undefined values.
   * @returns {UndefinedValidator} An UndefinedValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.undefined().validate(undefined);
   * console.log(result.isValid); // true
   */
  public undefined(): IValidator.UndefinedValidator {
    this._validator = IValidator.UndefinedValidator.make()
    return this._validator as IValidator.UndefinedValidator
  }

  /**
   * @method nullOrUndefined
   * @description Sets the validator to validate null or undefined values.
   * @returns {NullOrUndefinedValidator} A NullOrUndefinedValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result1 = validation.nullOrUndefined().validate(null);
   * console.log(result1.isValid); // true
   *
   * const result2 = validation.nullOrUndefined().validate(undefined);
   * console.log(result2.isValid); // true
   */
  public nullOrUndefined(): IValidator.NullOrUndefinedValidator {
    this._validator = IValidator.NullOrUndefinedValidator.make()
    return this._validator as IValidator.NullOrUndefinedValidator
  }

  /**
   * @method function
   * @description Sets the validator to validate functions.
   * @returns {FunctionValidator} A FunctionValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.function().validate(() => console.log('Hello'));
   * console.log(result.isValid); // true
   */
  public function(): IValidator.FunctionValidator {
    this._validator = IValidator.FunctionValidator.make()
    return this._validator as IValidator.FunctionValidator
  }

  /**
   * @method date
   * @description Sets the validator to validate dates.
   * @returns {DateValidator} A DateValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.date().validate(new Date());
   * console.log(result.isValid); // true
   */
  public date(): IValidator.DateValidator {
    this._validator = IValidator.DateValidator.make()
    return this._validator as IValidator.DateValidator
  }

  /**
   * @method email
   * @description Sets the validator to validate email addresses.
   * @returns {EmailValidator} An EmailValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.email().validate('user@example.com');
   * console.log(result.isValid); // true
   */
  public email(): IValidator.EmailValidator {
    this._validator = IValidator.EmailValidator.make()
    return this._validator as IValidator.EmailValidator
  }

  /**
   * @method url
   * @description Sets the validator to validate URLs.
   * @returns {UrlValidator} A UrlValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.url().validate('https://example.com');
   * console.log(result.isValid); // true
   */
  public url(): IValidator.UrlValidator {
    this._validator = IValidator.UrlValidator.make()
    return this._validator as IValidator.UrlValidator
  }

  /**
   * @method empty
   * @description Sets the validator to validate if a value is empty.
   * @returns {EmptyValidator} An EmptyValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.empty().validate('');
   * console.log(result.isValid); // true
   */
  public empty(): IValidator.EmptyValidator {
    this._validator = IValidator.EmptyValidator.make()
    return this._validator as IValidator.EmptyValidator
  }

  /**
   * @method notEmpty
   * @description Sets the validator to validate if a value is not empty.
   * @returns {NotEmptyValidator} A NotEmptyValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.notEmpty().validate('Hello');
   * console.log(result.isValid); // true
   */
  public notEmpty(): IValidator.NotEmptyValidator {
    this._validator = IValidator.NotEmptyValidator.make()
    return this._validator as IValidator.NotEmptyValidator
  }

  /**
   * @method alpha
   * @description Sets the validator to validate if a string contains only alphabetic characters.
   * @returns {AlphaValidator} An AlphaValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.alpha().validate('Hello');
   * console.log(result.isValid); // true
   */
  public alpha(): IValidator.AlphaValidator {
    this._validator = IValidator.AlphaValidator.make()
    return this._validator as IValidator.AlphaValidator
  }

  /**
   * @method alphanumeric
   * @description Sets the validator to validate if a string contains only alphanumeric characters.
   * @returns {AlphanumericValidator} An AlphanumericValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.alphanumeric().validate('Hello123');
   * console.log(result.isValid); // true
   */
  public alphanumeric(): IValidator.AlphanumericValidator {
    this._validator = IValidator.AlphanumericValidator.make()
    return this._validator as IValidator.AlphanumericValidator
  }

  /**
   * @method numeric
   * @description Sets the validator to validate if a string contains only numeric characters.
   * @returns {NumericValidator} A NumericValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.numeric().validate('12345');
   * console.log(result.isValid); // true
   */
  public numeric(): IValidator.NumericValidator {
    this._validator = IValidator.NumericValidator.make()
    return this._validator as IValidator.NumericValidator
  }

  /**
   * @method lowercase
   * @description Sets the validator to validate if a string is lowercase.
   * @returns {LowercaseValidator} A LowercaseValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.lowercase().validate('hello');
   * console.log(result.isValid); // true
   */
  public lowercase(): IValidator.LowercaseValidator {
    this._validator = IValidator.LowercaseValidator.make()
    return this._validator as IValidator.LowercaseValidator
  }

  /**
   * @method uppercase
   * @description Sets the validator to validate if a string is uppercase.
   * @returns {UppercaseValidator} An UppercaseValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.uppercase().validate('HELLO');
   * console.log(result.isValid); // true
   */
  public uppercase(): IValidator.UppercaseValidator {
    this._validator = IValidator.UppercaseValidator.make()
    return this._validator as IValidator.UppercaseValidator
  }

  /**
   * @method hexadecimal
   * @description Sets the validator to validate if a string is a hexadecimal value.
   * @returns {HexadecimalValidator} A HexadecimalValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.hexadecimal().validate('1A2B3C');
   * console.log(result.isValid); // true
   */
  public hexadecimal(): IValidator.HexadecimalValidator {
    this._validator = IValidator.HexadecimalValidator.make()
    return this._validator as IValidator.HexadecimalValidator
  }

  /**
   * @method base64
   * @description Sets the validator to validate if a string is base64 encoded.
   * @returns {Base64Validator} A Base64Validator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.base64().validate('SGVsbG8gV29ybGQ=');
   * console.log(result.isValid); // true
   */
  public base64(): IValidator.Base64Validator {
    this._validator = IValidator.Base64Validator.make()
    return this._validator as IValidator.Base64Validator
  }

  /**
   * @method json
   * @description Sets the validator to validate if a string is valid JSON.
   * @returns {JSONValidator} A JSONValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.json().validate('{"name":"John","age":30}');
   * console.log(result.isValid); // true
   */
  public json(): IValidator.JSONValidator {
    this._validator = IValidator.JSONValidator.make()
    return this._validator as IValidator.JSONValidator
  }

  /**
   * @method uuid
   * @description Sets the validator to validate if a string is a UUID.
   * @returns {UUIDValidator} A UUIDValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.uuid().validate('550e8400-e29b-41d4-a716-446655440000');
   * console.log(result.isValid); // true
   */
  public uuid(): IValidator.UUIDValidator {
    this._validator = IValidator.UUIDValidator.make()
    return this._validator as IValidator.UUIDValidator
  }

  /**
   * @method ip
   * @description Sets the validator to validate if a string is an IP address.
   * @returns {IPValidator} An IPValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.ip().validate('192.168.1.1');
   * console.log(result.isValid); // true
   */
  public ip(): IValidator.IPValidator {
    this._validator = IValidator.IPValidator.make()
    return this._validator as IValidator.IPValidator
  }

  /**
   * @method macAddress
   * @description Sets the validator to validate if a string is a MAC address.
   * @returns {MACAddressValidator} A MACAddressValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.macAddress().validate('00:1A:2B:3C:4D:5E');
   * console.log(result.isValid); // true
   */
  public macAddress(): IValidator.MACAddressValidator {
    this._validator = IValidator.MACAddressValidator.make()
    return this._validator as IValidator.MACAddressValidator
  }

  /**
   * @method isbn
   * @description Sets the validator to validate if a string is an ISBN.
   * @returns {ISBNValidator} An ISBNValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.isbn().validate('978-3-16-148410-0');
   * console.log(result.isValid); // true
   */
  public isbn(): IValidator.ISBNValidator {
    this._validator = IValidator.ISBNValidator.make()
    return this._validator as IValidator.ISBNValidator
  }

  /**
   * @method postalCode
   * @description Sets the validator to validate if a string is a postal code.
   * @param {string} [countryCode='US'] - The country code for which to validate the postal code.
   * @returns {PostalCodeValidator} A PostalCodeValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.postalCode('US').validate('12345');
   * console.log(result.isValid); // true
   */
  public postalCode(countryCode = 'US'): IValidator.PostalCodeValidator {
    this._validator = PostalCodeValidator.make(countryCod.make()
    return this._validator as IValidator.PostalCodeValidator
  }

  /**
   * @method phoneNumber
   * @description Sets the validator to validate if a string is a phone number.
   * @param {string} [countryCode='US'] - The country code for which to validate the phone number.
   * @returns {PhoneNumberValidator} A PhoneNumberValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.phoneNumber('US').validate('555-123-4567');
   * console.log(result.isValid); // true
   */
  public phoneNumber(countryCode = 'US'): IValidator.PhoneNumberValidator {
    this._validator = IValidator.PhoneNumberValidator(countryCod.make()
    return this._validator as IValidator.PhoneNumberValidator
  }

  /**
   * @method strongPassword
   * @description Sets the validator to validate if a string is a strong password.
   * @returns {StrongPasswordValidator} A StrongPasswordValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.strongPassword().validate('P@ssw0rd!');
   * console.log(result.isValid); // true
   */
  public strongPassword(): IValidator.StrongPasswordValidator {
    this._validator = IValidator.StrongPasswordValidator.make()
    return this._validator as IValidator.StrongPasswordValidator
  }

  /**
   * @method length
   * @description Sets the validator to validate if a string or array has a specific length.
   * @param {number} min - The minimum length.
   * @param {number} [max] - The maximum length. If not provided, the value must be exactly `min` length.
   * @returns {LengthValidator} A LengthValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.length(5, 10).validate('Hello');
   * console.log(result.isValid); // true
   */
  public length(min: number, max?: number): IValidator.LengthValidator {
    this._validator = IValidator.LengthValidator.make(min, max)
    return this._validator as IValidator.LengthValidator
  }

  /**
   * @method matches
   * @description Sets the validator to validate if a string matches a regular expression.
   * @param {RegExp} pattern - The regular expression pattern to match against.
   * @returns {MatchesValidator} A MatchesValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.matches(/^[A-Z][a-z]+$/).validate('Hello');
   * console.log(result.isValid); // true
   */
  public matches(pattern: RegExp): IValidator.MatchesValidator {
    this._validator = IValidator.MatchesValidator(pattern)
    return this._validator as IValidator.MatchesValidator
  }

  /**
   * @method contains
   * @description Sets the validator to validate if a string contains a substring.
   * @param {string} substring - The substring to check for.
   * @returns {ContainsValidator} A ContainsValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.contains('world').validate('Hello, world!');
   * console.log(result.isValid); // true
   */
  public contains(substring: string): IValidator.ContainsValidator {
    this._validator = IValidator.ContainsValidator(substring)
    return this._validator as IValidator.ContainsValidator
  }

  /**
   * @method startsWith
   * @description Sets the validator to validate if a string starts with a specific prefix.
   * @param {string} prefix - The prefix to check for.
   * @returns {StartsWithValidator} A StartsWithValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.startsWith('Hello').validate('Hello, world!');
   * console.log(result.isValid); // true
   */
  public startsWith(prefix: string): IValidator.StartsWithValidator {
    this._validator = IValidator.StartsWithValidator(prefix)
    return this._validator as IValidator.StartsWithValidator
  }

  /**
   * @method endsWith
   * @description Sets the validator to validate if a string ends with a specific suffix.
   * @param {string} suffix - The suffix to check for.
   * @returns {EndsWithValidator} An EndsWithValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.endsWith('!').validate('Hello, world!');
   * console.log(result.isValid); // true
   */
  public endsWith(suffix: string): IValidator.EndsWithValidator {
    this._validator = IValidator.EndsWithValidator(suffix)
    return this._validator as IValidator.EndsWithValidator
  }

  /**
   * @method integer
   * @description Sets the validator to validate if a number is an integer.
   * @returns {IntegerValidator} An IntegerValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.integer().validate(42);
   * console.log(result.isValid); // true
   */
  public integer(): IValidator.IntegerValidator {
    this._validator = IValidator.IntegerValidator.make()
    return this._validator as IValidator.IntegerValidator
  }

  /**
   * @method float
   * @description Sets the validator to validate if a number is a float.
   * @returns {FloatValidator} A FloatValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.float().validate(3.14);
   * console.log(result.isValid); // true
   */
  public float(): IValidator.FloatValidator {
    this._validator = IValidator.FloatValidator.make()
    return this._validator as IValidator.FloatValidator
  }

  /**
   * @method positive
   * @description Sets the validator to validate if a number is positive.
   * @returns {PositiveValidator} A PositiveValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.positive().validate(42);
   * console.log(result.isValid); // true
   */
  public positive(): IValidator.PositiveValidator {
    this._validator = IValidator.PositiveValidator.make()
    return this._validator as IValidator.PositiveValidator
  }

  /**
   * @method negative
   * @description Sets the validator to validate if a number is negative.
   * @returns {NegativeValidator} A NegativeValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.negative().validate(-42);
   * console.log(result.isValid); // true
   */
  public negative(): IValidator.NegativeValidator {
    this._validator = IValidator.NegativeValidator.make()
    return this._validator as IValidator.NegativeValidator
  }

  /**
   * @method zero
   * @description Sets the validator to validate if a number is zero.
   * @returns {ZeroValidator} A ZeroValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.zero().validate(0);
   * console.log(result.isValid); // true
   */
  public zero(): IValidator.ZeroValidator {
    this._validator = IValidator.ZeroValidator.make()
    return this._validator as IValidator.ZeroValidator
  }

  /**
   * @method nan
   * @description Sets the validator to validate if a value is NaN.
   * @returns {NaNValidator} A NaNValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.nan().validate(NaN);
   * console.log(result.isValid); // true
   */
  public nan(): IValidator.NaNValidator {
    this._validator = IValidator.NaNValidator.make()
    return this._validator as IValidator.NaNValidator
  }

  /**
   * @method inRange
   * @description Sets the validator to validate if a number is within a specific range.
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {InRangeValidator} An InRangeValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.inRange(1, 10).validate(5);
   * console.log(result.isValid); // true
   */
  public inRange(min: number, max: number): IValidator.InRangeValidator {
    this._validator = IValidator.InRangeValidator(min, max)
    return this._validator as IValidator.InRangeValidator
  }

  /**
   * @method even
   * @description Sets the validator to validate if a number is even.
   * @returns {EvenValidator} An EvenValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.even().validate(42);
   * console.log(result.isValid); // true
   */
  public even(): IValidator.EvenValidator {
    this._validator = IValidator.EvenValidator.make()
    return this._validator as IValidator.EvenValidator
  }

  /**
   * @method odd
   * @description Sets the validator to validate if a number is odd.
   * @returns {OddValidator} An OddValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.odd().validate(43);
   * console.log(result.isValid); // true
   */
  public odd(): IValidator.OddValidator {
    this._validator = IValidator.OddValidator.make()
    return this._validator as IValidator.OddValidator
  }

  /**
   * @method divisibleBy
   * @description Sets the validator to validate if a number is divisible by another number.
   * @param {number} divisor - The divisor to check against.
   * @returns {DivisibleByValidator} A DivisibleByValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.divisibleBy(5).validate(15);
   * console.log(result.isValid); // true
   */
  public divisibleBy(divisor: number): IValidator.DivisibleByValidator {
    this._validator = IValidator.DivisibleByValidator(divisor)
    return this._validator as IValidator.DivisibleByValidator
  }

  /**
   * @method symbol
   * @description Sets the validator to validate if a value is a symbol.
   * @returns {SymbolValidator} A SymbolValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.symbol().validate(Symbol('test'));
   * console.log(result.isValid); // true
   */
  public symbol(): IValidator.SymbolValidator {
    this._validator = IValidator.SymbolValidator.make()
    return this._validator as IValidator.SymbolValidator
  }

  /**
   * @method class
   * @description Sets the validator to validate if a value is a class.
   * @returns {ClassValidator} A ClassValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * class TestClass {}
   * const result = validation.class().validate(TestClass);
   * console.log(result.isValid); // true
   */
  public class(): IValidator.ClassValidator {
    this._validator = IValidator.ClassValidator.make()
    return this._validator as IValidator.ClassValidator
  }

  /**
   * @method regexp
   * @description Sets the validator to validate if a value is a regular expression.
   * @returns {RegExpValidator} A RegExpValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.regexp().validate(/test/);
   * console.log(result.isValid); // true
   */
  public regexp(): IValidator.RegExpValidator {
    this._validator = IValidator.RegExpValidator.make()
    return this._validator as IValidator.RegExpValidator
  }

  /**
   * @method promise
   * @description Sets the validator to validate if a value is a promise.
   * @returns {PromiseValidator} A PromiseValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.promise().validate(Promise.resolve());
   * console.log(result.isValid); // true
   */
  public promise(): IValidator.PromiseValidator {
    this._validator = IValidator.PromiseValidator.make()
    return this._validator as IValidator.PromiseValidator
  }

  /**
   * @method map
   * @description Sets the validator to validate if a value is a Map.
   * @returns {MapValidator} A MapValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.map().validate(new Map());
   * console.log(result.isValid); // true
   */
  public map(): IValidator.MapValidator {
    this._validator = IValidator.MapValidator.make()
    return this._validator as IValidator.MapValidator
  }

  /**
   * @method set
   * @description Sets the validator to validate if a value is a Set.
   * @returns {SetValidator} A SetValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.set().validate(new Set());
   * console.log(result.isValid); // true
   */
  public set(): IValidator.SetValidator {
    this._validator = IValidator.SetValidator.make()
    return this._validator as IValidator.SetValidator
  }

  /**
   * @method error
   * @description Sets the validator to validate if a value is an Error.
   * @returns {ErrorValidator} An ErrorValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.error().validate(new Error('test'));
   * console.log(result.isValid); // true
   */
  public error(): IValidator.ErrorValidator {
    this._validator = IValidator.ErrorValidator.make()
    return this._validator as IValidator.ErrorValidator
  }

  /**
   * @method instanceOf
   * @description Sets the validator to validate if a value is an instance of a specific class.
   * @param {Function} classConstructor - The class constructor to check against.
   * @returns {InstanceOfValidator} An InstanceOfValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * class TestClass {}
   * const instance = IValidator.TestClass(.make()
   * const result = validation.instanceOf(TestClass).validate(instance);
   * console.log(result.isValid); // true
   */
  public instanceOf(classConstructor: Function): IValidator.InstanceOfValidator {
    this._validator = IValidator.InstanceOfValidator(classConstructor)
    return this._validator as IValidator.InstanceOfValidator
  }

  /**
   * @method creditCard
   * @description Sets the validator to validate if a string is a credit card number.
   * @returns {CreditCardValidator} A CreditCardValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.creditCard().validate('4111111111111111');
   * console.log(result.isValid); // true
   */
  public creditCard(): IValidator.CreditCardValidator {
    this._validator = IValidator.CreditCardValidator.make()
    return this._validator as IValidator.CreditCardValidator
  }

  /**
   * @method hexColor
   * @description Sets the validator to validate if a string is a hexadecimal color.
   * @returns {HexColorValidator} A HexColorValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.hexColor().validate('#FF0000');
   * console.log(result.isValid); // true
   */
  public hexColor(): IValidator.HexColorValidator {
    this._validator = IValidator.HexColorValidator.make()
    return this._validator as IValidator.HexColorValidator
  }

  /**
   * @method jwt
   * @description Sets the validator to validate if a string is a JWT token.
   * @returns {JWTValidator} A JWTValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.jwt().validate('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...');
   * console.log(result.isValid); // true
   */
  public jwt(): IValidator.JWTValidator {
    this._validator = IValidator.JWTValidator.make()
    return this._validator as IValidator.JWTValidator
  }

  /**
   * @method pastDate
   * @description Sets the validator to validate if a date is in the past.
   * @returns {PastDateValidator} A PastDateValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const pastDate = IValidator.Date(Date.now() - 86400000); // Yesterd.make()
   * const result = validation.pastDate().validate(pastDate);
   * console.log(result.isValid); // true
   */
  public pastDate(): IValidator.PastDateValidator {
    this._validator = IValidator.PastDateValidator.make()
    return this._validator as IValidator.PastDateValidator
  }

  /**
   * @method futureDate
   * @description Sets the validator to validate if a date is in the future.
   * @returns {FutureDateValidator} A FutureDateValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const futureDate = IValidator.Date(Date.now() + 86400000); // Tomorr.make()
   * const result = validation.futureDate().validate(futureDate);
   * console.log(result.isValid); // true
   */
  public futureDate(): IValidator.FutureDateValidator {
    this._validator = IValidator.FutureDateValidator.make()
    return this._validator as IValidator.FutureDateValidator
  }

  /**
   * @method arrayOf
   * @description Sets the validator to validate if an array contains elements of a specific type.
   * @param {BaseValidator} validator - The validator to apply to each element.
   * @returns {ArrayOfValidator} An ArrayOfValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const stringValidator = IValidator.StringValidator(.make()
   * const result = validation.arrayOf(stringValidator).validate(['a', 'b', 'c']);
   * console.log(result.isValid); // true
   */
  public arrayOf(validator: BaseValidator): IValidator.ArrayOfValidator {
    this._validator = IValidator.ArrayOfValidator(validator)
    return this._validator as IValidator.ArrayOfValidator
  }

  /**
   * @method hasProperty
   * @description Sets the validator to validate if an object has a specific property.
   * @param {string} propertyName - The name of the property to check for.
   * @returns {HasPropertyValidator} A HasPropertyValidator instance for chaining.
   *
   * @example
   * const validation = IValidator.Validation(.make()
   * const result = validation.hasProperty('name').validate({ name: 'John' });
   * console.log(result.isValid); // true
   */
  public hasProperty(propertyName: string): IValidator.HasPropertyValidator {
    this._validator = IValidator.HasPropertyValidator(propertyName)
    return this._validator as IValidator.HasPropertyValidator
  }
}
