import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Client } from 'src/clients/clients.model';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { RegisterDto } from './dto/register.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @ApiOperation({summary: 'Registration user in system'})
    @ApiResponse({ status: 200, type: Client})
    @ApiResponse({status: 400, description: 'Такой аккаунт уже существует'})
    @Post('/register')
    async register(@Body() dto: RegisterDto){
        return await this.authService.register(dto);
    }

    @ApiOperation({summary: 'Log in system'})
    @ApiResponse({ status: 200, type: Client})
    @ApiResponse({status: 401, description: 'Неверный пароль или логин'})
    @Post('/auth')
    async auth(@Body() dto: AuthDto){
        return await this.authService.auth(dto);
    }
}
