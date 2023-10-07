import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePackageClientDto } from './dto/create-package_client.dto';
import { PackageClient } from './packages_clients.model';

@Injectable()
export class PackagesClientsService {
    constructor(@InjectModel(PackageClient) private packagesClientRepository: typeof PackageClient){}

    async createPackageClient(dto : CreatePackageClientDto){
        const packageClient = await this.packagesClientRepository.create(dto);
        return packageClient;
    }

    async getAll(){
        const packagesClient = await this.packagesClientRepository.findAll();
        if(packagesClient.length === 0) throw new HttpException({message: 'Связи клиента и пакета не найдены'}, HttpStatus.NOT_FOUND);
        return packagesClient;
    }

    async getPackageClientById(id: number){
        const packageClient = await this.packagesClientRepository.findOne({where: {id: id}});
        if(packageClient === null) throw new HttpException({message: 'Связь клиента и пакета не найдена'}, HttpStatus.NOT_FOUND);
        return packageClient;
    }

    async getPackageClientByClientId(id: number){
        const packagesClient = await this.packagesClientRepository.findAll({where: {id_client: id}});
        if(packagesClient === null) throw new HttpException({message: 'Связь клиента и пакета не найдена'}, HttpStatus.NOT_FOUND);
        return packagesClient;
    }

    async getPackageClientByPackageId(id: number){
        const packagesClient = await this.packagesClientRepository.findAll({where: {id_package: id}});
        if(packagesClient === null) throw new HttpException({message: 'Связь клиента и пакета не найдена'}, HttpStatus.NOT_FOUND);
        return packagesClient;
    }
}
