import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/guards/decorators/roles-auth.decorator';
import { RolesAuthGuard } from 'src/auth/guards/roles-auth.guard';
import { CreateStatusDto } from './dto/create-status.dto';
import { Status } from './statuses.model';
import { StatusesService } from './statuses.service';

@ApiTags('Statuses')
@Controller('statuses')
export class StatusesController {
    constructor(private statusesService: StatusesService){}

    @ApiOperation({summary: 'Create status'})
    @ApiResponse({ status: 200, type: Status})
    @Post()
    @Roles('admin')
    @UseGuards(RolesAuthGuard)
    create(@Body() dto: CreateStatusDto){
        return this.statusesService.createStatus(dto);
    }

    @ApiOperation({summary: 'Get all statuses'})
    @ApiResponse({ status: 200, type: [Status]})
    @ApiResponse({ status: 404, description: 'Статусы не найдены'})
    @Get()
    getAll(){
        return this.statusesService.getAll();
    }

    @ApiOperation({summary: 'Get status by id'})
    @ApiResponse({status: 200, type: Status})
    @ApiResponse({ status: 404, description: 'Статус не найден'})
    @Get('/id/:id')
    getRoomById(@Param('id') id : number){
        return this.statusesService.getStatusById(id);
    }

    @ApiOperation({summary: 'Get status by name'})
    @ApiResponse({status: 200, type: Status})
    @ApiResponse({ status: 404, description: 'Статус не найден'})
    @Get('/name/:name')
    getRoomByName(@Param('name') name: string){
        return this.statusesService.getStatusByName(name);
    }
}
