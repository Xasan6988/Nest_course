import { Body, Controller, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/users.model';
import {Post as PostType} from './posts.model';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

interface RequestWithUser extends Request {
  user: User
}
@ApiTags('Posts')
@Controller('posts')
export class PostsController {

  constructor (
    private readonly postService: PostsService
  ) {}

  @ApiOperation({summary: 'Create user`s post with image'})
  @ApiResponse({status: 201, type: PostType})
  @UseGuards(JwtAuthGuard)
  @Post('/')
  @UseInterceptors(FileInterceptor('image'))
  createPost(
    @Body() dto: CreatePostDto,
    @Req() request: RequestWithUser,
    @UploadedFile() image,
  ) {
    return this.postService.create(dto, image, request.user);
  }
}
