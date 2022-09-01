import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreatePostDto {
  @ApiProperty({example: 'How i waste my symmer', description: 'Post`s title'})
  @IsString()
  readonly title: string
  @ApiProperty({example: 'Lorem inpus', description: 'Post`s content'})
  @IsString()
  readonly content: string
}
