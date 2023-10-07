import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTypeGameDto } from './dto/create-type_game.dto';
import { TypeGame } from './types_game.model';
import { TypesGameService } from './types_game.service';

@ApiTags('TypesGame')
@Controller('types-game')
export class TypesGameController {
    constructor(private typesGameService: TypesGameService){}

    @ApiOperation({summary: 'Create type game'})
    @ApiResponse({ status: 200, type: TypeGame})
    @Post()
    create(@Body() dto: CreateTypeGameDto){
        return this.typesGameService.createTypeGame(dto);
    }

    @ApiOperation({summary: 'Get all types game'})
    @ApiResponse({ status: 200, type: [TypeGame]})
    @ApiResponse({ status: 404, description: 'Типы игр не найдены'})
    @Get()
    getAll(){
        return this.typesGameService.getAll();
    }

    @ApiOperation({summary: 'Get type game by id'})
    @ApiResponse({status: 200, type: TypeGame})
    @ApiResponse({ status: 404, description: 'Тип игры не найден'})
    @Get('/id/:id')
    getTypeGameById(@Param('id') id : number){
        return this.typesGameService.getTypeGameById(id);
    }

    @ApiOperation({summary: 'Get type game by name'})
    @ApiResponse({status: 200, type: TypeGame})
    @ApiResponse({ status: 404, description: 'Тип игры не найден'})
    @Get('/name/:name')
    getTypeGameByName(@Param('name') name: string){
        return this.typesGameService.getTypeGameByName(name);
    }
}
