import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './rooms.model';

@Injectable()
export class RoomsService {
    constructor(@InjectModel(Room) private roomsRepository: typeof Room){}

    async createRoom(dto : CreateRoomDto){
        const room = await this.roomsRepository.create(dto);
        return room;
    }

    async getAll(){
        const rooms = await this.roomsRepository.findAll();
        if(rooms.length === 0) throw new HttpException({message: 'Комнаты не найдены'}, HttpStatus.NOT_FOUND);
        return rooms;
    }

    async getRoomById(id: number){
        const room = await this.roomsRepository.findOne({where: {id: id}});
        if(room === null) throw new HttpException({message: 'Комната не найдена'}, HttpStatus.NOT_FOUND);
        return room;
    }

    async getRoomByName(name: string){
        const room = await this.roomsRepository.findOne({where: {name: name}});
        if(room === null) throw new HttpException({message: 'Комната не найдена'}, HttpStatus.NOT_FOUND);
        return room;
    }

    async update(dto: UpdateRoomDto){
        const room = await this.roomsRepository.update({name: dto.name, isOccupied: dto.isOccupied}, {where: {id: dto.id}});
        return room;
    }
}
