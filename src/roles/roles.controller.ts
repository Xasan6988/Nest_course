import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor (private readonly roleServise: RolesService) {}

  @ApiOperation({summary: 'Create role'})
  @ApiResponse({status: 201, type: Role})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/')
  create(@Body() dto: CreateRoleDto) {
    return this.roleServise.createRole(dto);
  }

  @ApiOperation({summary: 'Get role by value'})
  @ApiResponse({status: 200, type: Role})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleServise.getRoleByValue(value);
  }

}
