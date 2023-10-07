import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Client } from './clients.model';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
    constructor(private clientsService: ClientsService){}

    @ApiOperation({summary: 'Create client'})
    @ApiResponse({ status: 200, type: Client})
    @Post()
    create(@Body() dto: CreateClientDto){
        return this.clientsService.createClient(dto);
    }

    @ApiOperation({summary: 'Get all clients'})
    @ApiResponse({ status: 200, type: [Client]})
    @ApiResponse({ status: 404, description: 'Клиенты не найдены'})
    @Get()
    getAll(){
        return this.clientsService.getAll();
    }

    @ApiOperation({summary: 'Get client by id'})
    @ApiResponse({status: 200, type: Client})
    @ApiResponse({ status: 404, description: 'Клиент не найден'})
    @Get('/id/:id')
    getClientById(@Param('id') id : number){
        return this.clientsService.getClientById(id);
    }

    @ApiOperation({summary: 'Get client by firstname'})
    @ApiResponse({status: 200, type: Client})
    @ApiResponse({ status: 404, description: 'Клиент не найден'})
    @Get('/firstname/:firstname')
    getClientsByName(@Param('firstname') firstname: string){
        return this.clientsService.getClientByFirstname(firstname);
    }

    @ApiOperation({summary: 'Get client by firstname'})
    @ApiResponse({status: 200, type: Client})
    @ApiResponse({ status: 404, description: 'Клиент не найден'})
    @Get('/phone_id/:id')
    getClientByPhoneId(@Param('id') id: number){
        return this.clientsService.getClientByPhoneId(id);
    }
}
