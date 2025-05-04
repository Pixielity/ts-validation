/**
 * @enum {string} ValidatorType
 * @description Enumeration of possible validator types
 */
export enum ValidatorType {
  /**
   * Base validator type
   */
  Base = 'base',

  /**
   * String validator type
   */
  String = 'string',

  /**
   * Number validator type
   */
  Number = 'number',

  /**
   * Boolean validator type
   */
  Boolean = 'boolean',

  /**
   * Array validator type
   */
  Array = 'array',

  /**
   * Object validator type
   */
  Object = 'object',

  /**
   * Null validator type
   */
  Null = 'null',

  /**
   * Undefined validator type
   */
  Undefined = 'undefined',

  /**
   * Function validator type
   */
  Function = 'function',

  /**
   * Date validator type
   */
  Date = 'date',

  /**
   * Email validator type
   */
  Email = 'email',

  /**
   * URL validator type
   */
  URL = 'url',

  /**
   * Empty validator type
   */
  Empty = 'empty',

  /**
   * Not empty validator type
   */
  NotEmpty = 'not_empty',

  /**
   * Alpha validator type (letters only)
   */
  Alpha = 'alpha',

  /**
   * Alphanumeric validator type
   */
  Alphanumeric = 'alphanumeric',

  /**
   * Numeric validator type
   */
  Numeric = 'numeric',

  /**
   * Lowercase validator type
   */
  Lowercase = 'lowercase',

  /**
   * Uppercase validator type
   */
  Uppercase = 'uppercase',

  /**
   * Hexadecimal validator type
   */
  Hexadecimal = 'hexadecimal',

  /**
   * Base64 validator type
   */
  Base64 = 'base64',

  /**
   * JSON validator type
   */
  JSON = 'json',

  /**
   * UUID validator type
   */
  UUID = 'uuid',

  /**
   * IP address validator type
   */
  IP = 'ip',

  /**
   * MAC address validator type
   */
  MACAddress = 'mac_address',

  /**
   * ISBN validator type
   */
  ISBN = 'isbn',

  /**
   * Postal code validator type
   */
  PostalCode = 'postal_code',

  /**
   * Phone number validator type
   */
  PhoneNumber = 'phone_number',

  /**
   * Strong password validator type
   */
  StrongPassword = 'strong_password',

  /**
   * Length validator type
   */
  Length = 'length',

  /**
   * Matches validator type (regex)
   */
  Matches = 'matches',

  /**
   * Contains validator type
   */
  Contains = 'contains',

  /**
   * Contains all validator type
   */
  ContainsAll = 'contains_all',

  /**
   * Starts with validator type
   */
  StartsWith = 'starts_with',

  /**
   * Ends with validator type
   */
  EndsWith = 'ends_with',

  /**
   * Integer validator type
   */
  Integer = 'integer',

  /**
   * Float validator type
   */
  Float = 'float',

  /**
   * Positive number validator type
   */
  Positive = 'positive',

  /**
   * Negative number validator type
   */
  Negative = 'negative',

  /**
   * Zero validator type
   */
  Zero = 'zero',

  /**
   * NaN validator type
   */
  NaN = 'nan',

  /**
   * In range validator type
   */
  InRange = 'in_range',

  /**
   * Even number validator type
   */
  Even = 'even',

  /**
   * Odd number validator type
   */
  Odd = 'odd',

  /**
   * Divisible by validator type
   */
  DivisibleBy = 'divisible_by',

  /**
   * Symbol validator type
   */
  Symbol = 'symbol',

  /**
   * Class validator type
   */
  Class = 'class',

  /**
   * RegExp validator type
   */
  RegExp = 'regexp',

  /**
   * Promise validator type
   */
  Promise = 'promise',

  /**
   * Map validator type
   */
  Map = 'map',

  /**
   * Set validator type
   */
  Set = 'set',

  /**
   * Error validator type
   */
  Error = 'error',

  /**
   * Credit card validator type
   */
  CreditCard = 'credit_card',

  /**
   * Hex color validator type
   */
  HexColor = 'hex_color',

  /**
   * JWT validator type
   */
  JWT = 'jwt',

  /**
   * Past date validator type
   */
  PastDate = 'past_date',

  /**
   * Future date validator type
   */
  FutureDate = 'future_date',

  /**
   * Array of validator type
   */
  ArrayOf = 'array_of',

  /**
   * Has property validator type
   */
  HasProperty = 'has_property',

  /**
   * Instance of validator type
   */
  InstanceOf = 'instance_of',

  /**
   * Null or undefined validator type
   */
  NullOrUndefined = 'null_or_undefined',

  /**
   * Defined validator type (not undefined)
   */
  Defined = 'defined',

  /**
   * Equal to validator type
   */
  EqualTo = 'equal_to',

  /**
   * Not equal to validator type
   */
  NotEqualTo = 'not_equal_to',

  /**
   * Longer than validator type
   */
  LongerThan = 'longer_than',

  /**
   * Valid date format validator type
   */
  ValidDateFormat = 'valid_date_format',

  /**
   * Valid password validator type
   */
  ValidPassword = 'valid_password',

  /**
   * Unique in array validator type
   */
  UniqueInArray = 'unique_in_array',

  /**
   * Before date validator type
   */
  BeforeDate = 'before_date',

  /**
   * After date validator type
   */
  AfterDate = 'after_date',

  /**
   * Conditional validator type
   */
  Conditional = 'conditional',

  /**
   * Min validator type
   */
  Min = 'min',

  /**
   * Max validator type
   */
  Max = 'max',

  /**
   * Custom validator type
   */
  Custom = 'custom',
}
