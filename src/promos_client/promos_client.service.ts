import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePromoClientDto } from './dto/create-promo_client.dto';
import { PromoClient } from './promos_client.model';

@Injectable()
export class PromosClientService {
    constructor(@InjectModel(PromoClient) private promosClientRepository: typeof PromoClient){}

    async createPromoClient(dto : CreatePromoClientDto){
        const promo_client = await this.promosClientRepository.create(dto);
        return promo_client;
    }

    async getAll(){
        const promos_client = await this.promosClientRepository.findAll();
        if(promos_client.length === 0) throw new HttpException({message: 'Промо не найдены'}, HttpStatus.NOT_FOUND);
        return promos_client;
    }

    async getPromoClientById(id: number){
        const promo_client = await this.promosClientRepository.findOne({where: {id: id}});
        if(promo_client === null) throw new HttpException({message: 'Промо не найден'}, HttpStatus.NOT_FOUND);
        return promo_client;
    }

    async getPromoClientByLink(link: string){
        const promo_client = await this.promosClientRepository.findOne({where: {link: link}});
        if(promo_client === null) throw new HttpException({message: 'Промо не найден'}, HttpStatus.NOT_FOUND);
        return promo_client;
    }
}
