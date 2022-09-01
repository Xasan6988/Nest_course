import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface PostCreationAttrs {
  title: string
  content: string
  userId: number
  image: string
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unique identificator'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @ApiProperty({example: 'How I waste my summer', description: 'Post`s title'})
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title: string

  @ApiProperty({example: 'Lorem inpus', description: 'Post`s text'})
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  content: string

  @ApiProperty({example: 'post1.png', description: 'Post`s image'})
  @Column({type: DataType.STRING})
  image: string

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number

  @BelongsTo(() => User)
  author: User
}
