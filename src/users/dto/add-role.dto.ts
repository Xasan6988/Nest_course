import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class AddRoleDto {
  @ApiProperty({example: 'ADMIN', description: 'Role`s value'})
  @IsString()
  readonly value: string
  @ApiProperty({example: 4, description: 'Unique user id'})
  @IsNumber()
  readonly userId: number
}
