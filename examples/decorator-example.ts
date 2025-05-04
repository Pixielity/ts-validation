import { validate } from "class-validator"
import { IsString, IsEmail } from "../decorators"
import { IsLongerThan, MatchesPattern } from "../decorators/custom-decorators"

/**
 * User class with validation decorators.
 */
class User {
  @IsString({ message: "Username must be a string" })
  username: string

  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsString()
  @IsLongerThan("password", { message: "Password confirmation must be longer than password for security" })
  passwordConfirmation: string

  constructor(username: string, email: string, password: string, passwordConfirmation: string) {
    this.username = username
    this.email = email
    this.password = password
    this.passwordConfirmation = passwordConfirmation
  }
}

/**
 * Document class with pattern validation.
 */
class Document {
  @IsString()
  title: string

  pattern: RegExp

  @MatchesPattern("pattern")
  content: string

  constructor(title: string, pattern: RegExp, content: string) {
    this.title = title
    this.pattern = pattern
    this.content = content
  }
}

/**
 * Example of using validation decorators.
 */
export async function decoratorExample(): Promise<void> {
  // Create a user with invalid email and password confirmation
  const user = new User("john", "invalid-email", "password123", "pass")

  // Validate the user
  const errors = await validate(user)
  console.log("User validation errors:", errors)

  // Create a document with content that doesn't match the pattern
  const document = new Document("Test Document", /^[A-Z][a-z]+$/, "invalid content")

  // Validate the document
  const docErrors = await validate(document)
  console.log("Document validation errors:", docErrors)

  // Fix the validation errors
  user.email = "john@example.com"
  user.passwordConfirmation = "password123_extended"
  document.content = "Valid"

  // Validate again
  const fixedUserErrors = await validate(user)
  const fixedDocErrors = await validate(document)

  console.log("User validation errors after fix:", fixedUserErrors)
  console.log("Document validation errors after fix:", fixedDocErrors)
}
