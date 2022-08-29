import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor (private readonly roleServise: RolesService) {}

  @ApiOperation({summary: 'Create role'})
  @ApiResponse({status: 201, type: Role})
  @Post('/')
  create(@Body() dto: CreateRoleDto) {
    return this.roleServise.createRole(dto);
  }

  @ApiOperation({summary: 'Get role by value'})
  @ApiResponse({status: 200, type: Role})
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleServise.getRoleByValue(value);
  }

}
