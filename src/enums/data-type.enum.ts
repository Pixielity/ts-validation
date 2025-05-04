/**
 * @enum {string} DataType
 * @description Enumeration of possible data types that can be validated
 */
export enum DataType {
  /**
   * Unknown or unspecified data type
   */
  Unknown = 'unknown',

  /**
   * String data type
   */
  String = 'string',

  /**
   * Number data type
   */
  Number = 'number',

  /**
   * Boolean data type
   */
  Boolean = 'boolean',

  /**
   * Array data type
   */
  Array = 'array',

  /**
   * Object data type
   */
  Object = 'object',

  /**
   * Null data type
   */
  Null = 'null',

  /**
   * Undefined data type
   */
  Undefined = 'undefined',

  /**
   * Function data type
   */
  Function = 'function',

  /**
   * Date data type
   */
  Date = 'date',

  /**
   * Symbol data type
   */
  Symbol = 'symbol',

  /**
   * Regular Expression data type
   */
  RegExp = 'regexp',

  /**
   * Promise data type
   */
  Promise = 'promise',

  /**
   * Map data type
   */
  Map = 'map',

  /**
   * Set data type
   */
  Set = 'set',

  /**
   * Error data type
   */
  Error = 'error',

  /**
   * Class data type
   */
  Class = 'class',
}
