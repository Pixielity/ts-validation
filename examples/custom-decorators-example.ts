import { validate } from "class-validator"
import { IsString, IsDate, IsArray } from "../decorators"
import { IsLongerThan } from "../decorators/is-longer-than.decorator"
import { MatchesPattern } from "../decorators/matches-pattern.decorator"
import { IsValidPassword } from "../decorators/is-valid-password.decorator"
import { IsEqualTo } from "../decorators/is-equal-to.decorator"
import { IsAfterDate } from "../decorators/is-after-date.decorator"
import { IsBeforeDate } from "../decorators/is-before-date.decorator"
import { IsUniqueInArray } from "../decorators/is-unique-in-array.decorator"
import { IsValidEnum } from "../decorators/is-valid-enum.decorator"

// Example enum
enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

class User {
  @IsString()
  @MatchesPattern(/^[a-zA-Z0-9_]{3,20}$/, {
    message: "Username must be 3-20 characters and contain only letters, numbers, and underscores",
  })
  @IsUniqueInArray("existingUsernames")
  username: string

  @IsValidPassword({
    minLength: 8,
    requireUppercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  })
  password: string

  @IsString()
  @IsEqualTo("password", { message: "Passwords do not match" })
  passwordConfirmation: string

  @IsString()
  @IsLongerThan("username", { message: "Email must be longer than username" })
  email: string

  @IsDate()
  registrationDate: Date

  @IsDate()
  @IsAfterDate("registrationDate", { message: "Last login must be after registration date" })
  lastLoginDate: Date

  @IsDate()
  @IsBeforeDate("expirationDate", { message: "Start date must be before expiration date" })
  startDate: Date

  @IsDate()
  expirationDate: Date

  @IsValidEnum(UserRole, { message: "Invalid user role" })
  role: UserRole

  @IsArray()
  existingUsernames: string[]

  constructor() {
    this.username = "john_doe"
    this.password = "Password123!"
    this.passwordConfirmation = "Password123!"
    this.email = "john_doe@example.com"
    this.registrationDate = new Date("2023-01-01")
    this.lastLoginDate = new Date("2023-01-02")
    this.startDate = new Date("2023-01-01")
    this.expirationDate = new Date("2024-01-01")
    this.role = UserRole.USER
    this.existingUsernames = ["admin", "root", "system"]
  }
}

async function validateUser() {
  const user = new User()
  const errors = await validate(user)

  if (errors.length > 0) {
    console.log("Validation failed. Errors: ", errors)
  } else {
    console.log("Validation successful!")
  }

  // Test with invalid data
  const invalidUser = new User()
  invalidUser.username = "admin" // Already in existingUsernames
  invalidUser.password = "weak" // Doesn't meet password requirements
  invalidUser.passwordConfirmation = "different" // Doesn't match password
  invalidUser.lastLoginDate = new Date("2022-01-01") // Before registration date
  invalidUser.expirationDate = new Date("2022-01-01") // Before start date
  invalidUser.role = "invalid" as any // Invalid enum value

  const invalidErrors = await validate(invalidUser)
  console.log("Invalid user errors:", invalidErrors)
}

validateUser().catch(console.error)
