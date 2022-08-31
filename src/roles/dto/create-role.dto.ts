import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsUppercase } from 'class-validator'

export class CreateRoleDto {
  @ApiProperty({example: 'ADMIN', description: 'Role`s value'})
  @IsString()
  @IsUppercase()
  readonly value: string
  @ApiProperty({example: 'Administrator', description: 'Role`s description'})
  @IsString()
  readonly description: string
}
