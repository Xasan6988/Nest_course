import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

abstract class AuthResponse {
  @ApiProperty({example: 'JSON_WEB_TOKEN', description: 'Token for authorization'})
  token: string
}

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

  constructor (private readonly authService: AuthService) {}

  @ApiOperation({summary: 'Login in service'})
  @ApiResponse({status: 201, type: AuthResponse})
  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({summary: 'Registration in service'})
  @ApiResponse({status: 201, type: AuthResponse})
  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto)
  }
}
