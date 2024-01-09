import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/guards/decorators/roles-auth.decorator';
import { RolesAuthGuard } from 'src/auth/guards/roles-auth.guard';
import { CreatePromoClientDto } from './dto/create-promo_client.dto';
import { PromoClient } from './promos_client.model';
import { PromosClientService } from './promos_client.service';

@ApiTags('Promos-client')
@Controller('promos-client')
export class PromosClientController {
    constructor(private promosClientService: PromosClientService){}

    @ApiOperation({summary: 'Create promo'})
    @ApiResponse({ status: 200, type: PromoClient})
    @Post()
    @Roles('admin')
    @UseGuards(RolesAuthGuard)
    create(@Body() dto: CreatePromoClientDto){
        return this.promosClientService.createPromoClient(dto);
    }

    @ApiOperation({summary: 'Get all promos'})
    @ApiResponse({ status: 200, type: [PromoClient]})
    @ApiResponse({ status: 404, description: 'Промо не найдены'})
    @Get()
    getAll(){
        return this.promosClientService.getAll();
    }

    @ApiOperation({summary: 'Get room by id'})
    @ApiResponse({status: 200, type: PromoClient})
    @ApiResponse({ status: 404, description: 'Промо не найден'})
    @Get('/id/:id')
    getRoomById(@Param('id') id : number){
        return this.promosClientService.getPromoClientById(id);
    }

    @ApiOperation({summary: 'Get room by name'})
    @ApiResponse({status: 200, type: PromoClient})
    @ApiResponse({ status: 404, description: 'Промо не найден'})
    @Get('/link/:link')
    getRoomByName(@Param('link') link: string){
        return this.promosClientService.getPromoClientByLink(link);
    }
}
