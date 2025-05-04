// Re-export from class-validator for convenience
export {
  validate,
  validateOrReject,
  ValidationError,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator"

// Export decorator factory
export * from "./decorator-factory"

// Basic type validators
export * from "./is-string.decorator"
export * from "./is-number.decorator"
export * from "./is-boolean.decorator"
export * from "./is-array.decorator"
export * from "./is-object.decorator"
export * from "./is-null.decorator"
export * from "./is-undefined.decorator"
export * from "./is-null-or-undefined.decorator"
export * from "./is-function.decorator"
export * from "./is-date.decorator"
export * from "./is-symbol.decorator"
export * from "./is-class.decorator"
export * from "./is-regexp.decorator"
export * from "./is-promise.decorator"
export * from "./is-map.decorator"
export * from "./is-set.decorator"
export * from "./is-error.decorator"

// String validation decorators
export * from "./is-email.decorator"
export * from "./is-url.decorator"
export * from "./is-empty.decorator"
export * from "./is-not-empty.decorator"
export * from "./is-alpha.decorator"
export * from "./is-alphanumeric.decorator"
export * from "./is-numeric.decorator"
export * from "./is-lowercase.decorator"
export * from "./is-uppercase.decorator"
export * from "./is-hexadecimal.decorator"
export * from "./is-base64.decorator"
export * from "./is-json.decorator"
export * from "./is-uuid.decorator"
export * from "./is-ip.decorator"
export * from "./is-mac-address.decorator"
export * from "./is-isbn.decorator"
export * from "./is-postal-code.decorator"
export * from "./is-phone-number.decorator"
export * from "./is-strong-password.decorator"
export * from "./length.decorator"
export * from "./matches.decorator"
export * from "./contains.decorator"
export * from "./starts-with.decorator"
export * from "./ends-with.decorator"

// Number validation decorators
export * from "./is-int.decorator"
export * from "./is-float.decorator"
export * from "./is-positive.decorator"
export * from "./is-negative.decorator"
export * from "./is-zero.decorator"
export * from "./is-nan.decorator"
export * from "./is-in-range.decorator"
export * from "./is-even.decorator"
export * from "./is-odd.decorator"
export * from "./is-divisible-by.decorator"
export * from "./min.decorator"
export * from "./max.decorator"

// Special validators
export * from "./is-credit-card.decorator"
export * from "./is-hex-color.decorator"
export * from "./is-jwt.decorator"
export * from "./is-past-date.decorator"
export * from "./is-future-date.decorator"
export * from "./is-array-of.decorator"
export * from "./has-property.decorator"
export * from "./is-instance-of.decorator"

// Custom decorators
export * from "./is-longer-than.decorator"
export * from "./matches-pattern.decorator"
export * from "./is-contains-all.decorator"
export * from "./is-valid-date-format.decorator"
export * from "./is-valid-password.decorator"
export * from "./is-equal-to.decorator"
export * from "./is-not-equal-to.decorator"
export * from "./is-after-date.decorator"
export * from "./is-before-date.decorator"
export * from "./is-unique-in-array.decorator"
export * from "./is-conditional.decorator"
export * from "./is-valid-enum.decorator"
