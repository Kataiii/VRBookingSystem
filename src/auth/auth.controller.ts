import { Body, Controller, Get, HttpStatus, Ip, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Client } from 'src/clients/clients.model';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { RegisterDto } from './dto/register.dto';
import { Request, response, Response } from 'express';
import { Token } from './tokens/tokens.model';
import { stringify } from 'querystring';
import { Public } from './guards/decorators/public.decorator';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @ApiOperation({summary: 'Registration user in system'})
    @ApiResponse({ status: 200, type: Client})
    @ApiResponse({status: 400, description: 'Такой аккаунт уже существует'})
    @Post('/register')
    @Public()
    async register(@Body() dto: RegisterDto, @Ip() ip, @Res({ passthrough: true }) response: Response){
        let tokens = await this.authService.register(dto, ip);
        response.cookie('refreshToken', tokens.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
        return tokens;
    }

    @ApiOperation({summary: 'Log in system'})
    @ApiResponse({ status: 200, type: Client})
    @ApiResponse({status: 401, description: 'Неверный пароль или логин'})
    @Post('/auth')
    @Public()
    async auth(@Body() dto: AuthDto, @Res({ passthrough: true }) response: Response, @Ip() ip){
        let tokens = await this.authService.auth(dto, ip);
        response.cookie('refreshToken', tokens.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
        return tokens;
    }

    @Public()
    @ApiOperation({summary: 'Log out of the system'})
    @Post('/logout')
    async logout(@Req() request: Request, @Res({passthrough: true}) response: Response){
        let refreshToken = request.cookies;
        const token = await this.authService.logout(refreshToken);
        response.clearCookie('refreshToken');
        return HttpStatus.OK;
    }

    @ApiOperation({summary: 'Refresh token'})
    @ApiResponse({status: 200, type: Token})
    @Get('/refresh')
    @Public()
    async refresh(@Req() request: Request, @Ip() ip){
        const refresh = request.cookies;
        let refreshToken = stringify(refresh);
        refreshToken = refreshToken.slice(refreshToken.indexOf(",")+2, refreshToken.length - 2);
 
        if(!refreshToken){
            throw new UnauthorizedException;
        }
        return await this.authService.refresh(refreshToken, ip);
    }
}
