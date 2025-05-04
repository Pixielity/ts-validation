import { validate } from "class-validator"
import { IsString, IsEmail, IsNumber, Min, Max } from "../decorators"

/**
 * User class with validation decorators.
 */
class User {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsNumber()
  @Min(18, { message: "Age must be at least 18" })
  @Max(120)
  age: number

  constructor(name: string, email: string, age: number) {
    this.name = name
    this.email = email
    this.age = age
  }
}

/**
 * Example function demonstrating the use of validation decorators.
 */
async function validateUser() {
  // Valid user
  const validUser = new User("John Doe", "john@example.com", 30)
  const validErrors = await validate(validUser)
  console.log("Valid user errors:", validErrors) // Should be empty

  // Invalid user
  const invalidUser = new User("Jane", "not-an-email", 15)
  const invalidErrors = await validate(invalidUser)
  console.log("Invalid user errors:", invalidErrors) // Should have errors
}

validateUser().catch(console.error)
