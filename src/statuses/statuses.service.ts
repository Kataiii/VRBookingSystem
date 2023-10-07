import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { Status } from './statuses.model';

@Injectable()
export class StatusesService {
    constructor(@InjectModel(Status) private statusesRepository: typeof Status){}

    async createStatus(dto : CreateStatusDto){
        const status = await this.statusesRepository.create(dto);
        return status;
    }

    async getAll(){
        const statuses = await this.statusesRepository.findAll();
        if(statuses.length === 0) throw new HttpException({message: 'Статусы не найдены'}, HttpStatus.NOT_FOUND);
        return statuses;
    }

    async getStatusById(id: number){
        const status = await this.statusesRepository.findOne({where: {id: id}});
        if(status === null) throw new HttpException({message: 'Статус не найден'}, HttpStatus.NOT_FOUND);
        return status;
    }

    async getStatusByName(name: string){
        const status = await this.statusesRepository.findOne({where: {name: name}});
        if(status === null) throw new HttpException({message: 'Статус не найден'}, HttpStatus.NOT_FOUND);
        return status;
    }
}
