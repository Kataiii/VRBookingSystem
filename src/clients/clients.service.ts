import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './clients.model';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientsService {
    constructor(@InjectModel(Client) private clientsRepository: typeof Client){}

    async createClient(dto : CreateClientDto){
        const client = await this.clientsRepository.create(dto);
        return client;
    }

    async getAll(){
        const clients = await this.clientsRepository.findAll();
        if(clients.length === 0) throw new HttpException({message: 'Клиенты не найдены'}, HttpStatus.NOT_FOUND);
        return clients;
    }

    async getClientById(id: number){
        const client = await this.clientsRepository.findOne({where: {id: id}});
        if(client === null) throw new HttpException({message: 'Клиент не найден'}, HttpStatus.NOT_FOUND);
        return client;
    }

    async getClientByFirstname(firstname: string){
        const clients = await this.clientsRepository.findAll({where: {firstname: firstname}});
        if(clients.length === 0) throw new HttpException({message: 'Клиенты не найден'}, HttpStatus.NOT_FOUND);
        return clients;
    }

    async getClientByPhoneId(id_phone: number){
        const client = await this.clientsRepository.findOne({where: {id_phone: id_phone}});
        if(client === null) throw new HttpException({message: 'Клиент не найден'}, HttpStatus.NOT_FOUND);
        return client;
    }
}
