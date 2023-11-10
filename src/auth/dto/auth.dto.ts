import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber, IsString, Length } from "class-validator";

export class AuthDto{
    @IsPhoneNumber('RU', {message: 'Неверный номер телефона'})
    @ApiProperty({example: 'ХХХХХХХХХХ', description: 'Телефон', required: true})
    phone: string;

    @IsString({message: 'Должно быть строкой'})
    @Length(6, 20, {message: 'Не меньше 6 и не больше 20'})
    @ApiProperty({example: '123456', description: 'Пароль', required: false})
    password?: string;
}