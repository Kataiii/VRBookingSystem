import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './games.model';

@Injectable()
export class GamesService {
    constructor(@InjectModel(Game) private gamesRepository: typeof Game,
                                    private filesService:FilesService){}

    async createGame(dto : CreateGameDto, file: any){
        const link: string = await this.filesService.createFile(
            file, 
            file.originalname.slice(file.originalname.lastIndexOf('.'), file.originalname.length), 
            'pictures_games'
        );
        const rule = await this.gamesRepository.create({...dto, image: link});
        return rule;
    }

    async getAll(){
        const games = await this.gamesRepository.findAll();
        if(games.length === 0) throw new HttpException({message: 'Игры не найдены'}, HttpStatus.NOT_FOUND);
        return games;
    }

    async getGameById(id: number){
        const game = await this.gamesRepository.findOne({where: {id: id}});
        if(game === null) throw new HttpException({message: 'Игра не найдена'}, HttpStatus.NOT_FOUND);
        return game;
    }

    async getGameByName(name: string){
        const game = await this.gamesRepository.findOne({where: {name: name}});
        if(game === null) throw new HttpException({message: 'Игра не найдена'}, HttpStatus.NOT_FOUND);
        return game;
    }
}
