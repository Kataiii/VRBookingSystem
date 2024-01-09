import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/guards/decorators/roles-auth.decorator';
import { RolesAuthGuard } from 'src/auth/guards/roles-auth.guard';
import { CreateRuleDto } from './dto/create-rule.dto';
import { Rule } from './rules.model';
import { RulesService } from './rules.service';

@ApiTags('Rules')
@Controller('rules')
export class RulesController {
    constructor(private rulesService: RulesService){}

    @ApiOperation({summary: 'Create rule'})
    @ApiResponse({ status: 200, type: Rule})
    @Post()
    @Roles('admin')
    @UseGuards(RolesAuthGuard)
    create(@Body() dto: CreateRuleDto){
        return this.rulesService.createRule(dto);
    }

    @ApiOperation({summary: 'Get all rules'})
    @ApiResponse({ status: 200, type: [Rule]})
    @ApiResponse({ status: 404, description: 'Правила не найдены'})
    @Get()
    getAll(){
        return this.rulesService.getAll();
    }

    @ApiOperation({summary: 'Get rule by id'})
    @ApiResponse({status: 200, type: Rule})
    @ApiResponse({ status: 404, description: 'Правило не найдено'})
    @Get('/id/:id')
    getRoomById(@Param('id') id : number){
        return this.rulesService.getRuleById(id);
    }

    @ApiOperation({summary: 'Get rule by name'})
    @ApiResponse({status: 200, type: Rule})
    @ApiResponse({ status: 404, description: 'Правило не найдено'})
    @Get('/rule/:rule')
    getRoomByName(@Param('rule') rule: string){
        return this.rulesService.getRuleByName(rule);
    }
}
