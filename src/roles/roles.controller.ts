import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/guards/decorators/roles-auth.decorator';
import { RolesAuthGuard } from 'src/auth/guards/roles-auth.guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService){}

    @ApiOperation({summary: 'Create role'})
    @ApiResponse({ status: 200, type: Role})
    @Post()
    // @Roles('admin')
    // @UseGuards(RolesAuthGuard)
    create(@Body() dto: CreateRoleDto){
        console.log(dto);
        console.log(dto.name);
        return this.roleService.createRole(dto);
    }

    @ApiOperation({summary: 'Get role by id'})
    @ApiResponse({status: 200, type: Role})
    @Get('/id/:id')
    // @Roles('admin')
    // @UseGuards(RolesAuthGuard)
    getById(@Param('id') id : number){
        return this.roleService.getRoleById(id);
    }

    @ApiOperation({summary: 'Get role by name'})
    @ApiResponse({status: 200, type: Role})
    @Get('name/:name')
    // @Roles('admin')
    // @UseGuards(RolesAuthGuard)
    getByName(@Param('name') name : string){
        return this.roleService.getRoleByName(name);
    }

    // @Roles('admin')
    // @UseGuards(RolesAuthGuard)
    @Post('/test')
    @ApiResponse({status: 201, type: CreateRoleDto})
    test(@Body() dto: CreateRoleDto){
        console.log(dto);
        return dto;
    }
}
