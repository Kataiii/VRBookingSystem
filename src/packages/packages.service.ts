import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePackageDto } from './dto/create-package.dto';
import { Package } from './packages.model';

@Injectable()
export class PackagesService {
    constructor(@InjectModel(Package) private packagesRepository: typeof Package){}

    async createPackage(dto : CreatePackageDto){
        const packageGames = await this.packagesRepository.create(dto);
        return packageGames;
    }

    async getAll(){
        const packages = await this.packagesRepository.findAll();
        if(packages.length === 0) throw new HttpException({message: 'Пакеты не найдены'}, HttpStatus.NOT_FOUND);
        return packages;
    }

    async getPackageById(id: number){
        const packageGames = await this.packagesRepository.findOne({where: {id: id}});
        if(packageGames === null) throw new HttpException({message: 'Пакет не найден'}, HttpStatus.NOT_FOUND);
        return packageGames;
    }

    async getPackageByName(name: string){
        const packageGames = await this.packagesRepository.findOne({where: {name: name}});
        if(packageGames === null) throw new HttpException({message: 'Пакет не найден'}, HttpStatus.NOT_FOUND);
        return packageGames;
    }
}
