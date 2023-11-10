import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber, IsString, ValidateIf, IsDate, Length } from "class-validator";


export class RegisterDto{
    @IsString({message: 'Должно быть строкой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 'Иванов', description: 'Фамилия', required: false})
    surname?: string;

    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'Иван', description: 'Имя', required: true})
    firstname: string;

    @IsString({message: 'Должно быть строкой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 'Иванович', description: 'Отчество', required: false})
    patronomyc?: string;

    @IsPhoneNumber('RU', {message: 'Неверный номер телефона'})
    @ApiProperty({example: 'ХХХХХХХХХХ', description: 'Телефон', required: true})
    phone: string;

    @IsString({message: 'Должно быть строкой'})
    @Length(6, 20, {message: 'Не меньше 6 и не больше 20'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: '123456', description: 'Пароль', required: false})
    password?: string;

    @IsDate()
    @ApiProperty({example: '2022-08-16', description: 'Дата рождения', required: false})
    date_birthday?: Date;
}