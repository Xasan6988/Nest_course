import { ApiProperty } from '@nestjs/swagger'

export class AddRoleDto {
  @ApiProperty({example: 'ADMIN', description: 'Role`s value'})
  readonly value: string
  @ApiProperty({example: 4, description: 'Unique user id'})
  readonly userId: number
}
