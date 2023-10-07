import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePackageTypeGameDto } from './dto/create-packge-type_game.dto';
import { PackageTypeGame } from './packages-types_game.model';

@Injectable()
export class PackagesTypesGameService {
    constructor(@InjectModel(PackageTypeGame) private packagesTypesGameRepository: typeof PackageTypeGame){}

    async createPackageTypeGame(dto : CreatePackageTypeGameDto){
        const packageTypeGame = await this.packagesTypesGameRepository.create(dto);
        return packageTypeGame;
    }

    async getAll(){
        const packagesTypesGame = await this.packagesTypesGameRepository.findAll();
        if(packagesTypesGame.length === 0) throw new HttpException({message: 'Связи не найдены'}, HttpStatus.NOT_FOUND);
        return packagesTypesGame;
    }

    async getPackageTypeGameById(id: number){
        const packageTypeGame = await this.packagesTypesGameRepository.findOne({where: {id: id}});
        if(packageTypeGame === null) throw new HttpException({message: 'Связь не найдена'}, HttpStatus.NOT_FOUND);
        return packageTypeGame;
    }

    async getPackageTypesGameByPackageId(id_package: number){
        const packageTypesGame = await this.packagesTypesGameRepository.findAll({where: {id_package: id_package}});
        if(packageTypesGame === null) throw new HttpException({message: 'Связи не найдены'}, HttpStatus.NOT_FOUND);
        return packageTypesGame;
    }
}
