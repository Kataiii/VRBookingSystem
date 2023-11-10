import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateWorkDayDto } from './dto/create-work_day.dto';
import { WorkDay } from './work_days.model';
import { WorkDaysService } from './work_days.service';

@ApiTags("WorkDays")
@Controller('work-days')
export class WorkDaysController {
    constructor(private workDaysService: WorkDaysService){}

    @ApiOperation({summary: 'Create work day'})
    @ApiResponse({ status: 200, type: WorkDay})
    @Post()
    create(@Body() dto: CreateWorkDayDto){
        return this.workDaysService.createWorkDay(dto);
    }

    @ApiOperation({summary: 'Get all work days'})
    @ApiResponse({ status: 200, type: [WorkDay]})
    @ApiResponse({ status: 404, description: 'Рабочие дни не найдены'})
    @Get()
    getAll(){
        return this.workDaysService.getAll();
    }

    @ApiOperation({summary: 'Get work day by id'})
    @ApiResponse({status: 200, type: WorkDay})
    @ApiResponse({ status: 404, description: 'Рабочий день не найден'})
    @Get('/id/:id')
    getTypeGameById(@Param('id') id : number){
        return this.workDaysService.getWorkDayById(id);
    }

    @ApiOperation({summary: 'Get work day by name'})
    @ApiResponse({status: 200, type: WorkDay})
    @ApiResponse({ status: 404, description: 'Рабочий день не найден'})
    @Get('/name/:name')
    getTypeGameByName(@Param('name') name: string){
        return this.workDaysService.getgetWorkDayByIdByNameDay(name);
    }
}
