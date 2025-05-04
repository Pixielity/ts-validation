import { validate } from "../decorators/validation-executor"
import { IsString, IsEmail, IsInt, Min, Max, IsNotEmpty, ValidateAll } from "../decorators"

/**
 * User class with validation decorators.
 */
@ValidateAll()
class User {
  /**
   * The user's name.
   */
  @IsString()
  @IsNotEmpty({ message: "Name cannot be empty" })
  name: string

  /**
   * The user's email address.
   */
  @IsEmail()
  email: string

  /**
   * The user's age.
   */
  @IsInt()
  @Min(18, { message: "User must be at least 18 years old" })
  @Max(120)
  age: number

  constructor(name: string, email: string, age: number) {
    this.name = name
    this.email = email
    this.age = age
  }
}

// Valid user
const validUser = new User("John Doe", "john@example.com", 30)
const validResult = validate(validUser)
console.log("Valid user validation result:", validResult.isValid)
console.log("Valid user errors:", validResult.errors)

// Invalid user
const invalidUser = new User("", "not-an-email", 15)
const invalidResult = validate(invalidUser)
console.log("Invalid user validation result:", invalidResult.isValid)
console.log("Invalid user errors:", invalidResult.errors)
