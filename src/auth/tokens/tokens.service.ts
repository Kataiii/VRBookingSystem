import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Token } from './tokens.model';
import * as jwt from 'jsonwebtoken';
import { Client } from 'src/clients/clients.model';

@Injectable()
export class TokensService {
    constructor(@InjectModel(Token) private tokensRepository: typeof Token){}

    generateRefreshToken(client: Client): string{
        const payload = {phone_id: client.id_phone, id: client.id, roles: client.roles}
        return jwt.sign(payload, process.env.PRIVATE_KEY_REFRESH, {expiresIn: '30d'});
    }

    async saveRefreshToken(refresh_token: string, client_id: number, ip: string){
        const tokens = await this.tokensRepository.findAll({where: {client_id: client_id}});
        const deleteTokens = tokens.filter(token => Date.now() - token.createdAt >= 30);
        for(let i: number = 0; i < deleteTokens.length; i++){
            await this.tokensRepository.destroy({where: {id: deleteTokens[i].id}});
        }

        const token = await this.tokensRepository.create({
            refresh_token: refresh_token,
            client_id: client_id,
            ip: ip
        });
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await this.tokensRepository.destroy({ where: { refresh_token: String(refreshToken) } });
        return tokenData;
    }

    async validateRefreshToken(refreshToken){
        try{
            const clientData = <jwt.JwtPayload>jwt.verify(refreshToken, process.env.PRIVATE_KEY_REFRESH);
            return clientData;
        } catch(e){
            return null;
        }
    }

    async findRefreshToken(refreshToken){
        const tokenData = await this.tokensRepository.findOne({where: {refresh_token: refreshToken}});
        return tokenData;
    }
}
