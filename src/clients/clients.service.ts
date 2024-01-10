import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { Client } from './clients.model';
import { CreateClientDto } from './dto/create-client.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientsService {
    constructor(@InjectModel(Client) private clientsRepository: typeof Client,
                private rolesService: RolesService){}

    async createClient(dto : CreateClientDto){
        const password = await bcrypt.hash(dto.password, 10);
        dto.password = password;
        const client = await this.clientsRepository.create(dto);
        const role = await this.rolesService.getRoleByName('user');
        await client.$set('roles', [role.id]);
        client.roles = [role];
        return await this.getClientById(client.id);
    }

    async getAll(){
        const clients = await this.clientsRepository.findAll({include:{all:true}});
        if(clients.length === 0) throw new HttpException({message: 'Клиенты не найдены'}, HttpStatus.NOT_FOUND);
        return clients;
    }

    async getClientById(id: number){
        const client = await this.clientsRepository.findOne({where: {id: id}, include: {all: true}});
        if(client === null) throw new HttpException({message: 'Клиент не найден'}, HttpStatus.NOT_FOUND);
        return client;
    }

    async getClientByFirstname(firstname: string){
        const clients = await this.clientsRepository.findAll({where: {firstname: firstname}, include: {all: true}});
        if(clients.length === 0) throw new HttpException({message: 'Клиенты не найден'}, HttpStatus.NOT_FOUND);
        return clients;
    }

    async getClientByPhoneId(id_phone: number){
        const client = await this.clientsRepository.findOne({where: {id_phone: id_phone}, include: {all: true}});
        if(client === null) throw new HttpException({message: 'Клиент не найден'}, HttpStatus.NOT_FOUND);
        return client;
    }
}
