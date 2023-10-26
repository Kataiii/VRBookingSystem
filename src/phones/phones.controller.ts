import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { Phone } from './phones.model';
import { PhonesService } from './phones.service';

@ApiTags('Phones')
@Controller('phones')
export class PhonesController {
    constructor(private phonesService: PhonesService){}

    @ApiOperation({summary: 'Create phone'})
    @ApiResponse({ status: 200, type: Phone})
    @Post()
    create(@Body() dto: CreatePhoneDto){
        return this.phonesService.createPhone(dto);
    }

    @ApiOperation({summary: 'Get all phones'})
    @ApiResponse({ status: 200, type: [Phone]})
    @ApiResponse({ status: 404, description: 'Телефоны не найдены'})
    @Get()
    getAll(){
        return this.phonesService.getAll();
    }

    @ApiOperation({summary: 'Get phone by id'})
    @ApiResponse({status: 200, type: Phone})
    @ApiResponse({ status: 404, description: 'Телефон не найден'})
    @Get('/id/:id')
    getRoomById(@Param('id') id : string){
        return this.phonesService.getPhoneById(id);
    }

    @ApiOperation({summary: 'Get phone by phone'})
    @ApiResponse({status: 200, type: Phone})
    @ApiResponse({ status: 404, description: 'Телефон не найден'})
    @Get('/phone/:phone')
    getRoomByName(@Param('phone') phone: string){
        return this.phonesService.getPhoneByPhone(phone);
    }
}
