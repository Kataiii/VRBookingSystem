import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePromoDto } from './dto/create-promo.dto';
import { Promo } from './promos.model';

@Injectable()
export class PromosService {
    constructor(@InjectModel(Promo) private promosRepository: typeof Promo){}

    async createPromo(dto : CreatePromoDto){
        const promo = await this.promosRepository.create(dto);
        return promo;
    }

    async getAll(){
        const promos = await this.promosRepository.findAll();
        if(promos.length === 0) throw new HttpException({message: 'Промо не найдены'}, HttpStatus.NOT_FOUND);
        return promos;
    }

    async getPromoById(id: number){
        const promo = await this.promosRepository.findOne({where: {id: id}});
        if(promo === null) throw new HttpException({message: 'Промо не найден'}, HttpStatus.NOT_FOUND);
        return promo;
    }

    async getPromosByName(name: string){
        const promos = await this.promosRepository.findAll({where: {name: name}});
        if(promos.length === 0) throw new HttpException({message: 'Промо не найдены'}, HttpStatus.NOT_FOUND);
        return promos;
    }
}
