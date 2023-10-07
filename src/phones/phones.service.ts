import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { Phone } from './phones.model';

@Injectable()
export class PhonesService {
    constructor(@InjectModel(Phone) private phonesRepository: typeof Phone){}

    async createPhone(dto : CreatePhoneDto){
        const room = await this.phonesRepository.create(dto);
        return room;
    }

    async getAll(){
        const rooms = await this.phonesRepository.findAll();
        if(rooms.length === 0) throw new HttpException({message: 'Телефоны не найдены'}, HttpStatus.NOT_FOUND);
        return rooms;
    }

    async getPhoneById(id: number){
        const room = await this.phonesRepository.findOne({where: {id: id}});
        if(room === null) throw new HttpException({message: 'Телефон не найдена'}, HttpStatus.NOT_FOUND);
        return room;
    }

    async getPhoneByPhone(phone: string){
        const room = await this.phonesRepository.findOne({where: {phone: phone}});
        if(room === null) throw new HttpException({message: 'Телефон не найдена'}, HttpStatus.NOT_FOUND);
        return room;
    }
}
