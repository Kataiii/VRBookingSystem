import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { PhonesService } from 'src/phones/phones.service';
import { AuthDto } from './dto/auth.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { TokensService } from './tokens/tokens.service';
import { Client } from 'src/clients/clients.model';


@Injectable()
export class AuthService {
    constructor(private clientsService: ClientsService,
                private phonesService: PhonesService,
                private tokensService: TokensService){}

    async register(dto: RegisterDto, ip){
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
        });

        const refreshToken = this.tokensService.generateRefreshToken(client);
        await this.tokensService.saveRefreshToken(refreshToken, client.id, ip);
        const accessToken = await this.generateToken(client);

        return {client, accessToken, refreshToken};
    }

    async auth(dto: AuthDto, ip){
        const account = await this.validateAccount(dto);

        const refreshToken = this.tokensService.generateRefreshToken(account);
        await this.tokensService.saveRefreshToken(refreshToken, account.id, ip);
        const accessToken = await this.generateToken(account);

        return {refreshToken, accessToken, account};
    }

    async logout(refreshToken){
        const tokenValue = refreshToken.refreshToken;
        const token = await this.tokensService.removeToken(tokenValue);
        return token;
    }

    async refresh(refreshToken, ip){
        const clientData = await this.tokensService.validateRefreshToken(refreshToken);
        const tokenData = await this.tokensService.findRefreshToken(refreshToken);
        // console.log('token data ', tokenData);
        if(!clientData || !tokenData){
            throw new UnauthorizedException;
        }
        const client = await this.clientsService.getClientById(clientData.id);
        const refreshTokenNew = this.tokensService.generateRefreshToken(client);
        await this.tokensService.saveRefreshToken(refreshToken, client.id, ip);
        const accessToken = await this.generateToken(client);

        return {client, accessToken, refreshTokenNew};
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

    private async generateToken(client: Client){
        const payload = {phone_id: client.id_phone, id: client.id, roles: client.roles};
        const tokenAccess = await jwt.sign(payload, process.env.PRIVATE_KEY, {expiresIn: '15m'});
        return tokenAccess;
    }
}
