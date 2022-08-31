import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class BanUserDto {
  @ApiProperty({example: 4, description: 'Unique user id'})
  @IsNumber()
  readonly userId: number
  @ApiProperty({example: 'Spam', description: 'Reason for user ban'})
  @IsString()
  readonly banReason: string
}
