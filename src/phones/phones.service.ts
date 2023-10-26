import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { Phone } from './phones.model';
import * as bcrypt from 'bcrypt';
import * as randomstring from 'randomstring';

@Injectable()
export class PhonesService {
    constructor(@InjectModel(Phone) private phonesRepository: typeof Phone){}

    async createPhone(dto : CreatePhoneDto){
        dto.id = await bcrypt.hash(dto.id, 5);
        const phone = await this.phonesRepository.create(dto);
        return phone;
    }

    async getAll(){
        const phones = await this.phonesRepository.findAll();
        if(phones.length === 0) throw new HttpException({message: 'Телефоны не найдены'}, HttpStatus.NOT_FOUND);
        return phones;
    }

    async getPhoneById(id: string){
        const phones = await this.phonesRepository.findAll();
        const phone = phones.map(item => {
            if(this.comparePhoneId(id,item.id)) return item;
        })[0];
        if(phone === null) throw new HttpException({message: 'Телефон не найден'}, HttpStatus.NOT_FOUND);
        return phone;
    }

    async getPhoneByPhone(phone: string){
        const phoneObject = await this.phonesRepository.findOne({where: {phone: phone}});
        if(phoneObject === null) throw new HttpException({message: 'Телефон не найдена'}, HttpStatus.NOT_FOUND);
        return phoneObject;
    }

    comparePhoneId(id: string, id_phone: string){
        return bcrypt.compareSync(id, id_phone);
    }

    async generateIdPhone(): Promise<string>{
        let id_phone = randomstring.generate(8);
        const phones = await this.phonesRepository.findAll();
        if(phones.length > 0){
            while(true){
                id_phone = randomstring.generate(8);
                const phone = phones.map(item => {
                    if(this.comparePhoneId(id_phone,item.id)) return item;
                })[0];
                if(phone == null) break;
            }
        }
        console.log(id_phone);
        return id_phone;
    }

    async getPhones(){
        const phones = await this.phonesRepository.findAll();
        return phones;
    }
}
