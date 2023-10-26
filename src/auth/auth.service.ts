import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { PhonesService } from 'src/phones/phones.service';
import { AuthDto } from './dto/auth.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private clientsService: ClientsService,
                private phonesService: PhonesService){}

    async register(dto: RegisterDto){
        let phones = await this.phonesService.getPhones();
        if(phones.length > 0){
            let check_phone = phones.find(item => item.phone == dto.phone);
            if(check_phone != null){
                throw new HttpException("Такой аккаунт уже существует", HttpStatus.BAD_REQUEST);
            }
        }
        const id_phone = await this.phonesService.generateIdPhone();
        const phone = await this.phonesService.createPhone({id: id_phone, phone: dto.phone});
        const client = await this.clientsService.createClient({
            surname: dto.surname,
            firstname: dto.firstname,
            patronomyc: dto.patronomyc,
            password: dto.password,
            id_phone: id_phone,
            date_birthday: dto.date_birthday
        })
        return {client, phone};
    }

    async auth(dto: AuthDto){
        const account = await this.validateAccount(dto);
        return account;
    }

    private async validateAccount(dto: AuthDto){
        try{
            const phone = await this.phonesService.getPhoneByPhone(dto.phone);
            if(phone != null){
                const clients = await this.clientsService.getAll();
                const client = clients.find(item => this.phonesService.comparePhoneId(item.id_phone, phone.id) == true);
                const passwordEqual = await bcrypt.compare(dto.password, client.password);
                if(phone && passwordEqual){
                    return client;
                }
            }
        } catch(e){
            throw new UnauthorizedException('Неверный пароль или логин');
        }
    }
}
