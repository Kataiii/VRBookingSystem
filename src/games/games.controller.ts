import { Body, Controller, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './games.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { GamesService } from './games.service';

@ApiTags('Games')
@Controller('games')
export class GamesController {
    constructor(private gamesService: GamesService){}

    @ApiOperation({summary: 'Create game'})
    @ApiResponse({ status: 200, type: Game})
    @UseInterceptors(FileInterceptor('file'))
    @Post()
    create(@Body() dto: CreateGameDto, @UploadedFile() file){
        return this.gamesService.createGame(dto, file);
    }

    @ApiOperation({summary: 'Get all games'})
    @ApiResponse({ status: 200, type: [Game]})
    @ApiResponse({ status: 404, description: 'Игры не найдены'})
    @Get()
    getAll(){
        return this.gamesService.getAll();
    }

    @ApiOperation({summary: 'Get game by id'})
    @ApiResponse({status: 200, type: Game})
    @ApiResponse({ status: 404, description: 'Игра не найдена'})
    @Get('/id/:id')
    getGameById(@Param('id') id : number){
        return this.gamesService.getGameById(id);
    }

    @ApiOperation({summary: 'Get game by name'})
    @ApiResponse({status: 200, type: Game})
    @ApiResponse({ status: 404, description: 'Игра не найдена'})
    @Get('/name/:name')
    getGameByName(@Param('name') name: string){
        return this.gamesService.getGameByName(name);
    }
}
