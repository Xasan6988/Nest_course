import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {

  constructor (
    @InjectModel(Post) private readonly postRepisitory: typeof Post,
    private readonly userService: UsersService,
    private fileService: FilesService
  ) {}

  async create(dto: CreatePostDto, image: any, userData: User) {
    try {
      const file = await this.fileService.createFile(image);
      const user = await this.userService.getUserByEmail(userData.email)
      const post = await this.postRepisitory.create({...dto, userId:  user.id, image: file});
      return post;
    } catch (e) {
      console.log(e)
    }
  }
}
