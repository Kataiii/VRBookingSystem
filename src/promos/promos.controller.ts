import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePromoDto } from './dto/create-promo.dto';
import { Promo } from './promos.model';
import { PromosService } from './promos.service';

@ApiTags('Promos')
@Controller('promos')
export class PromosController {
    constructor(private promosService: PromosService){}

    @ApiOperation({summary: 'Create promo'})
    @ApiResponse({ status: 200, type: Promo})
    @Post()
    create(@Body() dto: CreatePromoDto){
        return this.promosService.createPromo(dto);
    }

    @ApiOperation({summary: 'Get all promos'})
    @ApiResponse({ status: 200, type: [Promo]})
    @ApiResponse({ status: 404, description: 'Промо не найдены'})
    @Get()
    getAll(){
        return this.promosService.getAll();
    }

    @ApiOperation({summary: 'Get room by id'})
    @ApiResponse({status: 200, type: Promo})
    @ApiResponse({ status: 404, description: 'Промо не найден'})
    @Get('/id/:id')
    getRoomById(@Param('id') id : number){
        return this.promosService.getPromoById(id);
    }

    @ApiOperation({summary: 'Get room by name'})
    @ApiResponse({status: 200, type: [Promo]})
    @ApiResponse({ status: 404, description: 'Промо не найдены'})
    @Get('/name/:name')
    getRoomByName(@Param('name') name: string){
        return this.promosService.getPromosByName(name);
    }
}
