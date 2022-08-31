import { ApiProperty } from '@nestjs/swagger'

export class BanUserDto {
  @ApiProperty({example: 4, description: 'Unique user id'})
  readonly userId: number
  @ApiProperty({example: 'Spam', description: 'Reason for user ban'})
  readonly banReason: string
}
