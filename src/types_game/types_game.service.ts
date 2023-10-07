import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeGameDto } from './dto/create-type_game.dto';
import { TypeGame } from './types_game.model';

@Injectable()
export class TypesGameService {
    constructor(@InjectModel(TypeGame) private typesGameRepository: typeof TypeGame){}

    async createTypeGame(dto : CreateTypeGameDto){
        const type_game = await this.typesGameRepository.create(dto);
        return type_game;
    }

    async getAll(){
        const types_game = await this.typesGameRepository.findAll();
        if(types_game.length === 0) throw new HttpException({message: 'Типы игр не найдены'}, HttpStatus.NOT_FOUND);
        return types_game;
    }

    async getTypeGameById(id: number){
        const type_game = await this.typesGameRepository.findOne({where: {id: id}});
        if(type_game === null) throw new HttpException({message: 'Тип игры не найден'}, HttpStatus.NOT_FOUND);
        return type_game;
    }

    async getTypeGameByName(name: string){
        const type_game = await this.typesGameRepository.findOne({where: {name: name}});
        if(type_game === null) throw new HttpException({message: 'Тип игры не найден'}, HttpStatus.NOT_FOUND);
        return type_game;
    }
}
