import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({example: 'user@email.com', description: 'Unique email address'})
  @IsString({message: 'Required type - string'})
  @IsEmail({} ,{message: 'Invalid email'})
  readonly email: string
  @IsString({message: 'Required type - string'})
  @Length(6, 14, {message: 'Your password must have minimum 6 symbols and maximum 14 symbols'})
  @ApiProperty({example: '12345678', description: 'Password'})
  readonly password: string
}
